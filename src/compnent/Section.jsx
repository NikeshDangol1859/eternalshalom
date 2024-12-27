import React from 'react'
import Nav from './Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Academic from './Pages/Academic'
import Gallary from './Pages/Gallary'


function Section() {
  return (
    <>
    <Nav/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/gallary" element={<Gallary/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
      
    </>
  )
}

export default Section
