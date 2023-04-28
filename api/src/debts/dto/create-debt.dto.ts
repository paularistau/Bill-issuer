import { IsNotEmpty } from 'class-validator';
import { DebtStatus } from 'src/debts/debts.model';

export class CreateDebtDto {
  @IsNotEmpty()
  debtId: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  debtAmount: string;

  @IsNotEmpty()
  debtDueDate: Date;

  @IsNotEmpty()
  governmentId: number;
}
