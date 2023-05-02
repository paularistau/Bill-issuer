import { Injectable, NotFoundException } from '@nestjs/common';
import { DebtStatus } from './debts-status.enum';
import { Debt } from '../debts/debts.entity';
import { CreateDebtDto } from '../debts/dto/create-debt.dto';
import { GetDebtsFilterDto } from '../debts/dto/filter-debts.dto';
import { DebtsRepository } from '../debts/debts.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, QueryFailedError } from 'typeorm';
import * as csvParser from 'csv-parser';
import { join } from 'path';
import { createReadStream, writeFile, ensureDir, remove } from 'fs-extra';

@Injectable()
export class DebtsService {
  constructor(
    @InjectRepository(DebtsRepository)
    private debtsRepository: DebtsRepository,
    private readonly connection: Connection,
  ) {}

  getDebts(filterDto: GetDebtsFilterDto): Promise<Debt[]> {
    return this.debtsRepository.getDebts(filterDto);
  }

  async getDebtById(debtId: number): Promise<Debt> {
    const found = await this.debtsRepository.findOne(debtId);

    if (!found) {
      throw new NotFoundException(`Debt with id ${debtId} not found`);
    }
    return found;
  }

  createDebt(createDebtDto: CreateDebtDto): Promise<Debt> {
    return this.connection.transaction(async (transactionManager) => {
      try {
        const user = this.debtsRepository.create(createDebtDto);

        await transactionManager.save(user);

        return user;
      } catch (error) {
        if (error instanceof QueryFailedError) {
          console.log('Erro ao inserir registro:', error, createDebtDto);
        } else {
          console.log('Erro desconhecido:', error, createDebtDto);
        }
      }
    });
  }

  async deleteDebt(debtId: number): Promise<void> {
    const result = await this.debtsRepository.delete(debtId);

    if (result.affected === 0) {
      throw new NotFoundException(`Debt with id ${debtId} not found`);
    }
  }

  async updateDebtStatus(debtId: number, status: DebtStatus): Promise<Debt> {
    const task = await this.getDebtById(debtId);

    task.status = status;
    await this.debtsRepository.save(task);

    return task;
  }

  async createDebtsFromCSV(buffer: Buffer): Promise<Debt[]> {
    const debts: Debt[] = [];

    const tempFolderPath = join(__dirname, '..', '..', 'temp');
    const tempCsvFilePath = join(tempFolderPath, 'debts.csv');

    await ensureDir(tempFolderPath);

    await writeFile(tempCsvFilePath, buffer);

    const csvStream = createReadStream(tempCsvFilePath).pipe(
      csvParser({
        mapHeaders: ({ header }) => header.toLowerCase().trim(),
      }),
    );

    for await (const row of csvStream) {
      try {
        const { debtid, name, email, debtamount, debtduedate, governmentid } =
          row;

        if (
          !debtid ||
          !name ||
          !email ||
          !debtamount ||
          !debtduedate ||
          !governmentid
        ) {
          console.error(
            `Skipping invalid row. Required fields missing: ${JSON.stringify(
              row,
            )}`,
          );
          continue;
        }

        const existingDebt = await this.debtsRepository.findOne({
          where: { debtId: debtid },
        });

        if (existingDebt) {
          console.error(
            `Skipping existing debt with ID ${debtid}. Row data: ${JSON.stringify(
              row,
            )}`,
          );
          continue;
        }

        const debt = await this.createDebt({
          debtId: debtid,
          name: name,
          email: email,
          debtAmount: debtamount,
          debtDueDate: new Date(debtduedate),
          governmentId: governmentid,
          status: DebtStatus.CREATED,
        });

        debts.push(debt);
      } catch (err) {
        console.error(`Error creating debt from row: ${JSON.stringify(row)}`);
        console.error(err);
      }
    }

    await remove(tempCsvFilePath);

    return debts;
  }
}
