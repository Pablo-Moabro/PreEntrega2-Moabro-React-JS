import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BaseLayOut from './layout/BaseLayOut'
import Home from './Pages/Home/Home'
import Store from './Pages/Store/Store'
import Contact from './Pages/Contact/Contact'
import Details from './Pages/Details/Details'


function App() {


  return (
   
    <BrowserRouter>
      <BaseLayOut>
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/store' element={<Store/>} />
              <Route exact path='/store/category/:id' element={<Store/>} />
              <Route exact path='/contact' element={<Contact/>} />
              <Route exact path='/details/:id' element={<Details/>} />
          </Routes>
      </BaseLayOut>
    </BrowserRouter>
  )
}
    

          
export default App
          
              

            

