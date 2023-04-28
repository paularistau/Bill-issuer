import { Injectable, NotFoundException } from '@nestjs/common';
import { DebtStatus } from 'src/debts/debts.model';
import { DebtsService } from 'src/debts/debts.service';
import { CreatePaymentDto } from 'src/payments/dto/create-payment-dto';
import { GetPaymentsFilterDto } from 'src/payments/dto/filter-debts.dto';
import { Payment } from 'src/payments/payments.model';
import { uuid } from 'uuidv4';

@Injectable()
export class PaymentsService {
  constructor(private debtService: DebtsService) {}
  private payments: Payment[] = [];

  getAllPayments(): Payment[] {
    return this.payments;
  }

  getPaymentsWithFilters(filterDto: GetPaymentsFilterDto): Payment[] {
    const { search } = filterDto;
    let payments = this.getAllPayments();

    if (search) {
      payments = payments.filter(
        (payment) =>
          payment.debtId.toString().includes(search) ||
          payment.paidBy.includes(search),
      );
    }

    return payments;
  }

  getPaymentById(debtId: number): Payment {
    const found = this.payments.find((payment) => payment.debtId === debtId);

    if (!found) {
      throw new NotFoundException(`Payment with id ${debtId} not found`);
    }

    return found;
  }

  createPayment(createPaymentDto: CreatePaymentDto): Payment {
    const { debtId, paidBy } = createPaymentDto;

    const debt = this.debtService.getDebtById(debtId);

    // // atualizar o status da dívida
    // this.debtService.updateDebtStatus(debt.debtId, DebtStatus.PAYED);

    const payment: Payment = {
      id: uuid(),
      debtId,
      paidAt: new Date(),
      paidAmount: debt.debtAmount,
      paidBy,
    };

    this.payments.push(payment);
    return payment;
  }
}
