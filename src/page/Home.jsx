// // import image9 from '../assets/bb.jpg';
// // import { useState, createContext } from 'react';
// // import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
// // import { Link } from 'react-router-dom';

// // // export const DataContext = createContext


// // const Home = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setMenuOpen(!menuOpen);
// //   };

// //   return (
// //     <div className='w-full min-h-screen bg-black text-white font-mono'>
// //       <nav className='flex justify-between items-center py-4 px-6 tablet:px-10 laptop:px-12'>
// //         <h1 className='text-2xl tablet:text-3xl laptop:text-4xl'>Dr.Bee</h1>
        
// //         <div className='hidden tablet:flex laptop:flex justify-evenly gap-8'>
// //           <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
// //           <Link to="/about" onClick={() => setMenuOpen(false)}>About me</Link>
// //           <Link to="/service" onClick={() => setMenuOpen(false)}>Service</Link>
// //           <Link to="/work" onClick={() => setMenuOpen(false)}>My works</Link>
// //           <Link to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
// //         </div>

// //         <div>
// //           <Link to="/contact" className='bg-gradient-to-r from-pink-500 to-fuchsia-500 transition-transform hover:scale-105 hidden tablet:flex laptop:flex w-36 h-12 rounded-full justify-center items-center text-xl'>
// //             Contact Us
// //           </Link>
// //         </div>

// //         <div className='tablet:hidden laptop:hidden'>
// //           {menuOpen ? (
// //             <IoCloseOutline className='w-12 h-12' onClick={toggleMenu} />
// //           ) : (
// //             <IoMenuOutline className='w-12 h-12' onClick={toggleMenu} />
// //           )}
// //         </div>

// //         {menuOpen && (
// //           <div className='absolute top-16 right-0 w-48 text-center bg-gray-700 rounded-lg flex flex-col items-center py-4 tablet:hidden laptop:hidden'>
// //             <Link to="/" onClick={() => setMenuOpen(false)} className='py-2 w-full hover:bg-gradient-to-r from-violet-500 to-fuchsia-500'>Home</Link>
// //             <Link to="/about" onClick={() => setMenuOpen(false)} className='py-2 w-full hover:bg-gradient-to-r from-violet-500 to-fuchsia-500'>About me</Link>
// //             <Link to="/service" onClick={() => setMenuOpen(false)} className='py-2 w-full hover:bg-gradient-to-r from-violet-500 to-fuchsia-500'>Service</Link>
// //             <Link to="/work" onClick={() => setMenuOpen(false)} className='py-2 w-full hover:bg-gradient-to-r from-violet-500 to-fuchsia-500'>My works</Link>
// //             <Link to="/testimonials" onClick={() => setMenuOpen(false)} className='py-2 w-full hover:bg-gradient-to-r from-violet-500 to-fuchsia-500'>Testimonials</Link>
// //           </div>
// //         )}
// //       </nav>

// //       <div className='flex flex-col tablet:flex-row laptop:flex-row p-6 justify-center items-center gap-10 min-h-[calc(100vh-64px)]'>
// //         <h1 className='text-center tablet:text-left text-lg tablet:text-2xl laptop:text-3xl'>
// //           <span className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>I'm Bello Ibraheem Adewale</span>, a frontend developer with extensive real-life projects.
// //         </h1>
// //         <img className='w-56 h-72 bg-cover rounded-tr-full rounded-tl-full' src={image9} alt="Profile" />
// //       </div>

// //       <div className='w-full flex flex-col justify-center text-center p-4'>
// //         <p className='text-xs tablet:text-lg laptop:text-xl'>
// //           I am a frontend developer with over 3 years of experience working with different kinds of companies, both remotely and onsite.
// //         </p>
// //       </div>

