import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="p-4 bg-gradient-to-r from-slate-800 to-slate-400 text-white text-xl">
        <Link to="/" className="mx-2 hover:underline">
          Home
        </Link>
        <Link to="/projects" className="mx-2 hover:underline">
          Projects
        </Link>
        <Link to="/about" className="mx-2 hover:underline">
          About
        </Link>
        <Link to="/contacts" className="mx-2 hover:underline">
          Contacts
        </Link>
      </nav>
    </div>
  );
}
