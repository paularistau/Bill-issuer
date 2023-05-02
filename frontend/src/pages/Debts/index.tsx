import { memo, useCallback, useEffect, useState } from 'react';
import { Calendar } from '../../components/calendar';
import { Body, Container } from '../../components/global/styles';
import { Header } from '../../components/header';
import {
  BodyLine,
  HeaderContainer,
  HeaderText,
  ListView,
  ListWrapper,
} from '../../components/itemList/styles';
import { NotFound } from '../../components/notFound';
import InfiniteScroll from 'react-infinite-scroll-component';
import { DebtLine } from './components/line';
import { useModal } from '../../hooks/useModal';
import { ModalNewDebt } from './components/modalNewDebt';
import { Loading } from '../../components/loading';
import { IDebt, IDebtStatusEnum } from '../../interfaces/debts';
import { fetchDebts, handleSubmitCSV } from '../../functions/debts';

export const Debts = memo(() => {
  const [customerIsLoading, setCustomerIsLoading] = useState<boolean>(false);
  const { toggleModal, setModalView } = useModal();
  const [debts, setDebts] = useState<IDebt[]>([]);

  const fieldTitles: string[] = [
    'ID',
    'Cliente',
    'E-mail',
    'Código bancário',
    'Valor total',
    'Vencimento',
    'Status',
  ];

  const handleCreateDebt = useCallback(async (event) => {
    console.log(event.target.files[0]);
    const response = await handleSubmitCSV(event, event.target.files[0]);

    return response;
  }, []);

  useEffect(() => {
    const fetchAllDebts = async () => {
      const response: IDebt[] = await fetchDebts();
      setDebts(response);
    };
    fetchAllDebts();
  }, []);

  return (
    <Container>
      <Header
        title="Débitos"
        isLoading={false}
        hasNew={true}
        handleNewDebt={handleCreateDebt}
      />

      <Body>
        {customerIsLoading ? (
          <Loading />
        ) : (
          <>
            <HeaderContainer>
              <BodyLine
                className="grid grid-template-columns gap"
                columnsSizes="5% 10%  20%  15%  8%  15%  5% 5%"
              >
                {fieldTitles?.map((field, index) => (
                  <HeaderText key={index.toString()}>{field}</HeaderText>
                ))}
              </BodyLine>
            </HeaderContainer>
            <ListWrapper id="scrollableDiv">
              {debts?.length <= 0 ? (
                <NotFound />
              ) : (
                <ListView>
                  <InfiniteScroll
                    dataLength={debts.length}
                    next={() => {}}
                    hasMore={false}
                    loader={<Loading />}
                    style={{ overflowX: 'hidden', width: '100%' }}
                    scrollableTarget="scrollableDiv"
                  >
                    {debts.map((item) => (
                      <DebtLine
                        key={item?.debtId}
                        onClick={() => console.log(item)}
                        debt={item}
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
});
