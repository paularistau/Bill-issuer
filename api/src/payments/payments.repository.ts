import { EntityRepository, Repository } from 'typeorm';
import { GetPaymentsFilterDto } from '../payments/dto/filter-debts.dto';
import { CreatePaymentDto } from '../payments/dto/create-payment-dto';
import { Payment } from '../payments/payments.entity';

@EntityRepository(Payment)
export class PaymentsRepository extends Repository<Payment> {
  async getPayments(filterDto: GetPaymentsFilterDto): Promise<Payment[]> {
    const { search } = filterDto;
    const query = this.createQueryBuilder('payment');

    if (search) {
      query.andWhere(
        'LOWER(payment.name) LIKE LOWER(:search) OR LOWER(payment.email) LIKE LOWER(:search)  ',
        {
          search: `%${search}%`,
        },
      );
    }

    const payments = await query.getMany();

    return payments;
  }

  async createPayment(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    const { debtId, paidAt, paidBy } = createPaymentDto;

    const payment = await this.create({
      debtId,
      paidBy,
      paidAt,
    });

    await this.save(payment);

    return payment;
  }
}
