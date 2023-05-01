import { Injectable, NotFoundException } from '@nestjs/common';
import { DebtStatus } from './debts-status.enum';
import { Debt } from 'src/debts/debts.entity';
import { CreateDebtDto } from 'src/debts/dto/create-debt.dto';
import { GetDebtsFilterDto } from 'src/debts/dto/filter-debts.dto';
import { DebtsRepository } from 'src/debts/debts.repository';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class DebtsService {
  constructor(
    @InjectRepository(DebtsRepository)
    private debtsRepository: DebtsRepository,
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
    return this.debtsRepository.createDebt(createDebtDto);
  }

  async createDebtsFromCSV(buffer: Buffer) {
    const csv = buffer.toString();
    const rows = csv.split('\n');
    const debts: CreateDebtDto[] = [];
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (!row) {
        continue;
      }
      const [name, governmentId, email, debtAmount, debtDueDate, debtId] =
        row.split(',');
      debts.push({
        name: name.trim(),
        governmentId: Number(governmentId),
        email: email,
        debtAmount: debtAmount.trim(),
        debtDueDate: new Date(debtDueDate.trim()),
        debtId: Number(debtId),
      });
    }
    for (const debt of debts) {
      this.createDebt(debt);
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
