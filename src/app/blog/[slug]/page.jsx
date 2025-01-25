import React from "react";

const page = ({ params }) => {
  const { title, content } = blogs.find((blog) => blog.slug == params.slug);

  return (
    <div>
      <h1 className="text-7xl">{title}</h1>
      <p className="text-2xl">{content}</p>
    </div>
  );
};

const blogs = [
  {
    slug: "getting-started-with-next-js",
    title: "Getting Started with Next.js",
    content:
      "Next.js is a powerful React framework for building fast and scalable web applications. This guide will walk you through the initial setup and introduce you to its key features...",
  },
  {
    slug: "top-10-features-of-next-js",
    title: "Top 10 Features of Next.js",
    content:
      "Next.js offers a variety of features such as server-side rendering (SSR), static site generation (SSG), and API routes. In this post, we'll explore the top features...",
  },
  {
    slug: "optimizing-performance-in-next-js",
    title: "Optimizing Performance in Next.js",
    content:
      "Performance is key in modern web applications, and Next.js makes it easy with features like image optimization, code splitting, and server-side rendering. Let's dive into these techniques...",
  },
];
export default page;
