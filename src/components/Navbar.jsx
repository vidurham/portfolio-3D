import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <nav className="container mx-auto flex justify-end text-lg gap-7 font-medium">
        <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-600 p-1" : "text-black bg-white rounded p-1" }>
          Home
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600 p-1" : "text-black bg-white rounded p-1" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600 p-1" : "text-black bg-white rounded p-1"}>
          Projects
        </NavLink>
        <NavLink to='/gallery' className={({ isActive }) => isActive ? "text-blue-600 p-1" : "text-black bg-white rounded p-1"}>
          Gallery
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
