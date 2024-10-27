import React, { useState } from 'react';

const Service = () => {

    const myServices = [
        {
            id: '01',
            name: 'Web Design',
            description: 'Creating visually appealing and user-friendly web designs that are tailored to client specifications.',
        },
        {
            id: '02',
            name: 'Graphic Design',
            description: 'Designing engaging visuals, logos, and branding materials to make businesses stand out.',
        },
        {
            id: '03',
            name: 'Freelancing',
            description: 'Providing flexible and professional freelancing services to meet your project needs.',
        },
        {
            id: '04',
            name: 'Responsive UI',
            description: 'Building responsive interfaces that adapt seamlessly to any device or screen size.',
        },
        {
            id: '05',
            name: 'Front-End Development',
            description: 'Developing interactive, efficient, and accessible front-end applications using modern tools and frameworks.',
        },
        {
            id: '06',
            name: 'Social Media Management',
            description: 'Managing social media accounts to enhance brand awareness and engagement.',
        },
    ];

    return (
        <div className='w-full min-h-screen bg-black font-serif p-4'>
            <h1 className='text-lime-400 text-center text-3xl'>MY SERVICES</h1>
            <marquee behavior="" direction="left" className='text-lime-400 pt-5 text-lg md:text-2xl'>
                These are my specializations, and I'm good at what I do. Hire me.
            </marquee>
            
            <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8 p-6 text-center justify-center text-white'>
                {myServices.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
}

const ServiceCard = ({ service }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div 
            className='cursor-pointer p-4 rounded-md h-52 space-y-2 w-64 tablet:w-80 laptop:w-96 border-2 border-lime-400 transform hover:scale-105 transition-transform m-auto'
        >
            <h2 className='text-lg tablet:text-xl laptop:text-2xl'>{service.id}</h2>
            <h1 className='text-lg tablet:text-xl laptop:text-2xl'>{service.name}</h1>
            <h3 className='text-sm tablet:text-base laptop:text-lg'>
                {isExpanded ? service.description : `${service.description.substring(0, 50)}...`}
            </h3>
            <p className='text-sm text-lime-300 cursor-pointer' onClick={toggleReadMore}>
                {isExpanded ? 'Read Less' : 'Read More ->'}
            </p>
        </div>
    );
};

export default Service;
