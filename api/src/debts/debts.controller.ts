import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Debt } from 'src/debts/debts.entity';
import { DebtsService } from 'src/debts/debts.service';
import { CreateDebtDto } from 'src/debts/dto/create-debt.dto';
import { GetDebtsFilterDto } from 'src/debts/dto/filter-debts.dto';
import { UpdateDebtStatusDTO } from 'src/debts/dto/update-debt.dto';

@Controller('debts')
export class DebtsController {
  constructor(private debtsService: DebtsService) {}

  @Get()
  getDebts(
    @Query(ValidationPipe) filterDto: GetDebtsFilterDto,
  ): Promise<Debt[]> {
    return this.debtsService.getDebts(filterDto);
  }

  @Get('/:debtId')
  getDebtById(@Param('debtId') debtId: number): Promise<Debt> {
    return this.debtsService.getDebtById(debtId);
  }

  @Post()
  createDebt(@Body() createDebtDto: CreateDebtDto): Promise<Debt> {
    return this.debtsService.createDebt(createDebtDto);
  }

  @Post('imports')
  @UseInterceptors(FileInterceptor('file'))
  async importDebts(@UploadedFile() file: any) {
    try {
      await this.debtsService.createDebtsFromCSV(file.buffer);
      return { message: 'Debts imported successfully' };
    } catch (error) {
      return { message: 'Error importing debts', error };
    }
  }

  @Delete('/:debtId')
  deleteTask(@Param('debtId') debtId: number): Promise<void> {
    return this.debtsService.deleteDebt(debtId);
  }

  @Patch('/:debtId/status')
  updateDebtStatus(
    @Param('debtId') debtId: number,
    @Body() UpdateDebtStatusDTO: UpdateDebtStatusDTO,
  ): Promise<Debt> {
    const { status } = UpdateDebtStatusDTO;
    return this.debtsService.updateDebtStatus(debtId, status);
  }
}
