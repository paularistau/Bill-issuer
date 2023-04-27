import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as qr from 'qrcode';

@Injectable()
export class QrcodeService {
  async generateQrcode(uuid: string): Promise<string> {
    const data = `http://localhost:3000/pay/${uuid}`;
    return await qr.toDataURL(data);
  }

  generateUuid(): string {
    return uuidv4();
  }
}
