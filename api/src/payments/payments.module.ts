import { Module } from '@nestjs/common';
import { DebtsModule } from 'src/debts/debts.module';
import { DebtsService } from 'src/debts/debts.service';
import { PaymentsController } from 'src/payments/payments.controller';
import { PaymentsService } from 'src/payments/payments.service';

@Module({
  imports: [DebtsModule],
  controllers: [PaymentsController],
  providers: [PaymentsService, DebtsService],
  exports: [PaymentsModule],
})
export class PaymentsModule {}
