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
import CustomersList from './pages/CustomersList';
import CustomersForm from './pages/CustomersForm';
import CarsForm from './pages/CarsForm';
import CarsList from './pages/CarsList';
import CardForm from './pages/CardForm';
import './App.css'

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
             <Route path='/customers' element={ <CustomersList /> } />        
             <Route path='/customers/new' element={ <CustomersForm /> } />
             <Route path='/customers/:id' element={ <CustomersForm /> } />
             <Route path='/cars' element={ <CarsList /> } />
             <Route path='/cars/new' element={ <CarsForm /> } />
             <Route path='/card' element={ <CardForm /> } />
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
