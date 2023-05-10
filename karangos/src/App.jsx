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
//import './App.css'

function App() {
  
  return (
    <>
     <BrowserRouter>
     <ThemeProvider theme={theme}>
       <Box sx={{ 
        width: '100vw' , 
        height: '100vh', 
        backgroundColor: 'background.default'
      }}>
       <TopBar />
       <FooterBar />
       </Box>
     </ThemeProvider>
     </BrowserRouter>
    </>
  )
}

export default App
