import { useState } from 'react'
import Main from './components/Main'
import Price from './components/Price'
import Currencies from './components/Currencies'
import Nav from './components/Nav'
import {Routes, Route} from 'react-router-dom'
import './App.css'

export default function App() {
  

  return (
<> 
    <div className='App'>
    <Nav />
    <Routes>
    <Route path='/' element={<Main />}/>
    <Route path='/currencies' element={<Currencies />}/>
    <Route path='/price/:symbol' element={<Price />} />
    </Routes>
    </div>
    </>

  )
}


