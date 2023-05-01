import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsController } from 'src/payments/payments.controller';
import { PaymentsRepository } from 'src/payments/payments.repository';
import { PaymentsService } from 'src/payments/payments.service';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService],
  exports: [PaymentsModule],
  imports: [TypeOrmModule.forFeature([PaymentsRepository])],
})
export class PaymentsModule {}
