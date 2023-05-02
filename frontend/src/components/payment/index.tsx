import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { PaymentContainer } from './styles';
import { H1 } from '../typography/styles';
import { MdOutlineCheckCircleOutline, MdErrorOutline } from 'react-icons/md';
import { colors } from '../../constants';
import { createPayment } from '../../functions/payments';
import { Loading } from '../loading';

export const PaymentCompleted = memo(() => {
  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setError] = useState<boolean>(false);
  const currentUrl = window.location.href;

  const debtId = useMemo(() => {
    const match = currentUrl.match(/\/payments\/(\d+)/);
    const value = match ? match[1] : null;

    return Number(value);
  }, [currentUrl]);

  const setPaymentCompleted = useCallback(async (id: number) => {
    try {
      const response = await createPayment(id);
      return response;
    } catch (error) {
      console.error('Unable to create payment', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setPaymentCompleted(debtId);
  }, []);

  if (loading) return <Loading />;

  if (hasError) {
    return (
      <PaymentContainer>
        <MdErrorOutline size={86} color={colors.error} />
        <H1>Erro ao concluir pagamento</H1>
      </PaymentContainer>
    );
  }

  return (
    <PaymentContainer>
      <MdOutlineCheckCircleOutline size={86} color={colors.primary} />
      <H1>Pagamento concluído</H1>
    </PaymentContainer>
  );
});
