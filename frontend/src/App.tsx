import { Router } from 'react-router-dom';
import Routes from './routes';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { colors } from './constants';
import { ModalProvider } from './hooks/useModal';
import history from './services/history';
import Layout from './layout';

function App() {
  return (
    <Router history={history}>
      <ModalProvider>
        <ThemeProvider theme={colors}>
          <Routes />
          <GlobalStyle />
        </ThemeProvider>
      </ModalProvider>
    </Router>
  );
}

export default App;
