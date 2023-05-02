import { Injectable, NotFoundException } from '@nestjs/common';
import { DebtStatus } from './debts-status.enum';
import { Debt } from '../debts/debts.entity';
import { CreateDebtDto } from '../debts/dto/create-debt.dto';
import { GetDebtsFilterDto } from '../debts/dto/filter-debts.dto';
import { DebtsRepository } from '../debts/debts.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, QueryFailedError } from 'typeorm';
import * as fs from 'fs';
import * as csvParser from 'csv-parser';

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

  async createDebtsFromCSV(filePath: string): Promise<void> {
    const stream = fs.createReadStream(filePath);
    const parser = stream.pipe(csvParser());

    for await (const row of parser) {
      const createDebtDto = {
        debtId: row.debtId,
        name: row.name,
        email: row.email,
        debtAmount: row.debtAmount,
        debtDueDate: new Date(row.debtDueDate),
        status: row.status,
        governmentId: row.governmentId,
      };

      await this.debtsRepository.createDebt(createDebtDto);
    }
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
