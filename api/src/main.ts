import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

console.log(process.env);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const tempDirPath = path.join(__dirname, '../dist', 'temp');

  if (!fs.existsSync(tempDirPath)) {
    fs.mkdirSync(tempDirPath);
  }
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
