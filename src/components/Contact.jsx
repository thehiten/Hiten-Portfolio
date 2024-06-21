import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/pbygnqeb", data);
      alert("Your message has been submitted");
      reset(); // Clear the form data after successful submission
    } catch (error) {
      console.log(error);
      alert("Failed to submit the message. Please try again.");
    }
  };

  return (
    <>
      <div id="contact-us" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <h1 className="text-3xl font-bold mb-10 text-center">Contact Us</h1>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                name="name"
                required
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Your Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                name="email"
                required
              />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                {...register("message", { required: true })}
                id="message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                name="message"
                required
              ></textarea>
              {errors.message && <span>This field is required</span>}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
