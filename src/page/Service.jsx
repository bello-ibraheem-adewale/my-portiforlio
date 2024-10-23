import React from 'react'
import { TbMarquee } from 'react-icons/tb'

const Service = () => {

    const myServices = [
        {
            id: '01',
            name: 'Web Design',
            desception: 'Web development is the way of building, programming...',
            more: 'Read More ->'
        },
        {
            id: '02',
            name: 'Graphic Design',
            desception: 'Web development is the way of building, programming...',
            more: 'Read More ->'
        },
        {
            id: '03',
            name: 'Freelancer',
            desception: 'Web development is the way of building, programming...',
            more: 'Read More ->'
        },
        {
            id: '04',
            name: 'Responsive UI',
            desception: 'Web development is the way of building, programming...',
            more: 'Read More ->'
        },
        {
            id: '05',
            name: 'Front-end Work',
            desception: 'Web development is the way of building, programming...',
            more: 'Read More ->'
        },
        {
            id: '06',
            name: 'Social Media',
            desception: 'Web development is the way of building, programming...',
            more: 'Read More ->'
        },
    ];

    return (
        <div className='w-full min-h-screen bg-black font-serif p-4'>
            <h1 className='text-lime-400 text-center text-3xl'>MY SERVICES</h1>
            <marquee behavior="" direction="right" className='text-lime-400 pt-5 text-lg md:text-2xl'>
                These are my specializations, and I'm good at what I do. Hire me.
            </marquee>
            
            <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8 p-6 text-center justify-center text-white'>
                {myServices.map((service) => (
                    <div 
                        key={service.id} 
                        className='cursor-pointer p-4 rounded-md h-52 space-y-2 w-64 tablet:w-80 laptop:w-96 border-2 border-lime-400 transform hover:scale-105 transition-transform m-auto'
                    >
                        <h2 className='text-lg tablet:text-xl laptop:text-2xl'>{service.id}</h2>
                        <h1 className='text-lg tablet:text-xl laptop:text-2xl'>{service.name}</h1>
                        <h3 className='text-sm tablet:text-base laptop:text-lg'>{service.desception}</h3>
                        <p className='text-sm text-lime-300'>{service.more}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Service;
