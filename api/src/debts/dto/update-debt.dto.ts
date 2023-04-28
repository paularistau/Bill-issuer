import { IsEnum } from 'class-validator';
import { DebtStatus } from 'src/debts/debts.model';

export class UpdateDebtStatusDTO {
  @IsEnum(DebtStatus)
  status: DebtStatus;
}
