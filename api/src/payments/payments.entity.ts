import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryColumn()
  debtId: number;

  @Column()
  paidAt: Date;

  @Column()
  paidBy: string;
}
