import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Overview from './Pages/Overview'
import SalesReport from './Pages/SalesReport'
import Inventory from './Pages/Inventory'
import Customer from './Pages/Customer'

function App() {
  return (
   <Routes>
      <Route path='/Overview' element={<Overview/>}/> 
      <Route path='/SalesReport' element={<SalesReport/>}/> 
      <Route path='/Inventory' element={<Inventory/>}/>
      <Route path='/Customer' element={<Customer/>}/>  
   </Routes>
  )
}


function WrappedApp() {
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}

export default WrappedApp