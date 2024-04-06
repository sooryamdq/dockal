import { useState } from "react";
import Logo from "../assets/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-5 w-full h-[15vh]">
      <div className="flex justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
          <p className="lg:text-base text-sm font-medium text-black font-sans">
            DOCKAL
          </p>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="bg-primary lg:text-base text-sm font-normal text-white lg:p-2.5 p-1.5 rounded"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
