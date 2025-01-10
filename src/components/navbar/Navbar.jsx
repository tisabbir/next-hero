import Link from 'next/link';
import React from 'react';

const Navbar = () => {
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
                links.map((link) => <Link key={link.path} href={link.path}>{link.title}</Link>)
            }
           </ul>
        </div>
    );
};

export default Navbar;