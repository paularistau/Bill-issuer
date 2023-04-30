import { Router } from 'react-router-dom';
import Routes from './routes';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { colors } from './constants';
import history from './services/history';
import logo from './logo.svg';
import './App.css';
import { CustomRouter } from './routes/customRouter';

function App() {
  return (
    <CustomRouter history={history}>
      <ThemeProvider theme={colors}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </CustomRouter>
  );
}

export default App;
