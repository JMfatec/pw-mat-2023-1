import { createTheme } from '@mui/material/styles';
import { yellow, pink } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark', //por pradão escurece tudo
    primary: {
      main: yellow[600],
    },
    secondary: {
      main: pink[500],
    },
  },
  typography: {
    h1: {
      fontSize: '30px',
      fontWeight: 'bold'
    }
  }
});

export default theme