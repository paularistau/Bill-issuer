import { MenuBar } from '../components/menu';
import { Container, Body } from './styles';
import { ToastContainer } from 'react-toastify';
import ModalLayout from './modal';
import { injectStyle } from 'react-toastify/dist/inject-style';

export default function Layout({ children }) {
  injectStyle();
  return (
    <Container>
      <ModalLayout />
      <Container>
        <MenuBar />
        <Body>{children}</Body>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Container>
    </Container>
  );
}
