
  
import React, { useRef } from "react";
import Swal from "sweetalert2";

const ContactMe = () => {
  const form = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "00262e11-bd12-471c-9dfe-e2f890bd4525");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent!",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Message not sent. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 text-gray-900">
      <section className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold mb-2 text-center text-gray-800">Get in Touch</h1>
        <p className="text-center text-gray-600 mb-6">Feel free to reach out by filling in the form below!</p>

        <form ref={form} onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="first_name" 
                id="firstName"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="last_name" 
                id="lastName"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email" 
              id="email"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message" 
              id="message"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-24 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactMe;
