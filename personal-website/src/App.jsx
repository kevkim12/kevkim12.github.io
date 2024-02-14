import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './layouts/navbar'
import './App.css'

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <>
    <Navbar/>
    
    </>
  )
}

export default App
