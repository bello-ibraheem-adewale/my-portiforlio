import React from 'react'
import image9 from '../assets/bb.jpg'


const About = () => {
  return (
    <div className='bg-black w-full min-h-screen text-white p-4'>
      <h1 className='text-center font-serif text-3xl md:text-4xl bg-gradient-to-r from-violet-500 to-fuchsia-500 p-4'>About Me</h1>
      <div className='flex flex-col lg:flex-row justify-center space-x-0 lg:space-x-10 items-center lg:items-start'>
        <img className='w-48 h-60 lg:w-72 lg:h-80 pt-8 lg:pt-20' src={image9} alt="Profile" />
        <div className='flex flex-col mt-4 lg:mt-0 lg:pl-10'>
          <div className='px-4 lg:px-0'>
            <p className='font-mono text-xs md:text-sm lg:text-base'>
              I am an experienced front-end web developer with over 3 years of professional expertise in the field.
              Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
            </p>
            <p className='font-mono text-xs md:text-sm lg:text-base mt-4'>
              My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.
            </p>
          </div> 

          <div className='flex flex-col mt-6'>
            {['HTML', 'CSS', 'TAILWINDCSS', 'BOOTSTRAP', 'REACT JS', 'NEST JS'].map((skill) => (
              <div key={skill} className='flex flex-col lg:flex-row items-center m-2 gap-4 hover:transform hover:scale-105 transition-transform'>
                <h2>{skill}</h2>
                <hr className='w-52 lg:w-80 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded' />
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className='flex flex-col md:flex-row justify-evenly p-10 bg-black w-full'>
        <div className='text-center'>
          <h1 className='bg-gradient-to-r from-pink-500 to-fuchsia-500 p-2 text-xl md:text-2xl'>3+</h1>
          <p className='text-sm md:text-xl'>YEARS OF EXPERIENCE</p>
        </div>
        <div className='hidden md:block bg-gradient-to-r from-violet-500 to-fuchsia-500 w-0.5 h-16'></div>

        <div className='text-center'>
          <h1 className='bg-gradient-to-r from-pink-500 to-fuchsia-500 p-2 text-xl md:text-2xl'>15+</h1>
          <p className='text-sm md:text-xl'>PROJECTS COMPLETED</p>
        </div>
        <div className='hidden md:block bg-gradient-to-r from-violet-500 to-fuchsia-500 w-0.5 h-16'></div>

        <div className='text-center'>
          <h1 className='bg-gradient-to-r from-pink-500 to-fuchsia-500 p-2 text-xl md:text-2xl'>5+</h1>
          <p className='text-sm md:text-xl'>HAPPY CLIENTS</p>
        </div>
      </main>
    </div>
  )
}

export default About
