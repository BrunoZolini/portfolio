import { ThemeProvider } from 'styled-components';
import { useSelectedTheme } from './contexts';
import Home from './pages/Home';
import theme from './theme';
import GlobalStyles from './theme/global';

function App() {
  const { selectedTheme } = useSelectedTheme();

  return (
    <ThemeProvider theme={theme[selectedTheme]}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
