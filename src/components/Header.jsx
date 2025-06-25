import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: 'rgba(245, 90, 90, 1)',
        },
        secondary: {
            main: 'rgba(255, 255, 255, 1)',
            light: 'rgba(255, 255, 255, 1)'
        }
    },
    typography: {
        h6: {
            fontFamily: 'Inter',
            fontSize: '1.8rem',
            letterSpacing: '-0.05em',
            fontWeight: 300,
            color: 'rgba(20, 20, 19, 1)'
        }
    },
});

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function Header(props) {

    const logoSize = 50;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
        <AppBar position='fixed' color='secondary' 
            sx={{
            boxShadow: '0 0.15em 0.1em 0 rgba(0, 0, 0, 0.1)' 
        }}>
            <Toolbar sx={{
                display: 'flex', 
                justifyContent: 'center',
                height: 90,
            }}>
                <Box component='img' src='/icon.png' alt='white globe logo' sx={{
                    height: logoSize,
                    pr: 1,
                }}></Box>
                <Typography variant="h6" component="h1"> 
                Chef GPT
                </Typography>
            </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <ScrollTop {...props}>
            <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
            </Fab>
        </ScrollTop>
        </ThemeProvider>
    );
}