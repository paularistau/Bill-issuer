import { MailerService } from '@nestjs-modules/mailer';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { EmailResult } from 'src/email/email.entity';
import { EmailService } from 'src/email/email.service';

@Controller('email')
export class EmailController {
  constructor(private mailService: EmailService) {}

  @Get(':email')
  async enviarBoletoPorEmail(
    @Param('email') email: string,
  ): Promise<EmailResult> {
    try {
      await this.mailService.sendMail(email);
      return { message: 'Boleto enviado com sucesso!' };
    } catch (error) {
      console.error('Erro ao enviar boleto:', error);
      return {
        message: 'Erro ao enviar boleto: ' + error.message,
        error: error,
      };
    }
  }
}
