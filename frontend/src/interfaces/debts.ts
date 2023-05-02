export interface IDebt {
  debtId: number;
  name: string;
  email: string;
  debtAmount: string;
  debtDueDate: Date;
  governmentId: number;
  status: IDebtStatusEnum;
}

export enum IDebtStatusEnum {
  CREATED = 'CREATED',
  PAYED = 'CREATED'
}