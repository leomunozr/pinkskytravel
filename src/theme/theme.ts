'use client';
import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: {
      textTransform: 'none', // More conversational/modern
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: '#1A237E', // Midnight Blue
      light: '#534bae',
      dark: '#000051',
    },
    secondary: {
      main: '#F06292', // Pink Dusk
      light: '#ff94c2',
      dark: '#ba2d65',
    },
    background: {
      default: '#FAFAFA', // Softer than pure white
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A237E', // Using the dark blue as primary text for harmony
      secondary: '#546e7a', // Blue-grey for secondary text
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
          },
        },
        contained: {
            boxShadow: 'none',
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 20px rgba(0,0,0,0.05)', // Very subtle shadow
          border: '1px solid rgba(0,0,0,0.05)',
        },
      },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundImage: 'none', // Remove default dark mode overlay if we ever switch
            }
        }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiChip: {
        styleOverrides: {
            root: {
                fontWeight: 500,
            }
        }
    }
  },
});

export default theme;
