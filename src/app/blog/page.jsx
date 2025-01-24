import React from "react";

const page = () => {
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

  return (
    <div>
      <div className="space-x-5 flex gap-4">
      {blogs.map((blog) => (
        <div key={blog.slug}>
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <p>{blog.content}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default page;
