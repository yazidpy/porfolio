import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './composants/Header'
import Home from './composants/Home'
import Up from './composants/Up'
import About from './composants/About'
import Connaissances from './composants/Connaissances'
function App() {
  return (
    <div>
      <Up/>
      <Header/>
      <Home/>
      <About/>
      <Connaissances/>
    </div>
  )
}
export default App
