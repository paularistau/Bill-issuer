import { IsNotEmpty } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  debtId: number;

  @IsNotEmpty()
  paidBy: string;
}
