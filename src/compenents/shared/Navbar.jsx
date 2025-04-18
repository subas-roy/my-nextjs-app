import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          MySite
        </a>
        <div className="space-x-6">
          <a href="/about" className="hover:text-gra-200">
            About Us
          </a>
          <a href="/contact" className="hover:text-gra-200">
            Contact Us
          </a>
          <a href="/register" className="hover:text-gra-200">
            Register
          </a>
          <a href="/login" className="hover:text-gra-200">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
