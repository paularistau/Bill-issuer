export interface Debt {
  id: string;
  debtId: number;
  name: string;
  email: string;
  debtAmount: string;
  debtDueDate: Date;
  status: DebtStatus;
}

export enum DebtStatus {
  CREATED = 'OPEN',
  PAYED = 'PAYED',
  DELAYED = 'DONE',
}
