import { Controller, Get, Param } from '@nestjs/common';
import { DebtsService } from '../debts/debts.service';
import { EmailResult } from '../email/email.entity';
import { EmailService } from '../email/email.service';

@Controller('email')
export class EmailController {
  constructor(
    private mailService: EmailService,
    private readonly debtsService: DebtsService,
  ) {}

  @Get()
  getEmails() {
    return;
  }

  @Get('/:id')
  async enviarBoletoPorEmail(@Param('id') id: number): Promise<EmailResult> {
    try {
      console.log('enviarBoletoPorEmail ID =>', id, typeof id);
      const debt = await this.debtsService.getDebtById(Number(id));

      await this.mailService.sendMail(debt.debtId);
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
