"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Categories",
      path: "/categories",
    },
  ];

  const handleLogin = () => {
    router.push("/login");
  };

  if (pathName.includes("dashboard"))
    return <nav className="bg-green-300">This is dashboard nav</nav>;
  return (
    <div className="bg-red-500 text-white flex justify-between px-6 py-6">
      <Link className="text-xl" href="/">
        Next Hero
      </Link>
      <ul className="flex justify-between gap-4">
        {links.map((link) => (
          <Link
            className={`${pathName === link.path && "text-black"}`}
            key={link.path}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </ul>
      <button
        onClick={handleLogin}
        className="bg-white text-black px-4 rounded-lg"
      >
        Login
      </button>
    </div>
  );
};

export default Navbar;