// //       <div className='w-full flex flex-col tablet:flex-row laptop:flex-row items-center justify-center gap-6 p-10'>
// //         <Link to="/connect" className='bg-gradient-to-r from-violet-500 to-fuchsia-500 w-60 h-10 rounded-full text-center pt-2 transition-transform hover:scale-105'>
// //           Connect with me
// //         </Link>
// //         <Link to="/resume" className='bg-gradient-to-r from-pink-500 to-fuchsia-500 w-60 h-10 rounded-full text-center pt-2 transition-transform hover:scale-105'>
// //           My Resume
// //         </Link>
// //       </div>


      
// //     </div>
// //   );
// // };

// // export default Home;


// // src/pages/Home.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import image9 from '../assets/bb.jpg';
// import { FaGithubSquare } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
// import { FaLinkedin } from "react-icons/fa";


// const Home = () => (
//   <div className='w-full min-h-screen bg-black text-white font-mono'>
//     <div className='flex flex-col tablet:flex-row laptop:flex-row p-6 justify-center items-center gap-10 min-h-[calc(100vh-64px)]'>
//       <h1 className='text-center tablet:text-left text-lg tablet:text-2xl laptop:text-3xl'>
//         <span className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>I'm Bello Ibraheem Adewale</span>, a frontend developer with extensive real-life projects.
//       </h1>
//       <img className='w-56 h-72 bg-cover rounded-tr-full rounded-tl-full' src={image9} alt="Profile" />
//     </div>

//     <div className='flex justify-center items-center align-middle ml-96 space-x-10 w-96 h-20 border-2 border-blue-500'>
//     <a className='' href="https://github.com/"><FaGithubSquare className='w-40' /></a>
//     <a className='' href="https://x.com/home"><BsTwitterX /></a>
//     <a className='' href="https://www.linkedin.com/feed/"><FaLinkedin /></a>
//     </div>

//     <div className='w-full flex flex-col justify-center text-center p-4'>
//       <p className='text-xs tablet:text-lg laptop:text-xl'>
//         I am a frontend developer with over 3 years of experience working with different kinds of companies, both remotely and onsite.
//       </p>
//     </div>

//     <div className='w-full flex flex-col tablet:flex-row laptop:flex-row items-center justify-center gap-6 p-10'>
//       <Link to="/connect" className='bg-gradient-to-r from-violet-500 to-fuchsia-500 w-60 h-10 rounded-full text-center pt-2 transition-transform hover:scale-105'>
//         Connect with me
//       </Link>
//       <Link to="/resume" className='bg-gradient-to-r from-pink-500 to-fuchsia-500 w-60 h-10 rounded-full text-center pt-2 transition-transform hover:scale-105'>
//         My Resume
//       </Link>
//     </div>
//   </div>
// );

// export default Home;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import image9 from '../assets/bb.jpg';
// import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";

// const Home = () => (
//   <div className='w-full min-h-screen bg-black text-white font-mono'>
//     {/* Header Section */}
//     <div className='flex flex-col tablet:flex-row laptop:flex-row p-6 justify-center items-center gap-10 min-h-[calc(100vh-64px)]'>
//       <h1 className='text-center tablet:text-left text-lg tablet:text-2xl laptop:text-3xl'>
//         <span className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>I'm Bello Ibraheem Adewale</span>, a frontend developer with extensive real-life projects.
//       </h1>
//       <img className='w-56 h-72 bg-cover rounded-tr-full rounded-tl-full' src={image9} alt="Profile" />
//     </div>

//     {/* Social Media Icons */}
//     <div className='flex justify-center items-center space-x-10 my-6'>
//       <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className='transition-transform transform hover:scale-110'>
//         <FaGithubSquare className='w-10 h-10 text-gray-300 hover:text-pink-500' />
//       </a>
//       <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className='transition-transform transform hover:scale-110'>
//         <BsTwitterX className='w-10 h-10 text-gray-300 hover:text-blue-400' />
//       </a>
//       <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className='transition-transform transform hover:scale-110'>
//         <FaLinkedin className='w-10 h-10 text-gray-300 hover:text-blue-600' />
//       </a>
//     </div>

//     {/* Introduction Paragraph */}
//     <div className='w-full flex flex-col justify-center text-center p-4'>
//       <p className='text-xs tablet:text-lg laptop:text-xl'>
//         I am a frontend developer with over 3 years of experience working with different kinds of companies, both remotely and onsite.
//       </p>
//     </div>

