import axios from "axios";
import { IDebt } from "../../interfaces/debts";
import { url } from "../../services/api";
import history from "../../services/history";

export const fetchDebts = async (): Promise<IDebt[]> => {
  const response = await axios.get('http://localhost:3000/debts');

  return response.data
};

export const handleSubmitCSV = async (event, file) => {
  event.preventDefault();
  const formData = new FormData();
  formData.append('file', file);
  try {
    const response = await axios.post('http://localhost:3000/debts/imports', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response
  } catch (error) {
    console.error('Unable to import DATA', error);
  } finally {
    location.reload();
  }
};

export const sendEmail = async (id: number) => {
  try {
    const response = await axios.get(`http://localhost:3000/email/${id}`);

    return response.data;
  } catch (error) {
    console.error('Erro ao enviar boleto:', error);
    return {
      message: 'Erro ao enviar boleto: ' + error.message,
      error: error,
    };
  }

}