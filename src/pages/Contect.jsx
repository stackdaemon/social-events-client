import React, { use, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "./Auth/AuthContext";
import Loading from "./Private/Loading";

const Contect = () => {
  const {loading}=use(AuthContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your backend API call here
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };
  if(loading){
    return <Loading></Loading>
  }

  return (
    <section className="px-4 py-16 max-w-3xl mx-auto text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold text-[#02705e] mb-6">Contact Us</h1>
      <p className="mb-6">
        Have any questions or suggestions? Feel free to reach out to us using the form below. 
        We’d love to hear from you!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#02705e] dark:bg-gray-800 dark:text-gray-200"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#02705e] dark:bg-gray-800 dark:text-gray-200"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#02705e] dark:bg-gray-800 dark:text-gray-200"
          rows={5}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-[#02705e] text-white font-semibold rounded-md hover:bg-[#045e46] transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contect;
