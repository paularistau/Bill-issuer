import { Injectable, NotFoundException } from '@nestjs/common';
import { DebtStatus } from './debts-status.enum';
import { Debt } from '../debts/debts.entity';
import { CreateDebtDto } from '../debts/dto/create-debt.dto';
import { GetDebtsFilterDto } from '../debts/dto/filter-debts.dto';
import { DebtsRepository } from '../debts/debts.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, QueryFailedError } from 'typeorm';
import * as csvParser from 'csv-parser';
import * as fs from 'fs';
import * as path from 'path';

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

        // if (createDebtDto.status === DebtStatus.CREATED)
        //   await this.emailService.sendMail(createDebtDto.debtId);

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

  async createDebtsFromCSV(fileBuffer: Buffer): Promise<void> {
    const filePath = path.join(__dirname, '/debts.csv');

    fs.writeFileSync(filePath, fileBuffer);

    console.log('createDebtsFromCSV', filePath);

    const debtsToCreate: CreateDebtDto[] = [];

    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', async (data: any) => {
        // Mapeia os campos do CSV para o DTO de criação de dívidas
        const existingDebt = await this.debtsRepository.findOne(data.debtId);
        if (existingDebt) {
          console.log(
            `Debt with debtId ${data.debtId} already exists, skipping...`,
          );
          return;
        }

        const createDebtDto: CreateDebtDto = {
          debtId: data.debtId,
          name: data.name,
          email: data.email,
          debtAmount: data.debtAmount,
          debtDueDate: new Date(data.debtDueDate),
          governmentId: data.governmentId,
          status: DebtStatus.CREATED,
        };

        debtsToCreate.push(createDebtDto);
      })
      .on('end', async () => {
        // Cria as dívidas no banco de dados
        for (const createDebtDto of debtsToCreate) {
          await this.createDebt(createDebtDto);
        }

        fs.unlinkSync(filePath);
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
}
