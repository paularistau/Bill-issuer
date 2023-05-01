import React, { memo } from 'react';

import { Container, ContainerRedButton } from './styles';
import { IButtonBlueProps } from './types';
import { ButtonText } from '../typography/styles';

export const PrimaryButton = memo(
  ({ children, onClick, width, style, ...rest }: IButtonBlueProps) => {
    return (
      <Container {...rest} onClick={onClick} width={width} style={style}>
        <ButtonText>{children}</ButtonText>
      </Container>
    );
  }
);

export const DestructButton = memo(
  ({ children, onClick, ...rest }: IButtonBlueProps) => {
    return (
      <ContainerRedButton {...rest} onClick={onClick}>
        <ButtonText>{children}</ButtonText>
      </ContainerRedButton>
    );
  }
);
