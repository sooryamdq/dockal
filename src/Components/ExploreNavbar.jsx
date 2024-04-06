import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo";
import messageIcon from "../assets/MessageIcon.png";
import NotificationIcon from "../assets/NotificationIcon.png";
import Profile from "../assets/Profile.png";
import DashboardIcon from "../assets/Dashboard";
import CredentialsIcon from "../assets/Crendentials";
import StudentsIcon from "../assets/Students";

const ExploreNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);

  const shouldShowSignInButton = ["/", "/login", "/signup"].includes(
    location.pathname
  );

  useEffect(() => {
    // Retrieve userData from local storage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // document.body.style.backgroundColor = isMenuOpen ? '':'rgba(235, 235, 235, 0.95)';
    // document.body.style.backdropFilter = 'blur(10px)'
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

          {shouldShowSignInButton ? (
            <div className="lg:hidden flex items-center gap-3">
              <Link
                to="/login"
                className="bg-primary lg:text-base text-sm font-normal text-white lg:p-2.5 p-1.5 rounded"
              >
                Sign In
              </Link>
            </div>
          ) : (
            <div className="flex gap-2 items-center lg:hidden focus:outline-none">
              <button
                className="lg:hidden focus:outline-none"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <svg
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
                ) : (
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
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Content */}
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="w-full bg-transparent flex justify-start">
            <div className="w-[40%]  flex flex-col gap-2 p-4  bg-primary text-white  z-50 absolute top-0 right-0">
              <button
                className="lg:hidden self-end p-0 focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6 "
                  fill="#ffffff"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="#ffffff"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <Link
                to="/"
                className="lg:text-sm text-xs font-normal md:text-sm  font-sans flex items-center gap-2"
              >
                <img src={Profile} alt="profile" width="30" height="30" />
                <span>Profile</span>
              </Link>
              <Link
                to="/dashboard"
                className="lg:text-sm text-xs font-normal md:text-sm  font-sans  flex items-center gap-2"
              >
                <span className="">
                  <DashboardIcon />
                </span>
                <span>Dashboard</span>
              </Link>
              <Link
                to="/credential"
                className="lg:text-sm text-xs font-normal md:text-sm  font-sans  flex items-center  gap-2"
              >
                <span className="">
                  <CredentialsIcon />
                </span>
                <span className=""> Credentials</span>
              </Link>
              <Link
                to="/studentpage"
                className="lg:text-sm text-xs font-normal md:text-sm  font-sans  flex items-center gap-2"
              >
                <span>
                  <StudentsIcon />
                </span>
                <span>Students</span>
              </Link>

              <Link
                to=""
                className="bg-primary  rounded-full relative lg:text-sm text-xs font-normal md:text-sm  font-sans  flex items-center gap-4"
              >
                <img
                  src={NotificationIcon}
                  alt="NotificationIcon"
                  style={{ width: "24", height: "24" }}
                />
                <span className="text-center">Notification</span>
                <div className="w-1.5 h-1.5 bg-[#FE6168] absolute top-0 left-0 rounded-full"></div>
              </Link>

              <Link
                to="/messagescreen"
                className="bg-primary  rounded-full relative lg:text-sm text-xs font-normal md:text-sm  font-sans  flex items-center gap-4"
              >
                <img
                  src={messageIcon}
                  alt="MessageIcon"
                  style={{ width: "24", height: "24" }}
                />
                <span>Message</span>
                <div className="w-1.5 h-1.5 bg-[#FE6168] absolute top-0 left-0  rounded-full"></div>
              </Link>
              <div className="flex items-center gap-3"></div>
            </div>
          </div>
        </div>

        {/* Desktop Menu Content */}

        <div className="hidden lg:flex items-center gap-5">
          {shouldShowSignInButton ? (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="bg-primary lg:text-base text-sm font-normal text-white lg:p-2.5 p-1.5 rounded"
              >
                Sign In
              </Link>
            </div>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="lg:text-sm text-xs font-normal md:text-sm  font-sans hover:text-primary"
              >
                Dashboard
              </Link>
              <Link
                to="/credential"
                className="lg:text-sm text-xs font-normal md:text-sm  font-sans hover:text-primary"
              >
                Credentials
              </Link>
              <Link
                to="/studentpage"
                className="lg:text-sm text-xs font-normal md:text-sm  font-sans hover:text-primary"
              >
                Students
              </Link>
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default ExploreNavbar;