//     {/* Action Links */}
//     <div className='w-full flex flex-col tablet:flex-row laptop:flex-row items-center justify-center gap-6 p-10'>
//       <Link to="/connect" className='bg-gradient-to-r from-violet-500 to-fuchsia-500 w-60 h-10 rounded-full text-center pt-2 transition-transform hover:scale-105'>
//         Connect with me
//       </Link>
//       <Link to="/resume" className='bg-gradient-to-r from-pink-500 to-fuchsia-500 w-60 h-10 rounded-full text-center pt-2 transition-transform hover:scale-105'>
//         My Resume
//       </Link>
//     </div>
//   </div>
// );

// export default Home;




// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import image9 from '../assets/bb.jpg';
// import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";

// const Home = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 300); // Delay to trigger the animation
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className='w-full min-h-screen bg-black text-white font-mono'>
//       {/* Header Section */}
//       <div className={`flex flex-col tablet:flex-row laptop:flex-row p-6 justify-center items-center gap-10 min-h-[calc(100vh-64px)] transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
//         <h1 className='text-center tablet:text-left text-lg tablet:text-2xl laptop:text-3xl transform transition-transform duration-500 hover:scale-105'>
//           <span className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>I'm Bello Ibraheem Adewale</span>, a frontend developer with extensive real-life projects.
//         </h1>
//         <img className='w-56 h-72 bg-cover rounded-tr-full rounded-tl-full transition-transform duration-500 hover:scale-105' src={image9} alt="Profile" />
//       </div>

//       {/* Social Media Icons */}
//       <div className={`flex justify-center items-center space-x-10 my-6 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} delay-150`}>
//         <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className='transition-transform transform hover:scale-110'>
//           <FaGithubSquare className='w-10 h-10 text-gray-300 hover:text-pink-500' />
//         </a>
//         <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className='transition-transform transform hover:scale-110'>
//           <BsTwitterX className='w-10 h-10 text-gray-300 hover:text-blue-400' />
//         </a>
//         <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className='transition-transform transform hover:scale-110'>
//           <FaLinkedin className='w-10 h-10 text-gray-300 hover:text-blue-600' />
//         </a>
//       </div>

//       {/* Introduction Paragraph */}
//       <div className={`w-full flex flex-col justify-center text-center p-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} delay-300`}>
//         <p className='text-xs tablet:text-lg laptop:text-xl'>
//           I am a frontend developer with over 3 years of experience working with different kinds of companies, both remotely and onsite.
//         </p>
//       </div>

//       {/* Action Links */}
//       <div className={`w-full flex flex-col tablet:flex-row laptop:flex-row items-center justify-center gap-6 p-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} delay-450`}>
//         <Link to="/connect" className='bg-gradient-to-r from-violet-500 to-fuchsia-500 w-60 h-10 rounded-full text-center pt-2 transition-transform hover:scale-105'>
//           Connect with me
//         </Link>
//         <Link to="/resume" className='bg-gradient-to-r from-pink-500 to-fuchsia-500 w-60 h-10 rounded-full text-center pt-2 transition-transform hover:scale-105'>
//           My Resume
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;



// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import image9 from '../assets/bb.jpg';
// import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";

// // CSS for animations
// const styles = `
// @keyframes fadeIn {
//   0% {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// @keyframes scaleUp {
//   0% {
//     transform: scale(0.9);
//   }
//   100% {
//     transform: scale(1);
//   }
// }

// .fade-in {
//   animation: fadeIn 0.8s ease forwards;
// }

// .scale-up {
//   animation: scaleUp 0.3s ease forwards;
// }
// `;

