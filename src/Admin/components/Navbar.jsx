import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <NavLink className="text-xl font-bold text-gray-800" to="/">
            Admin Panel
          </NavLink>

          {/* Button Mobile */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Menu */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-6`}
          >
            <NavLink className="block py-2 px-4 text-gray-700 hover:text-blue-500" to="/dashboard">
              Dashboard
            </NavLink>
            <NavLink className="block py-2 px-4 text-gray-700 hover:text-blue-500" to="/produk">
              Manajemen Produk
            </NavLink>
            <NavLink className="block py-2 px-4 text-gray-700 hover:text-blue-500" to="/artikel">
              Manajemen Artikel
            </NavLink>
            <NavLink className="block py-2 px-4 text-gray-700 hover:text-blue-500" to="/karyawan">
              Manajemen Karyawan
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
