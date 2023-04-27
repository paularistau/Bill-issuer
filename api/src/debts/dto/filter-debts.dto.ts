import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';
import { DebtStatus } from 'src/debts/debts.model';

export class GetDebtsFilterDto {
  @IsOptional()
  @IsIn([DebtStatus.CREATED, DebtStatus.DELAYED, DebtStatus.PAYED])
  status: DebtStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
