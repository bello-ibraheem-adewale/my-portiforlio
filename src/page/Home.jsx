


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image9 from '../assets/bb.jpg';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const styles = `
@keyframes swapPosition {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0);
  }
}

.swap {
  animation: swapPosition 1s ease forwards;
}
`;

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [swapped, setSwapped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setSwapped(true);
    }, 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className='w-full min-h-screen bg-black text-white font-mono'>
        <div className={`flex flex-col tablet:flex-row laptop:flex-row p-6 justify-center items-center gap-10 min-h-[calc(100vh-64px)] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`transition-transform duration-500 ${swapped ? 'swap' : ''}`}>
            <h1 className={`text-center tablet:text-left text-lg tablet:text-2xl laptop:text-3xl`}>
              <span className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>I'm Bello Ibraheem Adewale</span>, a frontend developer with extensive real-life projects.
            </h1>
          </div>
          <img className={`w-56 h-72 bg-cover rounded-tr-full rounded-tl-full transition-transform duration-500 ${swapped ? 'swap' : ''}`} src={image9} alt="Profile" />
        </div>

        <div className={`flex justify-center items-center space-x-10 my-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className='transition-transform transform hover:scale-110'>
            <FaGithubSquare className='w-10 h-10 text-gray-300 hover:text-pink-500' />
          </a>
          <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className='transition-transform transform hover:scale-110'>
            <BsTwitterX className='w-10 h-10 text-gray-300 hover:text-blue-400' />
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className='transition-transform transform hover:scale-110'>
            <FaLinkedin className='w-10 h-10 text-gray-300 hover:text-blue-600' />
          </a>
        </div>

        <div className={`w-full flex flex-col justify-center text-center p-4 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <p className='text-xs tablet:text-lg laptop:text-xl'>
            I am a frontend developer with over 3 years of experience working with different kinds of companies, both remotely and onsite.
          </p>
        </div>

        <div className={`w-full flex flex-col tablet:flex-row laptop:flex-row items-center justify-center gap-6 p-10 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <Link to="/resume" className='bg-gradient-to-r from-pink-500 to-fuchsia-500 w-60 h-10 rounded-full text-center pt-2 transition-transform hover:scale-105'>
            My Resume
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
