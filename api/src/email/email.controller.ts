import { MailerService } from '@nestjs-modules/mailer';
import { Controller, Get, Query } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';

@Controller('email')
export class EmailController {
  constructor(private mailService: EmailService) {}

  @Get()
  sendMail(): void {
    return this.mailService.sendMail();
  }
}
