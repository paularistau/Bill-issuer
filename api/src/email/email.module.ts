import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from '../email/email.controller';
import { QrcodeService } from '../qrcode/qrcode.service';
import { DebtsService } from '../debts/debts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DebtsRepository } from '../debts/debts.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DebtsRepository])],
  providers: [EmailService, QrcodeService, DebtsService],
  controllers: [EmailController],
  exports: [EmailService],
})
export class EmailModule {}
