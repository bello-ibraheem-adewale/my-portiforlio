import React from 'react'
import image9 from '../assets/bb.jpg'
// import image1 from '../assets/bello1.png'
// import image2 from '../assets/bello2.png'
// import image3 from '../assets/bello3.png'
// import image4 from '../assets/bello4.jpg'
// import { FaGithub } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
// import { IoIosMail } from "react-icons/io";


// import image from React



const Home = () => {

 
    
    
  
  return (
   


  



  <div className='w-[100vw] h-auto bg-black text-white font-mono'>
<nav className='flex justify-between p-5'>
  <h1>Dr.Bee</h1>
  <div className='hidden tablet:flex laptop:flex justify-evenly gap-8'>
    <a href="">Home</a>
    <a href="">About me</a>
    <a href="">Services</a>
    <a href="">My works</a>
    <a href="">Testimonials</a>
    
  </div>
  <h1>&#9747</h1>
  <a className='bg-gradient-to-r from-pink-500 to-fuchsia-500 transform scale-1 w-32 h-10 rounded-full pt-2 justify-center text-center hidden tablet:flex laptop:flex' href="">Contact Us</a>
</nav>
<div className='flex flex-col tablet:flex-row laptop:flex-row p-5 justify-center gap-10 align-middle items-center'>
<h1><span className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>I'm Bello Ibraheem Adewale,</span> frontend <br/> developer based in USA</h1>
<img className='w-56 h-72 bg-cover rounded-tr-full rounded-tl-full' src={image9} alt="" />

</div>
<div className='w-screen flex flex-col justify-center text-center'>
  <p className='text-[10px] tablet:text-xs laptop:text-xl'>I am a frontend developer with over 3yrs of experience of working with different kinds <br /> <span className='pl-48 mt-3'>of companies both remotely and onsite</span></p>
</div>

<div className='w-screen flex flex-col tablet:flex-row laptop:flex-row align-middle items-center justify-center gap-4 p-10'>
  <a className='bg-gradient-to-r from-violet-500 to-fuchsia-500 w-60 h-10 rounded-full text-center pt-1 border-2 border-b-white' href="">Connect me</a>
  <a className='bg-gradient-to-r from-pink-500 to-fuchsia-500   w-60 h-10 rounded-full text-center pt-1 border-2 border-b-white' href="">My resume</a>
</div>
  </div>
  )
}

export default Home
 