import { BrowserRouter, Routes, Route , Link} from 'react-router-dom'
import Exercicio01 from './exercicios/01'
import Exercicio02 from './exercicios/02'
import './App.css'
import Home from './pages/Home'

function App() {
  
  return (
    <div className="App">
     <h1>Exercicíos de React Hooks</h1>
     
     <BrowserRouter>

     <ul className='menu'>
      <li> <Link to="/01">Exercicíos 01</Link></li>
      <li> <Link to="/01">Exercicíos 02</Link></li>
      <li> <Link to="/01">Exercicíos 03</Link></li>
      <li> <Link to="/01">Exercicíos 04</Link></li>
      <li> <Link to="/01">Exercicíos 05</Link></li>
      <li> <Link to="/01">Exercicíos 06</Link></li>
      </ul>
      <hr/>
     <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path='/01' element={<Exercicio01 />}/>
     <Route path='/02' element={<Exercicio02 />}/>
     <Route path='/03' />
     <Route path='/04' />
     <Route path='/05' />
     <Route path='/06' />
     </Routes>
     </BrowserRouter>
     
    </div>
  )
}

export default App
