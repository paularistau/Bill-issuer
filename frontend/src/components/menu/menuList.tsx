import React, { useMemo } from 'react';
import { MdQrCodeScanner, MdWallet } from 'react-icons/md';
import { IMenuItem } from './components/menuItem/types';

export const MenuList = (): Array<IMenuItem> => {
  let menuList = [
    {
      text: 'Débitos',
      pathName: '/debts',
      icon: <MdQrCodeScanner color="#ffffff" size={36} />,
    },
    {
      text: 'Pagamentos',
      pathName: '/payments',
      icon: <MdWallet color="#ffffff" size={36} />,
    },
  ];

  return menuList;
};
