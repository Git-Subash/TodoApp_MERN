import * as React from 'react';
import {List} from './components/page/List'
import {Modify} from './components/page/Modify'
import {Create} from './components/page/Create'
import { Route,Routes } from 'react-router-dom';
import bg from './assets/bg1.jpg'


const App = () => {
  
  return (
   
    <div className=' text-white min-h-screen overflow-hidden  bg-no-repeat bg-cover bg-left-bottom ' style={{backgroundImage:`url(${bg})`}} >
    
     <Routes>
   
      <Route path='/'element={<List/>} > </Route>
      <Route path='/Create'element={<Create/>} > </Route>
      <Route path='/Modify/:id'element={<Modify/>} > </Route>
     </Routes>


  </div>

  )
  }

export default App