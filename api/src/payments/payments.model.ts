export interface Payment {
  id: string;
  debtId: number;
  paidAt: Date;
  paidAmount: string;
  paidBy: string;
}
