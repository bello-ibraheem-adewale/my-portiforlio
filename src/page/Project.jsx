import React from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
    const projects = [
        {
            id: '01',
            title: 'Calculator',
            description: 'A basic calculator application with essential mathematical functions.',
            link: 'https://calculator-rzms.vercel.app/', // Update link path as needed
        },
        {
            id: '02',
            title: 'Tic Tac Toe Game',
            description: 'A two-player Tic Tac Toe game with a responsive layout.',
            link: 'https://tik-tac-toe-game-phi.vercel.app/', // Update link path as needed
        },
        {
            id: '03',
            title: 'E-Commerce Website',
            description: 'An e-commerce platform with product listings, shopping cart, and checkout functionality.',
            link: 'https://e-commerce-website-86kx.vercel.app/', // Update link path as needed
        },
        {
            id: '04',
            title: 'Facebook Login Page',
            description: 'A Facebook login page clone with modern design and animations.',
            link: 'https://face-book-login-page-gray.vercel.app/', // Update link path as needed
        },
        {
            id: '05',
            title: 'Portfolio Website',
            description: 'My personal portfolio showcasing my skills and projects.',
            link: 'https://ibraheem-portiforlio.vercel.app/', // Update link path as needed
        }
    ];

    return (
        <div className='w-full min-h-screen bg-black text-white font-serif p-6'>
            <h1 className='text-lime-400 text-center text-3xl mb-8'>MY PROJECTS</h1>
            
            <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8 text-center justify-center'>
                {projects.map((project) => (
                    <div 
                        key={project.id} 
                        className='p-4 rounded-md border-2 border-lime-400 transform hover:scale-105 transition-transform m-auto w-64 tablet:w-80 laptop:w-96 space-y-4'
                    >
                        <h2 className='text-lg tablet:text-xl laptop:text-2xl'>{project.title}</h2>
                        <p className='text-sm tablet:text-base laptop:text-lg'>{project.description}</p>
                        <Link 
                            to={project.link} 
                            className='bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 rounded-full text-sm text-white transition-transform hover:scale-105'
                        >
                            View Project
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
