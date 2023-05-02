import { IsOptional, IsString } from 'class-validator';

export class GetPaymentsFilterDto {
  @IsOptional()
  @IsString()
  search: string;
}
