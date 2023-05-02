import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsController } from '../payments/payments.controller';
import { PaymentsRepository } from '../payments/payments.repository';
import { PaymentsService } from '../payments/payments.service';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService],
  exports: [PaymentsModule],
  imports: [TypeOrmModule.forFeature([PaymentsRepository])],
})
export class PaymentsModule {}
