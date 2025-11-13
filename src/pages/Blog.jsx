import React, { use } from "react";
import { AuthContext } from "./Auth/AuthContext";
import Loading from "./Private/Loading";

const blogPosts = [
  {
    id: 1,
    title: "Tree Plantation Drive in Hossainpur",
    date: "2025-11-01",
    description: "Our volunteers planted over 500 trees in the Hossainpur area...",
  },
  {
    id: 2,
    title: "Road Cleaning Campaign in Mirpur 10",
    date: "2025-10-20",
    description: "We successfully cleaned streets and raised awareness about littering...",
  },
  {
    id: 3,
    title: "Donation Drive for Local Orphanage",
    date: "2025-10-10",
    description: "Collected and distributed clothes, books, and essentials for children...",
  },
];

const Blog = () => {
  const {loading}=use(AuthContext)
  if(loading){
    return <Loading></Loading>
  }
  return (
    <section className="px-4 py-16 max-w-6xl mx-auto text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold text-[#02705e] mb-10">Our Blog</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{post.date}</p>
            <p className="text-gray-700 dark:text-gray-300">{post.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
