import { Injectable, NotFoundException } from '@nestjs/common';
import { Payment } from '../payments/payments.entity';
import { CreatePaymentDto } from '../payments/dto/create-payment-dto';
import { GetPaymentsFilterDto } from '../payments/dto/filter-debts.dto';
import { PaymentsRepository } from '../payments/payments.repository';
import { Connection, QueryFailedError } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(PaymentsRepository)
    private paymentsRepository: PaymentsRepository,
    private readonly connection: Connection,
  ) {}

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
    return this.connection.transaction(async (transactionManager) => {
      try {
        const user = this.paymentsRepository.create(createPaymentDto);

        await transactionManager.save(user);

        return user;
      } catch (error) {
        if (error instanceof QueryFailedError) {
          console.log('Erro ao inserir registro:', error, createPaymentDto);
        } else {
          console.log('Erro desconhecido:', error, createPaymentDto);
        }
      }
    });
  }
}
