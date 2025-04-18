import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">My Sidebar</h1>
      <nav>
        <Link href="/" className="block px-4 py-2 rounded hover:bg-gray-700">
          Home
        </Link>
        <Link
          href="/profile"
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          Profile
        </Link>
        <Link
          href="/settings"
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
