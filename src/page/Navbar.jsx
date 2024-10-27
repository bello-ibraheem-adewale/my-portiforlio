// src/components/Navbar.js
import React, { useContext } from 'react';
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
// import { NavbarContext } from './page/NavbarContext';
import { NavbarContext } from './NavbarContext';

const Navbar = () => {
  const { menuOpen, toggleMenu } = useContext(NavbarContext);

  return (
    <nav className='w-full bg-black text-white font-mono flex justify-between items-center py-4 px-6 tablet:px-10 laptop:px-12'>
      <h1 className='text-xl tablet:text-3xl laptop:text-4xl font-serif'>Dr. Bee</h1>
      
      <div className='hidden tablet:flex laptop:flex justify-evenly gap-8'>
        <Link to="/" onClick={() => toggleMenu(false)}>Home</Link>
        <Link to="/about" onClick={() => toggleMenu(false)}>About me</Link>
        <Link to="/services" onClick={() => toggleMenu(false)}>Service</Link>
        <Link to="/projects" onClick={() => toggleMenu(false)}>My Projects</Link>
        {/* <Link to="/testimonials" onClick={() => toggleMenu(false)}>Testimonials</Link> */}
      </div>

      <Link to="/contact" className='bg-gradient-to-r from-pink-500 to-fuchsia-500 transition-transform hover:scale-105 hidden tablet:flex laptop:flex w-36 h-12 rounded-full justify-center items-center text-xl'>
        Contact Me
      </Link>

      <div className='tablet:hidden laptop:hidden'>
        {menuOpen ? (
          <IoCloseOutline className='w-12 h-12' onClick={toggleMenu} />
        ) : (
          <IoMenuOutline className='w-12 h-12' onClick={toggleMenu} />
        )}
      </div>

      {menuOpen && (
        <div className='absolute top-16 right-0 w-48 text-center bg-gray-700 rounded-lg flex flex-col items-center py-4 tablet:hidden laptop:hidden'>
          <Link to="/" onClick={() => toggleMenu(false)} className='py-2 w-full hover:bg-gradient-to-r from-violet-500 to-fuchsia-500'>Home</Link>
          <Link to="/about" onClick={() => toggleMenu(false)} className='py-2 w-full hover:bg-gradient-to-r from-violet-500 to-fuchsia-500'>About me</Link>
          <Link to="/service" onClick={() => toggleMenu(false)} className='py-2 w-full hover:bg-gradient-to-r from-violet-500 to-fuchsia-500'>Service</Link>
          <Link to="/work" onClick={() => toggleMenu(false)} className='py-2 w-full hover:bg-gradient-to-r from-violet-500 to-fuchsia-500'>My works</Link>
          <Link to="/contact" className='bg-gradient-to-r from-pink-500 to-fuchsia-500 transition-transform hover:scale-105 p-2 tablet:p-0 laptop:p-0 tablet:flex laptop:flex w-36 h-12 rounded-full justify-center items-center text-xl'>
        Contact Me
      </Link>
          {/* <Link to="/testimonials" onClick={() => toggleMenu(false)} className='py-2 w-full hover:bg-gradient-to-r from-violet-500 to-fuchsia-500'>Testimonials</Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
