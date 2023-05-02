import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as cors from 'cors';

console.log(process.env);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const tempFolderPath = path.join('dist', 'temp');
  if (!fs.existsSync(tempFolderPath)) {
    fs.mkdirSync(tempFolderPath);
  }

  app.useGlobalPipes(new ValidationPipe());

  app.use(cors());
  await app.listen(3000);
}
bootstrap();
