import React, { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Logo, LogoWrapper } from './styles';
import { Menu } from './components/menuItem';
import { MenuList } from './menuList';

function MenuComponent() {
  const [pathName, setPathName] = useState('');
  const location = useLocation();

  useEffect(() => {
    var first = location.pathname;

    first = '/' + first.split('/')[1];

    return setPathName(first);
  }, [location]);

  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      {MenuList().map((menu) => (
        <Menu
          key={menu.text}
          menu={menu}
          selected={pathName.includes(menu.pathName)}
        />
      ))}
    </Container>
  );
}

export const MenuBar = memo(MenuComponent);
