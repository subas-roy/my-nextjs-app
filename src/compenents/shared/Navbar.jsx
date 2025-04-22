'use client'; // This component is a client component, which means it can use hooks and state
import { usePathname } from 'next/navigation'; // Importing usePathname from Next.js for routing
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const pathname = usePathname(); // Getting the current pathname using usePathname
  // console.log(pathname);
  return (
    <nav className="bg-gray-700 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MySite
        </Link>
        <div className="space-x-6">
          <Link
            href="/about"
            className={
              pathname === '/about'
                ? 'text-blue-700 underline'
                : 'hover:underline'
            }
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={
              pathname === '/contact'
                ? 'text-blue-700 underline'
                : 'hover:underline'
            }
          >
            Contact Us
          </Link>
          <Link
            href="/dashboard"
            className={
              pathname === '/dashboard'
                ? 'text-blue-700 underline'
                : 'hover:underline'
            }
          >
            Dashboard
          </Link>
          <Link
            href="/register"
            className={
              pathname === '/register'
                ? 'text-blue-700 underline'
                : 'hover:underline'
            }
          >
            Register
          </Link>
          <Link
            href="/login"
            className={
              pathname === '/login'
                ? 'text-blue-700 underline'
                : 'hover:underline'
            }
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
