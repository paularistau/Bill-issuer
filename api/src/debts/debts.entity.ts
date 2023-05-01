import { Column, Entity, PrimaryColumn } from 'typeorm';
import { DebtStatus } from './debts-status.enum';

@Entity()
export class Debt {
  @PrimaryColumn()
  debtId: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  debtAmount: string;

  @Column()
  debtDueDate: Date;

  @Column()
  status: DebtStatus;

  @Column({ type: 'bigint' })
  governmentId: number;
}
