
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-primary">
              Portfolio
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="nav-link text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/blog" className="nav-link text-gray-700 hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/projects" className="nav-link text-gray-700 hover:text-primary transition-colors">
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
