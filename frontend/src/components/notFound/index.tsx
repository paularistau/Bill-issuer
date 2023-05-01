import React, { memo } from 'react';
import {
  NotFoundContainer,
  NotFoundIcon,
  NotFoundSubTitle,
  NotFoundTitle,
} from './styles';
import { FiAlertCircle } from 'react-icons/fi';
import { colors } from '../../constants';

interface NotFoundProps {
  title?: string;
  subtitle?: string;
}

export const NotFound = memo(({ title, subtitle = '' }: NotFoundProps) => {
  return (
    <NotFoundContainer>
      <NotFoundIcon>
        <FiAlertCircle color={colors.textGray} size={42} />
      </NotFoundIcon>
      <NotFoundTitle>{title ?? 'Não encontrado'}</NotFoundTitle>
      <NotFoundSubTitle>{subtitle}</NotFoundSubTitle>
    </NotFoundContainer>
  );
});
