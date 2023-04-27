import { Injectable, Res } from '@nestjs/common';
import { Response } from 'express';
import { MailerService } from '@nestjs-modules/mailer';
import * as PDFDocument from 'pdfkit';
import { QrcodeService } from '../qrcode/qrcode.service';
import fs from 'fs';
import path from 'path';
import { boletoData } from 'src/email/email.constants';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { WritableStreamBuffer } = require('memory-streams');

@Injectable()
export class EmailService {
  constructor(
    private readonly mailService: MailerService,
    private readonly qrcodeService: QrcodeService,
  ) {}

  async sendMail(email: string): Promise<void> {
    const uuid = await this.qrcodeService.generateUuid();
    const qrcode = await this.qrcodeService.generateQrcode(uuid);
    const name = 'esmeraldinho';

    const mailOptions = {
      from: 'seuemail@gmail.com',
      to: email,
      subject: 'Boleto gerado',
      template: 'email',
      context: {
        name: name,
        qrcode: qrcode,
      },
    };

    await this.mailService.sendMail(mailOptions);
  }
}
