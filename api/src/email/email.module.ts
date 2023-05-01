import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from 'src/email/email.controller';
import { QrcodeService } from 'src/qrcode/qrcode.service';
import { DebtsService } from 'src/debts/debts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DebtsRepository } from 'src/debts/debts.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DebtsRepository])],
  providers: [EmailService, QrcodeService, DebtsService],
  controllers: [EmailController],
  exports: [EmailService],
})
export class EmailModule {}
