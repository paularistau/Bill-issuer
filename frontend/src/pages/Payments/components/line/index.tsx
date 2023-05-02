import React, { memo } from 'react';

import { IoIosArrowForward } from 'react-icons/io';
import {
  IconLineView,
  LineViewStatus,
  LineViewText,
  Text,
} from '../../../../components/itemList/styles';
import { LineView } from '../../../../components/itemList';

function PaymentComponent({ debt, onClick }) {
  const fieldTitles: string[] = [];

  return (
    <LineView
      onClick={(e) => onClick(e)}
      hasHeader={true}
      headerChildren={<></>}
      fieldsTitle={fieldTitles}
      columnsSizes="8% 20% 22% 20% 15% auto"
    >
      <LineViewText></LineViewText>
      <LineViewText></LineViewText>
      <LineViewText className="emailField"></LineViewText>
      <LineViewText></LineViewText>
      <LineViewStatus>
        <Text></Text>
      </LineViewStatus>
    </LineView>
  );
}

export const PaymentLine = memo(PaymentComponent);
