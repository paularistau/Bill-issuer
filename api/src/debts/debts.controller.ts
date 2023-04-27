import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { Debt, DebtStatus } from 'src/debts/debts.model';
import { DebtsService } from 'src/debts/debts.service';
import { CreateDebtDto } from 'src/debts/dto/create-debt.dto';
import { GetDebtsFilterDto } from 'src/debts/dto/filter-debts.dto';

@Controller('debts')
export class DebtsController {
  constructor(private debtsService: DebtsService) {}

  @Get()
  getAllDebts(): Debt[] {
    return this.debtsService.getAllDebts();
  }

  @Get()
  getDebts(@Query(ValidationPipe) filterDto: GetDebtsFilterDto): Debt[] {
    if (Object.keys(filterDto).length) {
      return this.debtsService.getDebtsWithFilters(filterDto);
    } else {
      return this.debtsService.getAllDebts();
    }
  }

  @Get('/:id')
  getDebtById(@Param('id') id: string): Debt {
    return this.debtsService.getDebtById(id);
  }

  @Post()
  createDebt(@Body() createDebtDto: CreateDebtDto): Debt {
    return this.debtsService.createDebt(createDebtDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    this.debtsService.deleteDebt(id);
  }

  @Patch('/:id/status')
  updateDebtStatus(
    @Param('id') id: string,
    @Body('status') status: DebtStatus,
  ): Debt {
    return this.debtsService.updateDebtStatus(id, status);
  }
}
