import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { Payment } from '../payments/payments.entity';
import { CreatePaymentDto } from '../payments/dto/create-payment-dto';
import { GetPaymentsFilterDto } from '../payments/dto/filter-debts.dto';
import { PaymentsService } from '../payments/payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentService: PaymentsService) {}

  @Get()
  getPayments(
    @Query(ValidationPipe) filterDto: GetPaymentsFilterDto,
  ): Promise<Payment[]> {
    return this.paymentService.getAllPayments(filterDto);
  }

  @Get('/:debtId')
  getPaymentById(@Param('debtId') debtId: number): Promise<Payment> {
    return this.paymentService.getPaymentById(debtId);
  }

  @Post()
  createPayment(@Body() createPaymentDto: CreatePaymentDto): Promise<Payment> {
    return this.paymentService.createPayment(createPaymentDto);
  }
}
