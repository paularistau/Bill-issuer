import axios from "axios";
import { IPayment } from "../../interfaces/payments";

export const fetchPayments = async (): Promise<IPayment[]> => {
  const response = await axios.get('http://localhost:3000/payments');

  return response.data
};


export const createPayment = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/debts/${id}`);
    console.log('data', data)
    const payment: IPayment = {
      debtId: id,
      paidAt: new Date(),
      paidBy: data.name
    }


    const response = await axios.post('http://localhost:3000/payments', payment);
    await axios.patch(`http://localhost:3000/debts/${id}/status`, { status: 'PAYED' })
    return response.data;
  } catch (error) {
    console.error(error);
  }
};