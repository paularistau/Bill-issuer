import { IsEnum } from 'class-validator';
import { DebtStatus } from '../debts-status.enum';

export class UpdateDebtStatusDTO {
  @IsEnum(DebtStatus)
  status: DebtStatus;
}
