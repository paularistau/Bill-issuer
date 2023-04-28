import { Injectable, NotFoundException } from '@nestjs/common';
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

  getDebtById(debtId: number): Debt {
    const debt = this.debts.find(
      (debt) => Number(debt.debtId) == Number(debtId),
    );

    // if (!debt) {
    //   throw new NotFoundException(`Debt with id ${debtId} not found`);
    // }

    console.log('return debt', debt, typeof debtId, typeof debt.debtId);
    return debt;
  }

  createDebt(createDebtDto: CreateDebtDto): Debt {
    const { name, email, debtAmount, debtDueDate, debtId } = createDebtDto;
    const debt: Debt = {
      id: uuid(),
      debtId: debtId,
      name,
      email,
      debtAmount,
      debtDueDate,
      status: DebtStatus.CREATED,
    };

    this.debts.push(debt);
    return debt;
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

  deleteDebt(debtId: number): void {
    const found = this.getDebtById(debtId);
    this.debts = this.debts.filter((debt) => debt.debtId !== found.debtId);
  }

  updateDebtStatus(debtId: number, status: DebtStatus): Debt {
    console.log(debtId);
    const task = this.getDebtById(debtId);
    task.status = status;
    return task;
  }
}
