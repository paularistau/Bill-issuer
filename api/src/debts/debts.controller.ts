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
import { Debt } from '../debts/debts.entity';
import { DebtsService } from '../debts/debts.service';
import { CreateDebtDto } from '../debts/dto/create-debt.dto';
import { GetDebtsFilterDto } from '../debts/dto/filter-debts.dto';
import { UpdateDebtStatusDTO } from '../debts/dto/update-debt.dto';

interface MulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
  buffer: Buffer;
}

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
  async importDebts(@UploadedFile() file: any): Promise<void> {
    console.log(file);
    await this.debtsService.createDebtsFromCSV(file.buffer);
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
