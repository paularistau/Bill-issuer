import { useState } from 'react';
import { Calendar } from '../../components/calendar';
import { Body, Container } from '../../components/global/styles';
import { Header } from '../../components/header';
import { Loading } from '../../components/loading';
import { ListView, ListWrapper } from '../../components/itemList/styles';
import { NotFound } from '../../components/notFound';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PaymentLine } from './components/line';

export const Payments = () => {
  const [customerIsLoading, setCustomerIsLoading] = useState<boolean>(false);

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
  return (
    <Container>
      <Header
        title="Pagamentos"
        isLoading={false}
        handleSearch={(value) => console.log(value)}
        hasNew={false}
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
                    <PaymentLine
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
};
