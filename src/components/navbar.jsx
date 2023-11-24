import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="p-10 bg-gradient-to-r from-slate-800 to-slate-400 text-white text-2xl">
        <Link to="/" className="mx-4 hover:underline hover:text-blue-200 underline-offset-[10px]">
          Home
        </Link>
        <Link to="/projects" className="mx-4 hover:underline hover:text-blue-200 underline-offset-[10px]">
          Projects
        </Link>
        <Link to="/about" className="mx-4 hover:underline hover:text-blue-200 underline-offset-[10px]">
          About
        </Link>
        <Link to="/contacts" className="mx-4 hover:underline hover:text-blue-200 underline-offset-[10px]">
          Contacts
        </Link>
      </nav>
    </div>
  );
}
