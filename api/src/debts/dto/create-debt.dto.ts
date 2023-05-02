import { IsNotEmpty } from 'class-validator';

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
