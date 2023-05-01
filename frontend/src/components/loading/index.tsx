import React, { memo } from 'react';
import { Container, Dot, DotWrapper, Text } from './styles';

function LoadingComponent() {
  return (
    <Container>
      <Text>Carregando</Text>
      <DotWrapper>
        <Dot delay="0s" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
      </DotWrapper>
    </Container>
  );
}

export const Loading = memo(LoadingComponent);
