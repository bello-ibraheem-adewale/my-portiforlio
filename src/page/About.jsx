import React from 'react'
import image9 from '../assets/bb.jpg'
import { FaAffiliatetheme } from "react-icons/fa6";



const About = () => {
  return (
    <div className='bg-black w-[100vw] min-h-screen text-white'>
     
      <h1 className='text-center font-serif text-gradient-to-r from-violet-500 to-fuchsia-500'>About me</h1>
      <FaAffiliatetheme />
      <div className='flex flex-row justify-center space-x-10'>
        <img className='w-48 h-60 pt-20 pl-4' src={image9} alt="" />
        <div className='flex flex-col'>
          <div className='pt-12'>
            <p className='font-mono text-[12px] tablet:text-[15px] laptop:text-[15px]'>I am an experienced front-end web developer with over a decade of professional expertise in the field.Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
            <p className='font-mono text-[12px] tablet:text-[15px] laptop:text-[15px]'>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to to each project.</p>
        
   
          </div> 
          <div className='flex flex-col'>
          <div className='flex flex-col hover:transition 0.3s hover:transform hover:scale-105 tablet:flex-row items-center m-2 gap-4'><h2>HTML</h2><hr className='w-52 tablet:w-80 laptop:w-80 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded' /></div>
          <div className='flex flex-col hover:transition 0.3s hover:transform hover:scale-105 tablet:flex-row items-center m-2 gap-4'><h2>CSS</h2><hr className='w-52 tablet:w-80 laptop:w-80 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded' /></div>
          <div className='flex flex-col hover:transition 0.3s hover:transform hover:scale-105 tablet:flex-row items-center m-2 gap-4'><h2>TAILWINDCSS</h2><hr className='w-52 tablet:w-80 laptop:w-80 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded' /></div>
          <div className='flex flex-col hover:transition 0.3s hover:transform hover:scale-105 tablet:flex-row items-center m-2 gap-4'><h2>BOOTSTARP</h2><hr className='w-52 tablet:w-80 laptop:w-80 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded' /></div>
          <div className='flex flex-col hover:transition 0.3s hover:transform hover:scale-105 tablet:flex-row items-center m-2 gap-4'><h2>REACT JS</h2><hr className='w-52 tablet:w-80 laptop:w-80 h-0.5 rounded bg-gradient-to-r from-violet-500 to-fuchsia-500' /></div>
          <div className='flex flex-col hover:transition 0.3s hover:transform hover:scale-105 tablet:flex-row items-center m-2 gap-4'><h2>NEST JS</h2><hr className='w-52 tablet:w-80 laptop:w-80 h-1 rounded bg-gradient-to-r from-violet-500 to-fuchsia-500' /></div>
          </div>
        </div>
      </div>

      <main className='flex justify-evenly p-10 bg-black h-auto w-screen'>
        <div>
          <h1 className='bg-gradient-to-r from-pink-500 to-fuchsia-500 w-5'>3+</h1>
          <p className='text-[10px] tablet:text-xl laptop:text-xl'>YEARS OF EXPERIENCE</p>
        </div>
        {/* <hr className='bg-orange-500 w-5 h-90'/> */}
        <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 w-0.5 mr-5 h-16'></div>

        <div>
          <h1 className='bg-gradient-to-r from-pink-500 to-fuchsia-500 w-8'>90+</h1>
          <p className='text-[10px] tablet:text-xl laptop:text-xl'>PROJECT COMPLETED</p>
        </div>
        <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 w-0.5 mr-5 h-16'></div>

        <div>
          <h1 className='bg-gradient-to-r from-pink-500 to-fuchsia-500 w-7'>15+</h1>
          <p className='text-[10px] tablet:text-xl laptop:text-xl'>HAPPY CLIENTS</p>
        </div>
      </main>
      <h1></h1>
    </div>
  )
}

export default About
