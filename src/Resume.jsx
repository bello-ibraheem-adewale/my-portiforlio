import React from 'react';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-10 flex flex-col items-center">
      <h2 className="text-3xl mb-6">My Resume</h2>
      <p className="text-lg mb-4">I'm Bello Ibraheem Adewale, a Frontend Developer with over 3 years of experience.</p>

      {/* Skills Section */}
      <div className="w-full max-w-2xl mb-8">
        <h3 className="text-2xl mb-4">Skills</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>HTML, CSS, and JavaScript</li>
          <li>React.js and Next.js</li>
          <li>Responsive Web Design</li>
          {/* <li>RESTful APIs</li> */}
          <li>Version Control (Git)</li>
        </ul>
      </div>

      {/* Experience Section */}
      <div className="w-full max-w-2xl mb-8">
        <h3 className="text-2xl mb-4">Experience</h3>
        <div className="mb-4">
          <h4 className="font-semibold">Applying Intenship student in Prodigy InfoTech </h4>
          
          <p>Developed and maintained web applications using React.js and Tailwindcss</p>
        </div>
        {/* <div className="mb-4">
          <h4 className="font-semibold">Junior Developer at ABC Corp</h4>
          <p>Jan 2019 - Dec 2020</p>
          <p>Assisted in building responsive websites and improving user experience.</p>
        </div> */}
      </div>

      {/* Education Section */}
      <div className="w-full max-w-2xl mb-8">
        <h3 className="text-2xl mb-4">Education</h3>
        <div className="mb-4">
          <h4 className="font-semibold">undergraduate Bsc. Plant Biology student</h4>
          <p>University of unilorin</p>
        </div>
      </div>

      {/* Download Resume and Social Links */}
      <div className="flex flex-col items-center space-y-4">
        <a href="/path/to/your-resume.pdf" download className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 rounded-full text-white transition-transform hover:scale-105">
          Download My Resume
        </a>
        <div className="flex gap-8 mt-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-pink-500 transition-colors">
            <FaGithubSquare />
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-blue-500 transition-colors">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
