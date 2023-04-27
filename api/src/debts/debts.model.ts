export interface Debt {
  id: string;
  name: string;
  email: string;
  debtAmount: number;
  debtDueDate: Date;
  status: DebtStatus;
}

export enum DebtStatus {
  CREATED = 'OPEN',
  PAYED = 'PAYED',
  DELAYED = 'DONE',
}
