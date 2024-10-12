import React from 'react'
import image9 from '../assets/bb.jpg'
import image1 from '../assets/bello1.png'
import image2 from '../assets/bello2.png'
import image3 from '../assets/bello3.png'
import image4 from '../assets/bello4.jpg'
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";


// import image from React



const Home = () => {

 
    
    
  
  return (
   


    <div className='flex justify-center items-center flex-col w-screen h-auto bg-black text-white'>
       <div className='flex  flex-col tablet:flex-row laptop:flex-row items-center '>
      
      <h1 className='font-mono p-5'>Hi guy's... i'm Bello Ibraheem Adewale...<br/>
      a front-end web developer </h1>
      <img className='w-60 h-80 bg-cover rounded-tr-full rounded-tl-full' src={image9} alt="" />
         
     </div>

     <div className='flex flex-col tablet:flex-row laptop:flex-row p-10 gap-4'>
     <a className='' href="https://github.com/bello-ibraheem-adewale"><FaGithub className='w-28 tablet:w-16 laptop:w-28  h-28 tablet:h-10 laptop:h-10 hover:bg-red-500 hover:rounded-full'/></a>
     <a className='' href="https://x.com/home?lang=en"><BsTwitterX className='w-28 tablet:w-16 laptop:w-28  h-28 tablet:h-10 laptop:h-10  hover:bg-red-500 hover:rounded-full'/></a>
     <a className='' href="https://myaccount.google.com/"><IoIosMail className='w-28 tablet:w-16 laptop:w-28  h-28 tablet:h-10 laptop:h-10 hover:bg-red-500 hover:rounded-full'/></a>
     </div>

     <div>
      <img src={image1} alt="" />
     <img src={image2} alt="" /> 
     <img src={image3} alt="" /> 
     <img src={image4} alt="" />

     </div>
    


    </div>
  )
}

export default Home
 