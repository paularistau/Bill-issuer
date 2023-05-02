import React, { memo } from 'react';
import { ILineView } from './types';

import { Container, Body, Header, HeaderText } from './styles';

function LineGrid({
  fieldsTitle,
  hasHeader = false,
  children,
  columnsSizes,
  headerChildren,
  onClick,
}: ILineView) {
  return (
    <Container className="line-view-container" onClick={(e) => onClick(e)}>
      {hasHeader && <Header>{headerChildren}</Header>}
      <Body
        className="grid grid-template-columns gap"
        columnsSizes={columnsSizes}
      >
        {fieldsTitle?.map((field, index) => (
          <HeaderText key={index.toString()}>{field}</HeaderText>
        ))}
      </Body>
      <Body
        className="grid grid-template-columns gap"
        columnsSizes={columnsSizes}
      >
        {children}
      </Body>
    </Container>
  );
}

export const LineView = memo(LineGrid);
