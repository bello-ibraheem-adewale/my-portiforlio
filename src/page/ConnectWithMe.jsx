import React, { useState } from 'react';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const ConnectWithMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to an API)
    console.log(formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full min-h-screen bg-gray-800 text-white p-10 flex flex-col items-center">
      <h2 className="text-3xl mb-6">Connect with Me</h2>
      <div className="flex gap-8 mb-10">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-pink-500 transition-colors">
          <FaGithubSquare />
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-blue-500 transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-blue-400 transition-colors">
          <FaTwitterSquare />
        </a>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 rounded bg-gray-700 border border-gray-600"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 rounded bg-gray-700 border border-gray-600"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="p-2 rounded bg-gray-700 border border-gray-600"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 rounded-full text-white transition-transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ConnectWithMe;
