import { useState } from 'react'
import '@fontsource/roboto';
import '@fontsource/roboto/100.css';

import Navbar from './layouts/navbar'

import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'

import './App.css'

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
