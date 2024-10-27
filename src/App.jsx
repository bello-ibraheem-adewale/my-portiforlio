// // import Bee from "./page/Bee"
// // import Navbar from "./page/Navbar"
// import Home from "./page/Home"
// import About from "./page/About"
// import Service from "./page/Service"
// import { BrowserRouter,Routes,Route } from "react-router-dom"


// function App() {
  

//   return (
//     <BrowserRouter>
//     <div>
//       <Routes>
        
//         {/* <Route path="/" element={<Navbar />}></Route> */}
//        <Route path="/" element={<Home/>} />
//        <Route path="/about" element={<About/>} />
//        <Route path="/service" element={<Service/>} />
      
//       </Routes>

//     </div>
//     </BrowserRouter>
//   )
// }

// export default App


// src/App.js
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
// import ConnectWithMe from './page/ConnectWithMe';

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
          {/* <Route path="/connect" element={<ConnectWithMe />} /> */}
          {/* Add other routes as needed */}
        </Routes>
      </NavbarProvider>
    </BrowserRouter>
  );
}

export default App;

