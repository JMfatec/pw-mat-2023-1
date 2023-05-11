import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import TopBar from './components/ui/TopBar'
import theme from './utils/theme'
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box'
import FooterBar from './components/ui/FooterBar';
import Homepage from './pages/Homepage';
import CssBaseline  from '@mui/material/CssBaseline';
//import './App.css'

function App() {
  
  return (
    <>
     <BrowserRouter>
     <ThemeProvider theme={theme}>
      <CssBaseline />
       <Box sx={{ 
        width: '100vw' , 
        minheight: '100vh', 
        backgroundColor: 'background.default'
      }}>
       <TopBar />
       <Box sx={{
          margin: '25px 25px 55px 25px',
          //backgroundColor: 'blue'
       }}>
          
          <Routes>
             <Route path='/' element={ <Homepage /> } />
          </Routes>
       </Box>
       <FooterBar />
       </Box>
     </ThemeProvider>
     </BrowserRouter>
    </>
  )
}

export default App
