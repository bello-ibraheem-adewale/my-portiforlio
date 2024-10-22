import image9 from '../assets/bb.jpg';
import { useState } from 'react';
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-[100vw] min-h-screen bg-black text-white font-mono'>
      <nav className='flex justify-between items-center py-4 px-6 tablet:px-10 laptop:px-10'>
        <h1 className='text-2xl'>Dr.Bee</h1>
        <div className='hidden tablet:flex laptop:flex justify-evenly gap-8'>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About me</Link>
          <Link to="/service" onClick={() => setMenuOpen(false)}>Service</Link>
          <Link to="/work" onClick={() => setMenuOpen(false)}>My works</Link>
          <Link to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
        </div>

        <div>
          <Link to="/contact" className='bg-gradient-to-r from-pink-500 to-fuchsia-500 transition-colors bg-blend-lighten hover:transform scale-75 hidden tablet:flex laptop:flex w-36 h-12 rounded-full pt-2 justify-center text-xl text-center'>
            Contact Us
          </Link>
        </div>

        <div className='tablet:hidden laptop:hidden'>
          {menuOpen ? (
            <IoCloseOutline className='w-12 h-12' onClick={toggleMenu} />
          ) : (
            <IoMenuOutline className='w-12 h-12' onClick={toggleMenu} />
          )}
        </div>

        {menuOpen && (
          <div className='absolute top-16 right-0 w-48 text-center bg-slate-400 flex flex-col items-center py-4 tablet:hidden laptop:hidden'>
            <Link to="/" onClick={() => setMenuOpen(false)} className='py-2 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 w-48'>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className='py-2 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 w-48'>About me</Link>
            <Link to="/service" onClick={() => setMenuOpen(false)} className='py-2 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 w-48'>Service</Link>
            <Link to="/work" onClick={() => setMenuOpen(false)} className='py-2 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 w-48'>My works</Link>
            <Link to="/testimonials" onClick={() => setMenuOpen(false)} className='py-2 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 w-48'>Testimonials</Link>
          </div>
        )}
      </nav>

      <div className='flex flex-col tablet:flex-row laptop:flex-row p-5 justify-center items-center gap-10 min-h-[calc(100vh-64px)]'>
        <h1 className='text-center tablet:text-left'>
          <span className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>I'm Bello Ibraheem Adewale</span>, frontend developer with a lot of real-life projects
        </h1>
        <img className='w-56 h-72 bg-cover rounded-tr-full rounded-tl-full' src={image9} alt="Profile" />
      </div>

      <div className='w-screen flex flex-col justify-center text-center'>
        <p className='text-[10px] tablet:text-xs laptop:text-xl'>
          I am a frontend developer with over 3 years of experience working with different kinds of companies both remotely and onsite.
        </p>
      </div>

      <div className='w-screen flex flex-col tablet:flex-row laptop:flex-row items-center justify-center gap-4 p-10'>
        <Link to="/connect" className='bg-gradient-to-r from-violet-500 to-fuchsia-500 w-60 h-10 rounded-full text-center pt-1 border-2 border-b-white'>Connect me</Link>
        <Link to="/resume" className='bg-gradient-to-r from-pink-500 to-fuchsia-500 w-60 h-10 rounded-full text-center pt-1 border-2 border-b-white'>My resume</Link>
      </div>
    </div>
  );
};

export default Home;
