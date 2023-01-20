import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SelectedThemeProvider } from './contexts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SelectedThemeProvider>
      <App />
    </SelectedThemeProvider>
  </React.StrictMode>
);
