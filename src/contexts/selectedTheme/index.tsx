import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type ThemeMode = 'dark' | 'light';

type ContextProps = {
  selectedTheme: ThemeMode;
  setSelectedTheme: (value: ThemeMode) => void;
};

const Context = createContext({} as ContextProps);

const getInitialState = (): ThemeMode => {
  const theme = localStorage.getItem('theme') as ThemeMode;
  if (!theme) return 'dark';
  return theme;
};

export function SelectedThemeProvider({ children }: { children: ReactNode }) {
  const [selectedTheme, setState] = useState(getInitialState);
  const setSelectedTheme = (value: ThemeMode) => {
    setState(value);
    localStorage.setItem('theme', value);
  };

  const state = useMemo(
    () => ({ selectedTheme, setSelectedTheme }),
    [selectedTheme, setSelectedTheme]
  );
  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export const useSelectedTheme = () => {
  const context = useContext(Context);
  return context;
};
