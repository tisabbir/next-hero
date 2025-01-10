"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const pathName = usePathname();
    const links = [
        {
            title : "About",
            path : "/about"
        },
        {
            title : "Services",
            path : "/services"
        },
        {
            title : "Contact",
            path : "/contact"
        }
    ]
    return (
        <div className='bg-red-500 text-white flex justify-between px-6'>
            <Link className='text-xl' href="/">Next Hero</Link>
           <ul className='flex justify-between gap-4'>
            {
                links.map((link) => <Link className={`${pathName === link.path && "text-black"}`} key={link.path} href={link.path}>{link.title}</Link>)
            }
           </ul>
        </div>
    );
};

export default Navbar;