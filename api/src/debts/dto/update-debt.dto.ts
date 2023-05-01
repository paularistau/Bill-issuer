import { IsEnum } from 'class-validator';
import { DebtStatus } from 'src/debts/debts-status.enum';

export class UpdateDebtStatusDTO {
  @IsEnum(DebtStatus)
  status: DebtStatus;
}
