import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from 'src/email/email.controller';
import { QrcodeService } from 'src/qrcode/qrcode.service';
import { DebtsService } from 'src/debts/debts.service';

@Module({
  providers: [EmailService, QrcodeService, DebtsService],
  controllers: [EmailController],
  exports: [EmailService],
})
export class EmailModule {}
