import React, { memo } from 'react';

import { IoIosArrowForward } from 'react-icons/io';
import {
  IconLineView,
  LineViewStatus,
  LineViewText,
  Text,
} from '../../../../components/itemList/styles';
import { LineView } from '../../../../components/itemList';
import { IPayment } from '../../../../interfaces/payments';

interface IDebtComponent {
  payment: IPayment;
  onClick: (value: any) => void;
}

function PaymentComponent({ payment, onClick }: IDebtComponent) {
  return (
    <LineView onClick={(e) => onClick(e)} columnsSizes="33% 33% 34%">
      <LineViewText>{payment.debtId}</LineViewText>
      <LineViewText>{payment.paidBy}</LineViewText>
      <LineViewText>{payment.paidAt}</LineViewText>
    </LineView>
  );
}

export const PaymentLine = memo(PaymentComponent);
