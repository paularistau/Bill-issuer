import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailService: MailerService) {}

  sendMail(): void {
    this.mailService.sendMail({
      to: 'to@example.com',
      from: 'from@example.com',
      subject: 'Plain Text Email ✔',
      text: 'Welcome NestJS Email Sending Tutorial',
      html: '<p>welcome</p>',
    });
  }
}
