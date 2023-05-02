import { Injectable } from '@nestjs/common';
import * as qr from 'qrcode';
import * as dotenv from 'dotenv';

dotenv.config();
@Injectable()
export class QrcodeService {
  async generateQrcode(id: number): Promise<string> {
    const url = `${process.env.LOCAL_IP_ADDRESS}payments/${id}/`;
    const qrCode = await qr.toDataURL(url);
    return qrCode;
  }
}
