import { useEffect, useState } from 'react';
import { Calendar } from '../../components/calendar';
import { Body, Container } from '../../components/global/styles';
import { Header } from '../../components/header';
import { Loading } from '../../components/loading';
import {
  BodyLine,
  HeaderContainer,
  HeaderText,
  ListView,
  ListWrapper,
} from '../../components/itemList/styles';
import { NotFound } from '../../components/notFound';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PaymentLine } from './components/line';
import { fetchPayments } from '../../functions/payments';
import { IPayment } from '../../interfaces/payments';

export const Payments = () => {
  const [customerIsLoading, setCustomerIsLoading] = useState<boolean>(false);
  const [payments, setPayments] = useState<IPayment[]>([]);

  const fieldTitles: string[] = ['ID', 'Pago por', 'Data do pagamento'];

  useEffect(() => {
    const fetchAllDebts = async () => {
      const response: IPayment[] = await fetchPayments();
      setPayments(response);
    };
    fetchAllDebts();
  }, []);

  return (
    <Container>
      <Header title="Pagamentos" isLoading={false} hasNew={false} />

      <Body>
        {customerIsLoading ? (
          <Loading />
        ) : (
          <>
            <HeaderContainer>
              <BodyLine
                className="grid grid-template-columns gap"
                columnsSizes="33% 33% 34%"
              >
                {fieldTitles?.map((field, index) => (
                  <HeaderText key={index.toString()}>{field}</HeaderText>
                ))}
              </BodyLine>
            </HeaderContainer>
            <ListWrapper id="scrollableDiv">
              {payments?.length <= 0 ? (
                <NotFound />
              ) : (
                <ListView>
                  <InfiniteScroll
                    dataLength={payments.length}
                    next={() => {}}
                    hasMore={false}
                    loader={<Loading />}
                    style={{ overflowX: 'hidden', width: '100%' }}
                    scrollableTarget="scrollableDiv"
                  >
                    {payments.map((item) => (
                      <PaymentLine
                        key={item?.debtId}
                        onClick={() => console.log(item)}
                        payment={item}
                      />
                    ))}
                  </InfiniteScroll>
                </ListView>
              )}
            </ListWrapper>
          </>
        )}
      </Body>
    </Container>
  );
};
