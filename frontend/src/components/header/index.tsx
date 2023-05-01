import { MdSearch } from 'react-icons/md';
import {
  ButtonGroup,
  HeaderContainer,
  IconSearchArea,
  InputArea,
  InputSearch,
  SearchArea,
} from './styles';
import { IHeader } from './types';
import { memo, useCallback, useRef } from 'react';

import _debounce from 'lodash/debounce';
import { PrimaryButton } from '../button';
import { H1 } from '../typography/styles';

export const Header = memo(
  ({ title, isLoading, hasNew, handleSearch, handleNewDebt }: IHeader) => {
    const handleChange = useCallback(_debounce(handleSearch, 600), []);
    const setInputFocus = useRef<HTMLInputElement>(null);

    return (
      <HeaderContainer>
        <H1>{title}</H1>

        <SearchArea>
          <InputArea>
            <IconSearchArea>
              <MdSearch color="#969696" size={24} />
            </IconSearchArea>
            <InputSearch
              onChange={handleChange}
              placeholder={isLoading ? 'Pesquisando...' : 'Pesquisar'}
              disabled={isLoading}
              ref={setInputFocus}
            />
          </InputArea>
          {hasNew && (
            <ButtonGroup>
              <PrimaryButton width={140} onClick={handleNewDebt}>
                Novo Débito
              </PrimaryButton>
              <PrimaryButton width={180} onClick={() => {}}>
                Importar Débitos
              </PrimaryButton>
            </ButtonGroup>
          )}
        </SearchArea>
      </HeaderContainer>
    );
  }
);
