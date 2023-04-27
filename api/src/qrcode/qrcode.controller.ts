import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { QrcodeService } from './qrcode.service';

@Controller('qrcode')
export class QrcodeController {
  constructor(private readonly qrcodeService: QrcodeService) {}

  @Get(':uuid')
  async generateQrcode(@Param('uuid') uuid: string, @Res() res: Response) {
    const qrcode = await this.qrcodeService.generateQrcode(uuid);
    res.setHeader('Content-Type', 'image/png');
    res.send(
      Buffer.from(qrcode.replace(/^data:image\/png;base64,/, ''), 'base64'),
    );
  }
}
