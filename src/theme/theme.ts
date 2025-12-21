import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 2560,
    },
  },
  palette: {
    mode: 'dark',
    background: {
      default: 'black',
      paper: '#121212',
    },
    primary: {
      main: '#6366F1',
    },
  },
  typography: {
    fontFamily: '"Inter", system-ui, sans-serif',
    h6: {
      fontWeight: 700,
    },
    body1: {
      lineHeight: 1.6,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
