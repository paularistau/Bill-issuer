import { IsOptional, IsEnum, IsString } from 'class-validator';
import { DebtStatus } from '../debts-status.enum';

export class GetDebtsFilterDto {
  @IsOptional()
  @IsEnum(DebtStatus)
  status?: DebtStatus;

  @IsOptional()
  @IsString()
  search: string;
}
