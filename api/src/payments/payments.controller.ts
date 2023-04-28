import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { DebtsService } from 'src/debts/debts.service';
import { CreatePaymentDto } from 'src/payments/dto/create-payment-dto';
import { GetPaymentsFilterDto } from 'src/payments/dto/filter-debts.dto';
import { Payment } from 'src/payments/payments.model';
import { PaymentsService } from 'src/payments/payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(
    private paymentService: PaymentsService,
    private debtsService: DebtsService,
  ) {}

  @Get()
  getDebts(@Query(ValidationPipe) filterDto: GetPaymentsFilterDto): Payment[] {
    if (Object.keys(filterDto).length) {
      return this.paymentService.getPaymentsWithFilters(filterDto);
    } else {
      return this.paymentService.getAllPayments();
    }
  }

  @Get('/:debtId')
  getPaymentById(@Param('debtId') debtId: number): Payment {
    return this.paymentService.getPaymentById(debtId);
  }

  @Post()
  createDebt(@Body() createPaymentDto: CreatePaymentDto): Payment {
    return this.paymentService.createPayment(createPaymentDto);
  }
}
