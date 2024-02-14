import { useState } from 'react'
import '@fontsource/roboto/100.css';

import Navbar from './layouts/navbar'

import Home from './pages/home'

import './App.css'

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <>
    <Navbar/>
    <Home/>
    </>
  )
}

export default App
