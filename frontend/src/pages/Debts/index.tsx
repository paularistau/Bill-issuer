import { memo, useCallback, useState } from 'react';
import { Calendar } from '../../components/calendar';
import { Body, Container } from '../../components/global/styles';
import { Header } from '../../components/header';
import { ListView, ListWrapper } from '../../components/itemList/styles';
import { NotFound } from '../../components/notFound';
import InfiniteScroll from 'react-infinite-scroll-component';
import { DebtLine } from './components/line';
import { useModal } from '../../hooks/useModal';
import { ModalNewDebt } from './components/modalNewDebt';
import { Loading } from '../../components/loading';

export const Debts = memo(() => {
  const [customerIsLoading, setCustomerIsLoading] = useState<boolean>(false);
  const { toggleModal, setModalView } = useModal();

  let data = [
    { PartnNumb: 1, Title: 'bliu' },
    { PartnNumb: 1, Title: 'bliu' },
    { PartnNumb: 1, Title: 'bliu' },
    { PartnNumb: 1, Title: 'bliu' },
    { PartnNumb: 1, Title: 'bliu' },
    { PartnNumb: 1, Title: 'bliu' },
    { PartnNumb: 1, Title: 'bliu' },
    { PartnNumb: 1, Title: 'bliu' },
    { PartnNumb: 1, Title: 'bliu' },
    { PartnNumb: 1, Title: 'bliu' },
    { PartnNumb: 1, Title: 'bliu' },
    { PartnNumb: 1, Title: 'bliu' },
  ];

  const handleCreateDebt = useCallback(() => {
    setModalView(<ModalNewDebt />, {
      title: 'Cadastrar débito',
      width: 800,
      height: 550,
    });
    toggleModal();
  }, []);

  return (
    <Container>
      <Header
        title="Débitos"
        isLoading={false}
        handleSearch={(value) => console.log(value)}
        hasNew={true}
        handleNewDebt={handleCreateDebt}
      />

      <Body>
        {customerIsLoading ? (
          <Loading />
        ) : (
          <ListWrapper id="scrollableDiv">
            {data?.length <= 0 ? (
              <NotFound />
            ) : (
              <ListView>
                <InfiniteScroll
                  dataLength={data.length}
                  next={() => {}}
                  hasMore={false}
                  loader={<Loading />}
                  style={{ overflowX: 'hidden', width: '100%' }}
                  scrollableTarget="scrollableDiv"
                >
                  {data.map((item) => (
                    <DebtLine
                      key={item?.PartnNumb}
                      onClick={() => console.log(item)}
                      debt={item}
                    />
                  ))}
                </InfiniteScroll>
              </ListView>
            )}
          </ListWrapper>
        )}
      </Body>
    </Container>
  );
});
