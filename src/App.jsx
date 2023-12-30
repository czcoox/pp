import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Outlet/>
    </>
  )
}

export default App
