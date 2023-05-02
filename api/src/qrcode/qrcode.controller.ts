import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { QrcodeService } from './qrcode.service';

@Controller('qrcode')
export class QrcodeController {
  constructor(private readonly qrcodeService: QrcodeService) {}

  @Get(':id')
  async generateQrcode(@Param('id') id: number, @Res() res: Response) {
    const qrcode = await this.qrcodeService.generateQrcode(id);
    res.setHeader('Content-Type', 'image/png');
    res.send(
      Buffer.from(qrcode.replace(/^data:image\/png;base64,/, ''), 'base64'),
    );
  }
}
