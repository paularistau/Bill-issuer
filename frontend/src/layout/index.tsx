import React from 'react';
import { MenuBar } from '../components/menu';
import { Container, Body } from './styles';
// import ModalLayout from './components/modal';
import { ToastContainer } from 'react-toastify';
import ModalLayout from './modal';

export default function Layout({ children }) {
  return (
    <Container>
      <ModalLayout />
      <Container>
        <MenuBar />
        <Body>{children}</Body>
      </Container>
      <ToastContainer />
    </Container>
  );
}
