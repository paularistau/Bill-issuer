import { Router } from 'react-router-dom';
import Routes from './routes';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { colors } from './constants';
import history from './services/history';
import logo from './logo.svg';
import { CustomRouter } from './routes/customRouter';
import Layout from './layout';
import { ModalProvider } from './hooks/useModal';

function App() {
  return (
    <>
      <ModalProvider>
        <ThemeProvider theme={colors}>
          <Routes />
          <GlobalStyle />
        </ThemeProvider>
      </ModalProvider>
    </>
  );
}

export default App;
