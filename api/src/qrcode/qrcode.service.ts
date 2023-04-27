import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as qr from 'qrcode';
import * as dotenv from 'dotenv';

dotenv.config();
@Injectable()
export class QrcodeService {
  async generateQrcode(uuid: string): Promise<string> {
    const url = `${process.env.ENV_LOCAL_URL}payment/${uuid}`;
    const qrCode = await qr.toDataURL(url);
    return qrCode;
  }

  generateUuid(): string {
    return uuidv4();
  }
}
