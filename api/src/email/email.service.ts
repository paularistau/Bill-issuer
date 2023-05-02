import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { QrcodeService } from '../qrcode/qrcode.service';
import { DebtsService } from '../debts/debts.service';

@Injectable()
export class EmailService {
  constructor(
    private readonly mailService: MailerService,
    private readonly qrcodeService: QrcodeService,
    private readonly debtsService: DebtsService,
  ) {}

  async sendMail(debtId: number): Promise<void> {
    const debt = await this.debtsService.getDebtById(Number(debtId));
    const qrcode = await this.qrcodeService.generateQrcode(debtId);

    const mailOptions = {
      from: 'seuemail@gmail.com',
      to: debt.email,
      subject: 'Boleto gerado',
      template: 'email',
      context: {
        debtId: debtId,
        name: debt.name,
        email: debt.email,
        debtAmount: debt.debtAmount,
        debtDueDate: debt.debtDueDate,
        status: debt.status,
        qrcode: qrcode,
      },
    };

    await this.mailService.sendMail(mailOptions);
  }
}
