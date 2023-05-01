import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DebtsModule } from './debts/debts.module';
import { PaymentsModule } from './payments/payments.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailModule } from './email/email.module';
import { QrcodeModule } from './qrcode/qrcode.module';
import { ConfigModule } from '@nestjs/config';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    DebtsModule,
    PaymentsModule,
    EmailModule,
    QrcodeModule,
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        transport: {
          host: process.env.MAILTRAP_HOST,
          auth: {
            user: process.env.MAILTRAP_USER,
            pass: process.env.MAILTRAP_PASS,
          },
          port: process.env.MAILTRAP_PORT,
        },
        defaults: {
          from: '<sendgrid_from_email_address>',
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ConfigModule.forRoot(),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
