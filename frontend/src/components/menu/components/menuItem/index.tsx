import React, { memo, useMemo, useState } from 'react';
import history from '../../../../services/history';

import { Container, Text, Name } from './styles';
import { IMenuProps } from './types';

function MenuComponent({ menu, selected }: IMenuProps) {
  const handleMenuClick = () => {
    history.push(menu.pathName);
  };

  return (
    <Container key={menu.text} selected={selected} onClick={handleMenuClick}>
      {menu.icon}
    </Container>
  );
}

export const Menu = memo(MenuComponent);
