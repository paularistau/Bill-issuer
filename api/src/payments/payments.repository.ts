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

  async createPayment(CreatePaymentDto: CreatePaymentDto): Promise<Payment> {
    const { debtId, paidBy } = CreatePaymentDto;

    const debt = this.create({
      debtId,
      paidBy,
      paidAt: new Date(),
    });

    await this.save(debt);

    return debt;
  }
}
