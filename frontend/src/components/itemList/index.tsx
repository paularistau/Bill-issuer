import React, { memo } from 'react';
import { ILineView } from './types';

import { Container, BodyLine, HeaderText } from './styles';

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
      <BodyLine
        className="grid grid-template-columns gap"
        columnsSizes={columnsSizes}
      >
        {children}
      </BodyLine>
    </Container>
  );
}

export const LineView = memo(LineGrid);
