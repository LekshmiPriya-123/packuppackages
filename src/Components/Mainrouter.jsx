import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Tourpackage from './Pages/Tourpackage';
import Internationalpackage from './Pages/Internationalpackage';
import Nationalpackage from './Pages/Nationalpackage';
import Domestic from './Pages/Domestic';
const Mainrouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="About" element={<About />} />
        <Route path='Services' element={<Services />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='Tourpackage'element={<Tourpackage />} />
        <Route path='International' element={<Internationalpackage />} />
        <Route path='National' element={<Nationalpackage />} />
        <Route path='Domestic' element={<Domestic />} />
      </Routes>
    </div>
  )
}

export default Mainrouter
