import { Module } from '@nestjs/common';
import { QrcodeController } from './qrcode.controller';
import { QrcodeService } from './qrcode.service';

@Module({
  providers: [QrcodeService],
  controllers: [QrcodeController],
  exports: [QrcodeService],
})
export class QrcodeModule {}
