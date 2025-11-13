import React from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    toast.success("Your Subscribe Successfull!");
    e.target.reset();
  };
  return (
    <section className="py-16 bg-[#fcf8ee] dark:bg-[#1e2939]  text-center ">
      <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
        Subscribe to Our Newsletter
      </h2>
      <p className="mb-8 text-gray-700 dark:text-gray-400 ">
        Stay updated with upcoming social events and community news.
      </p>
      <form
        onSubmit={handleSubscribe}
        className="flex justify-center max-w-md mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          required
          className="w-full p-3 rounded-l-lg border text-black dark:text-gray-200 border-black dark:border-gray-200 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-[#00705f] cursor-pointer hover:bg-[#015c4e] font-semibold text-white px-6 rounded-r-lg"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
