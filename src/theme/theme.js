import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { grey, orange, green, white } from './colors';
import { lato, ebgaramond } from './fonts';

const breakpointValues = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1632,
};

const breakpoints = createBreakpoints(breakpointValues);

let theme = createMuiTheme({
  breakpoints: {
    values: breakpointValues,
  },
  palette: {
    default: {
      light: grey[100],
      main: grey[200],
      dark: grey[700],
    },
    primary: {
      light: orange[100],
      main: orange[400],
      dark: orange[700],
    },
    secondary: {
      light: grey[100],
      main: grey[200],
      dark: grey[700],
    },
    background: {
      default: '#F2F2F2',
    },
    text: {
      primary: grey[900],
      secondary: grey[700],
    },
  },
  typography: {
    body1: {
      fontFamily: lato,
      fontStyle: 'normal',
      fontWeight: 'normal',
      letterSpacing: '0.01em',
      fontSize: 16,
      lineHeight: 22 / 16,
    },
    h1: {
      fontFamily: ebgaramond,
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 80,
      lineHeight: 88 / 80,
    },
    h2: {
      fontFamily: ebgaramond,
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 56,
      lineHeight: 64 / 56,
    },
    h3: {
      fontFamily: ebgaramond,
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 40,
      lineHeight: 48 / 40,
    },
    h4: {
      fontFamily: ebgaramond,
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 24,
      lineHeight: 32 / 24,
    },
    h5: {
      fontFamily: ebgaramond,
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 24,
      lineHeight: 32 / 24,
    },
    h6: {
      fontFamily: ebgaramond,
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 18,
      lineHeight: 26 / 18,
    },
    subtitle1: {
      fontFamily: lato,
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 28 / 18,
    },
    subtitle2: {
      fontFamily: lato,
      fontStyle: 'normal',
      fontSize: 15,
      lineHeight: 20 / 15,
    },
    body2: {
      fontFamily: lato,
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 13,
      lineHeight: 18 / 13,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        color: white[0] + ' !important',
        background: 'linear-gradient(to right, #57a68f 50%,#db9e30 50%) no-repeat scroll right bottom / 210% 100% #db9e30 !important',
        fontFamily: 'inherit',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 16 / 12,
        borderRadius: 2,
        padding: '16px 24px',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
      },
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
          backgroundPosition: 'left bottom !important',
        },
        '&:active': {
          boxShadow: 'none',
        },
        '&:focus': {
          // padding: '15px 24px',
          // borderWidth: 1,
          // borderStyle: 'solid',
        },
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: orange[300],
        },
        '&:focus': {
          borderColor: green[600],
        },
        '&$disabled': {
          color: grey[0],
          backgroundColor: orange[100],
        },
      },
      containedSecondary: {
        color: grey[1000],
        '&:hover': {
          backgroundColor: grey[300],
        },
        '&:focus': {
          backgroundColor: grey[300],
          borderColor: grey[1000],
        },
        '&$disabled': {
          color: grey[400],
          backgroundColor: grey[300],
        },
        '&:active': {
          color: grey[0],
          backgroundColor: green[500],
        },
        '&.active': {
          color: grey[0],
          backgroundColor: green[500],
        },
        '&.alt': {
          backgroundColor: grey[900],
          color: grey[0],
          '&:hover': {
            color: grey[1000],
            backgroundColor: grey[300],
          },
        },
      },
    },
    MuiTypography: {
      root: {
        '&.green100': {
          color: green[100],
        },
        '&.green300': {
          color: green[300],
        },
        '&.green400': {
          color: green[400],
        },
        '&.white': {
          color: grey[0],
        },
      },
      body1: {
        '&.small': {
          fontSize: 13,
          lineHeight: 18 / 13,
        },
        '&.large': {
          fontSize: 18,
          lineHeight: 26 / 18,
        },
        '&.xlarge': {
          fontSize: 22,
          lineHeight: 32 / 22,
        },
      },
    },
    MuiToolbar: {
      gutters: {
        [breakpoints.only('xs')]: {
          paddingLeft: 24,
          paddingRight: 24,
        },
        [breakpoints.up('sm')]: {
          paddingLeft: 40,
          paddingRight: 40,
        },
      },
    },
    MuiInputBase: {
      input: {
        fontSize: 16,
        lineHeight: 22 / 16,
        height: 22,
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: grey[300],
        boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.07);',
      },
    },
    MuiAutocomplete: {
      inputRoot: {
        '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
          paddingTop: 13,
          paddingBottom: 13,
        },
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: 'translate(14px, 25px) scale(1)',
      },
    },
    MuiMenuItem: {
      gutters: {
        paddingLeft: 21,
        paddingRight: 21,
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: 16,
      },
    },
    MuiButtonGroup: {
      groupedContainedHorizontal: {
        '&:not(:last-child)': {
          borderRight: 'none',
        },
      },
    },
    MuiAccordion: {
      root: {
        '&:before': {
          backgroundColor: 'none',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme, {
  breakpoints: ['md'],
  factor: 5 / 3,
});

export default theme;

// body medium
//letter-spacing: 0.01em;
