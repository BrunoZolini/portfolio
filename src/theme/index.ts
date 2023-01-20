const theme = {
  dark: {
    colors: {
      black_800: '#171A21',
      gray_50: '#C7D5E0'
    },
    text: '#C7D5E0', // Body foreground color
    background: '#171A21', // Body background color
    primary: '#20E87D', // Primary brand color for links, buttons, etc.
    secondary: '#1B2838', // A secondary brand color for alternative styling
    highlight: '#66C0F4', // A color for highlighting text
    muted: '#2A475E' // A faint color for backgrounds, borders, and accents that do not require high contrast with the background color"
  },
  light: {
    colors: {
      black_800: '#171A21',
      gray_50: '#C7D5E0'
    },
    text: '#171A21', // Body foreground color
    background: '#C7D5E0', // Body background color
    primary: '#20E87D', // Primary brand color for links, buttons, etc.
    secondary: '#1B2838', // A secondary brand color for alternative styling
    highlight: '#66C0F4', // A color for highlighting text
    muted: '#2A475E' // A faint color for backgrounds, borders, and accents that do not require high contrast with the background color""
  }
};

export default theme;
export type Theme = typeof theme.dark;
