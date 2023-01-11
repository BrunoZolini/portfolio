import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import darkTheme from './styles/themes/darkTheme';
import GlobalStyles from './styles/global';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
