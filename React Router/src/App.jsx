import { React, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './routes/navBar'

function App() {

  return (
    <>
      <NavBar/>      
      <h1>Olá, Mundo</h1>      
      <Outlet/>
    </>
  )
}

export default App
