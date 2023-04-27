import { Injectable } from '@nestjs/common';
import { Debt, DebtStatus } from './debts.model';
import { uuid } from 'uuidv4';
import { CreateDebtDto } from 'src/debts/dto/create-debt.dto';
import { GetDebtsFilterDto } from 'src/debts/dto/filter-debts.dto';

@Injectable()
export class DebtsService {
  private debts: Debt[] = [];

  getAllDebts(): Debt[] {
    return this.debts;
  }

  getDebtsWithFilters(filterDto: GetDebtsFilterDto): Debt[] {
    const { status, search } = filterDto;
    let debts = this.getAllDebts();

    if (status) {
      debts = debts.filter((debt) => debt.status === status);
    }

    if (search) {
      debts = debts.filter(
        (debt) => debt.name.includes(search) || debt.email.includes(search),
      );
    }

    return debts;
  }

  getDebtById(id: string): Debt {
    return this.debts.find((debt) => debt.id === id);
  }

  createDebt(createDebtDto: CreateDebtDto): Debt {
    const { name, email, debtAmount, debtDueDate } = createDebtDto;
    const task: Debt = {
      id: uuid(),
      name,
      email,
      debtAmount,
      debtDueDate,
      status: DebtStatus.CREATED,
    };

    this.debts.push(task);
    return task;
  }

  deleteDebt(id: string): void {
    const found = this.getDebtById(id);
    this.debts = this.debts.filter((debt) => debt.id !== found.id);
  }

  updateDebtStatus(id: string, status: DebtStatus): Debt {
    const task = this.getDebtById(id);
    task.status = status;
    return task;
  }
}
