import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import theme from './theme';
import GlobalStyles from './theme/global';

function App() {
  return (
    <ThemeProvider theme={theme.dark}>
      <Header />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
