import { Module } from '@nestjs/common';
import { DebtsController } from './debts.controller';
import { DebtsService } from './debts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DebtsRepository } from 'src/debts/debts.repository';

@Module({
  controllers: [DebtsController],
  providers: [DebtsService],
  exports: [DebtsService],
  imports: [TypeOrmModule.forFeature([DebtsRepository])],
})
export class DebtsModule {}
