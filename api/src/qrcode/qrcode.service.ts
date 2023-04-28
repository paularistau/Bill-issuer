import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as qr from 'qrcode';
import * as dotenv from 'dotenv';

dotenv.config();
@Injectable()
export class QrcodeService {
  async generateQrcode(id: number): Promise<string> {
    const url = `${process.env.ENV_LOCAL_URL}payment/${id}`;
    const qrCode = await qr.toDataURL(url);
    return qrCode;
  }
}
