import { Injectable, NotFoundException } from '@nestjs/common';
import { Payment } from '../payments/payments.entity';
import { CreatePaymentDto } from '../payments/dto/create-payment-dto';
import { GetPaymentsFilterDto } from '../payments/dto/filter-debts.dto';
import { PaymentsRepository } from '../payments/payments.repository';

@Injectable()
export class PaymentsService {
  constructor(private paymentsRepository: PaymentsRepository) {}

  async getAllPayments(filterDto: GetPaymentsFilterDto): Promise<Payment[]> {
    return await this.paymentsRepository.getPayments(filterDto);
  }

  async getPaymentById(debtId: number): Promise<Payment> {
    const found = await this.paymentsRepository.findOne(debtId);

    if (!found) {
      throw new NotFoundException(`Payment with id ${debtId} not found`);
    }

    return found;
  }

  async createPayment(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    return await this.paymentsRepository.createPayment(createPaymentDto);
  }
}
