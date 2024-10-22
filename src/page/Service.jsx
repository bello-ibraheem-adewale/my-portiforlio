import React from 'react'
import { TbMarquee } from 'react-icons/tb'

const Service = () => {

    const myServices = [
        {
            id: '01',
            name: 'Web design',
            desception: 'Web development is the way of build, programming...',
            more: 'Read More ->'
            
        },
        {
            id: '02',
            name: 'Graph Design',
            desception: 'Web development is the way of build, programming...',
            more: 'Read More ->'
            
        },
        {
            id: '03',
            name: 'Free flancer',
            desception: 'Web development is the way of build, programming...',
            more: 'Read More ->'
            
        },
        {
            id: '04',
            name: 'Responsive user interface',
            desception: 'Web development is the way of build, programming...',
            more: 'Read More ->'

            
        },
        {
            id: '05',
            name: 'Front-end works',
            desception: 'Web development is the way of build, programming...',
            more: 'Read More ->'
            
        },
        {
            id: '06',
            name: 'Social Media',
            desception: 'Web development is the way of build, programming...',
            more: 'Read More ->'
            
        },
    
    ]
  return (
    <div className='bg-black font-serif'>
        <h1 className='text-lime-400 text-center'>MY SERVICES</h1>
        <marquee behavior="" direction="right"  className='text-lime-400 pt-5 text-2xl'>This are my specilizations, and am good at what i did. Hire me</marquee>
    <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 w-screen h-auto text-center justify-center  bg-black  text-white'>
     
      {myServices.map((Service)=>(
      <div key={Service.id} className='w-80 cursor-pointer appearance-auto	tablet:w-96 laptop:w-96 rounded-md h-52 space-y-2 m-20 font-mono border-2 border-white'>
        <h2>{Service.id}</h2>
        <h1>{Service.name}</h1>
        <h3>{Service.desception}</h3>
        <p>{Service.more}</p>
      </div>

))}
     
      
    </div>
    </div>
  )
}

export default Service
