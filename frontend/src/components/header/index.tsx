import { MdSearch } from 'react-icons/md';
import { ButtonGroup, HeaderContainer } from './styles';
import { IHeader } from './types';
import { memo, useCallback, useRef } from 'react';

import _debounce from 'lodash/debounce';
import { PrimaryButton } from '../button';
import { H1 } from '../typography/styles';

export const Header = memo(
  ({ title, isLoading, hasNew, handleNewDebt }: IHeader) => {
    const handleButtonClick = () => {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', '.csv');
      input.onchange = handleNewDebt;
      input.click();
    };

    return (
      <HeaderContainer>
        <H1>{title}</H1>
        {hasNew && (
          <ButtonGroup>
            <PrimaryButton width={180} onClick={handleButtonClick}>
              Importar Débitos
            </PrimaryButton>
          </ButtonGroup>
        )}
      </HeaderContainer>
    );
  }
);
