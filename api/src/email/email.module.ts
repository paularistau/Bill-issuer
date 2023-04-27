import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from 'src/email/email.controller';
import { QrcodeService } from 'src/qrcode/qrcode.service';

@Module({
  providers: [EmailService, QrcodeService],
  controllers: [EmailController],
  exports: [EmailService],
})
export class EmailModule {}
