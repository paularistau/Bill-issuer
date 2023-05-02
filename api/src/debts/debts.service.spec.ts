import { Test } from '@nestjs/testing';
import { DebtsService } from './debts.service';
import { DebtsRepository } from './debts.repository';
import { NotFoundException } from '@nestjs/common';
import { GetDebtsFilterDto } from '../debts/dto/filter-debts.dto';
import { DebtStatus } from '../debts/debts-status.enum';
import { Debt } from 'src/debts/debts.entity';

const mockDebtRepository = () => ({
  getDebts: jest.fn(),
  findOne: jest.fn(),
  createDebt: jest.fn(),
  delete: jest.fn(),
});

const debtMock: Debt = {
  debtId: 5,
  name: 'Alvin Long',
  email: 'ki@riko.sa',
  debtAmount: 'dolar',
  debtDueDate: new Date('10/05/1970'),
  governmentId: 1334550,
  status: DebtStatus.CREATED,
};

describe('DebtsService', () => {
  let debtsService;
  let debtsRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        DebtsService,
        { provide: DebtsRepository, useFactory: mockDebtRepository },
      ],
    }).compile();

    debtsService = await module.get<DebtsService>(DebtsService);
    debtsRepository = await module.get<DebtsRepository>(DebtsRepository);
  });

  describe('getDebts', () => {
    it('gets all debts from the repository', async () => {
      debtsRepository.getDebts.mockResolvedValue(3445);

      expect(debtsRepository.getDebts).not.toHaveBeenCalled();
      const filters: GetDebtsFilterDto = {
        status: DebtStatus.CREATED,
        search: 'Some search query',
      };
      const result = await debtsService.getDebts(filters);
      expect(debtsRepository.getDebts).toHaveBeenCalled();
      expect(result).toEqual(3445);
    });
  });

  describe('getDebtById', () => {
    it('calls debtsRepository.findOne() and succesffuly retrieve and return the debt', async () => {
      debtsRepository.findOne.mockResolvedValue(debtMock);

      const result = await debtsService.getDebtById(5);
      expect(result).toEqual(debtMock);

      expect(debtsRepository.findOne).toHaveBeenCalledWith(5);
    });

    it('throws an error as debt is not found', () => {
      debtsRepository.findOne.mockResolvedValue(null);
      expect(debtsService.getDebtById(1)).rejects.toThrow(NotFoundException);
    });
  });

  describe('createTask', () => {
    it('calls debtsRepository.create() and returns the result', async () => {
      debtsRepository.createDebt.mockResolvedValue('someTask');

      expect(debtsRepository.createDebt).not.toHaveBeenCalled();
      const result = await debtsRepository.createDebt(debtMock);
      expect(debtsRepository.createDebt).toHaveBeenCalledWith(debtMock);
      expect(result).toEqual('someTask');
    });
  });

  describe('deleteDebt', () => {
    const mockDebtId = 1;

    it('should delete a debt successfully', async () => {
      debtsRepository.delete.mockResolvedValue({ affected: 1 });

      await debtsService.deleteDebt(mockDebtId);

      expect(debtsRepository.delete).toHaveBeenCalledWith(mockDebtId);
    });

    it('should throw NotFoundException if debt is not found', async () => {
      debtsRepository.delete.mockResolvedValue({ affected: 0 });

      await expect(debtsService.deleteDebt(mockDebtId)).rejects.toThrowError(
        new NotFoundException(`Debt with id ${mockDebtId} not found`),
      );
    });
  });

  // describe('updateDebtStatus', () => {
  //   it('updates a debt status', async () => {
  //     const save = jest.fn().mockResolvedValue(true);

  //     debtsService.getTaskById = jest.fn().mockResolvedValue({
  //       status: DebtStatus.CREATED,
  //       save,
  //     });

  //     expect(debtsService.getTaskById).not.toHaveBeenCalled();
  //     expect(save).not.toHaveBeenCalled();
  //     const result = await debtsService.updateDebtStatus(1, DebtStatus.CREATED);
  //     expect(debtsService.getTaskById).toHaveBeenCalled();
  //     expect(save).toHaveBeenCalled();
  //     expect(result.status).toEqual(DebtStatus.CREATED);
  //   });
  // });
});
