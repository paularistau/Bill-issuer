import { IsOptional, IsEnum, IsString } from 'class-validator';
import { DebtStatus } from 'src/debts/debts.model';

export class GetDebtsFilterDto {
  @IsOptional()
  @IsEnum(DebtStatus)
  status?: DebtStatus;

  @IsOptional()
  @IsString()
  search: string;
}
