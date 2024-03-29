import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import messageIcon from "../assets/MessageIcon.png";
import NotificationIcon from "../assets/NotificationIcon.png";
import Profile from "../assets/Profile.png";

const ExploreNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve userData from local storage
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-5 w-full">
      <div className="flex lg:flex-row flex-col justify-between items-between">
        <div className="flex justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <p className="text-base font-medium text-black font-sans">DOCKAL</p>
          </Link>

          {/* Mobile Menu Icon */}
          <div className="flex gap-2 items-center lg:hidden focus:outline-none">
         
          <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
           {
            isMenuOpen ? (<svg
              className="w-6 h-6 text-black hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
        ) : (<svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>)
           }
              
          </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>

          <div className="w-full bg-transparent flex justify-end">
          <div className="w-[40%] justify-end flex flex-col gap-2 items-center mt-4 z-50 absolute top-0 right-0">
          <button className="lg:hidden self-end p-0 focus:outline-none" onClick={toggleMenu}>
            
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
         
           
          </button>
            <Link
              to="/dashboard"
              className="lg:text-sm text-xs font-normal md:text-sm text-black font-sans hover:text-primary"
            >
              Dashboard
            </Link>
            <Link
              to="/credential"
              className="lg:text-sm text-xs font-normal md:text-sm text-black font-sans hover:text-primary"
            >
              Credentials
            </Link>
            <Link
              to="/studentpage"
              className="lg:text-sm text-xs font-normal md:text-sm text-black font-sans hover:text-primary"
            >
              Students
            </Link>
            <div className="bg-primary w-8 h-8 rounded-full flex justify-center items-center relative">
              <Link to="" className="">
                <img
                  src={NotificationIcon}
                  alt="NotificationIcon"
                  className="w-3.5 h-4"
                />
              </Link>
              <div className="w-1.5 h-1.5 bg-[#FE6168] absolute top-0 right-1 rounded-full"></div>
            </div>
          <div className="bg-primary w-8 h-8 rounded-full flex justify-center items-center relative">
              <Link to="/messagescreen">
                <img
                  src={messageIcon}
                  alt="MessageIcon"
                  className="w-4 h-3.5"
                />
              </Link>
              <div className="w-1.5 h-1.5 bg-[#FE6168] absolute top-0 right-1 rounded-full"></div>
            </div>
            
            <Link to="/" className="">
              <img src={Profile} alt="profile" />
            </Link>
          </div>
          </div>
        </div>

        {/* Desktop Menu Content */}

        <div className="hidden lg:flex items-center gap-5">
          <Link
            to="/dashboard"
            className="lg:text-sm text-xs font-normal md:text-sm text-black font-sans hover:text-primary"
          >
            Dashboard
          </Link>
          <Link
            to="/credential"
            className="lg:text-sm text-xs font-normal md:text-sm text-black font-sans hover:text-primary"
          >
            Credentials
          </Link>
          <Link
            to="/studentpage"
            className="lg:text-sm text-xs font-normal md:text-sm text-black font-sans hover:text-primary"
          >
            Students
          </Link>
          <div className="bg-primary w-8 h-8 rounded-full flex justify-center items-center relative">
            <Link to="/messagescreen">
              <img src={messageIcon} alt="MessageIcon" className="w-4 h-3.5" />
            </Link>
            <div className="w-1.5 h-1.5 bg-[#FE6168] absolute top-0 right-1 rounded-full"></div>
          </div>
          <div className="bg-primary w-8 h-8 rounded-full flex justify-center items-center relative">
            <Link to="/" className="">
              <img
                src={NotificationIcon}
                alt="NotificationIcon"
                className="w-3.5 h-4"
              />
            </Link>
            <div className="w-1.5 h-1.5 bg-[#FE6168] absolute top-0 right-1 rounded-full"></div>
          </div>
         
          <Link to="/" className="">
            <img src={Profile} alt="profile" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ExploreNavbar;