// const Home = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 100); // Adjust timing for visibility
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <style>{styles}</style>
//       <div className='w-full min-h-screen bg-black text-white font-mono'>
//         {/* Header Section */}
//         <div className={`flex flex-col tablet:flex-row laptop:flex-row p-6 justify-center items-center gap-10 min-h-[calc(100vh-64px)] ${isVisible ? 'fade-in' : 'opacity-0'}`}>
//           <h1 className={`text-center tablet:text-left text-lg tablet:text-2xl laptop:text-3xl transition-transform duration-500 ${isVisible ? 'scale-up' : 'opacity-0'}`}>
//             <span className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>I'm Bello Ibraheem Adewale</span>, a frontend developer with extensive real-life projects.
//           </h1>
//           <img className={`w-56 h-72 bg-cover rounded-tr-full rounded-tl-full transition-transform duration-500 ${isVisible ? 'scale-up' : 'opacity-0'}`} src={image9} alt="Profile" />
//         </div>

//         {/* Social Media Icons */}
//         <div className={`flex justify-center items-center space-x-10 my-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
//           <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className='transition-transform transform hover:scale-110'>
//             <FaGithubSquare className='w-10 h-10 text-gray-300 hover:text-pink-500' />
//           </a>
//           <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className='transition-transform transform hover:scale-110'>
//             <BsTwitterX className='w-10 h-10 text-gray-300 hover:text-blue-400' />
//           </a>
//           <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className='transition-transform transform hover:scale-110'>
//             <FaLinkedin className='w-10 h-10 text-gray-300 hover:text-blue-600' />
//           </a>
//         </div>

//         {/* Introduction Paragraph */}
//         <div className={`w-full flex flex-col justify-center text-center p-4 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
//           <p className='text-xs tablet:text-lg laptop:text-xl'>
//             I am a frontend developer with over 3 years of experience working with different kinds of companies, both remotely and onsite.
//           </p>
//         </div>

//         {/* Action Links */}
//         <div className={`w-full flex flex-col tablet:flex-row laptop:flex-row items-center justify-center gap-6 p-10 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
//           <Link to="/connect" className='bg-gradient-to-r from-violet-500 to-fuchsia-500 w-60 h-10 rounded-full text-center pt-2 transition-transform hover:scale-105'>
//             Connect with me
//           </Link>
//           <Link to="/resume" className='bg-gradient-to-r from-pink-500 to-fuchsia-500 w-60 h-10 rounded-full text-center pt-2 transition-transform hover:scale-105'>
//             My Resume
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image9 from '../assets/bb.jpg';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

// CSS for animations
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
    }, 100); // Adjust timing for visibility
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className='w-full min-h-screen bg-black text-white font-mono'>
        {/* Header Section */}
        <div className={`flex flex-col tablet:flex-row laptop:flex-row p-6 justify-center items-center gap-10 min-h-[calc(100vh-64px)] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Text Section */}
          <div className={`transition-transform duration-500 ${swapped ? 'swap' : ''}`}>
            <h1 className={`text-center tablet:text-left text-lg tablet:text-2xl laptop:text-3xl`}>
              <span className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>I'm Bello Ibraheem Adewale</span>, a frontend developer with extensive real-life projects.
            </h1>
          </div>
          {/* Image Section */}
          <img className={`w-56 h-72 bg-cover rounded-tr-full rounded-tl-full transition-transform duration-500 ${swapped ? 'swap' : ''}`} src={image9} alt="Profile" />
        </div>

        {/* Social Media Icons */}
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

        {/* Introduction Paragraph */}
        <div className={`w-full flex flex-col justify-center text-center p-4 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <p className='text-xs tablet:text-lg laptop:text-xl'>
            I am a frontend developer with over 3 years of experience working with different kinds of companies, both remotely and onsite.
          </p>
        </div>

        {/* Action Links */}
        <div className={`w-full flex flex-col tablet:flex-row laptop:flex-row items-center justify-center gap-6 p-10 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          {/* <Link to="/connect" className='bg-gradient-to-r from-violet-500 to-fuchsia-500 w-60 h-10 rounded-full text-center pt-2 transition-transform hover:scale-105'>
            Connect with me
          </Link> */}
          <Link to="/resume" className='bg-gradient-to-r from-pink-500 to-fuchsia-500 w-60 h-10 rounded-full text-center pt-2 transition-transform hover:scale-105'>
            My Resume
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
