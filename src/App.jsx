
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './page/Navbar';
import Home from './page/Home';
import About from './page/About';
import Service from './page/Service';
import { NavbarProvider } from './page/NavbarContext';
import ContactMe from './page/ContactMe';
import Resume from './Resume';
import Project from './page/Project';

function App() {
  return (
    <BrowserRouter>
      <NavbarProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path='projects' element={<Project/>}/>
        </Routes>
      </NavbarProvider>
    </BrowserRouter>
  );
}

export default App;

