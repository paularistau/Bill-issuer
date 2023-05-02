import { EntityRepository, Repository } from 'typeorm';
import { Debt } from '../debts/debts.entity';
import { CreateDebtDto } from '../debts/dto/create-debt.dto';
import { DebtStatus } from './debts-status.enum';
import { GetDebtsFilterDto } from '../debts/dto/filter-debts.dto';

@EntityRepository(Debt)
export class DebtsRepository extends Repository<Debt> {
  async getDebts(filterDto: GetDebtsFilterDto): Promise<Debt[]> {
    const { search, status } = filterDto;
    const query = this.createQueryBuilder('debt');

    if (status) {
      query.andWhere('debt.status = :status', { status });
    }

    if (search) {
      query.andWhere(
        'LOWER(debt.name) LIKE LOWER(:search) OR LOWER(debt.email) LIKE LOWER(:search)  ',
        {
          search: `%${search}%`,
        },
      );
    }

    const debts = await query.getMany();

    return debts;
  }

  async createDebt(createDebtDto: CreateDebtDto): Promise<Debt> {
    const { debtId, name, email, debtAmount, debtDueDate, governmentId } =
      createDebtDto;

    const debt = this.create({
      debtId,
      name,
      email,
      debtAmount,
      debtDueDate,
      governmentId,
    });

    debt.status = DebtStatus.CREATED;

    await this.save(debt);

    return debt;
  }
}
