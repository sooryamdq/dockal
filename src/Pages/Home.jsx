import { Link } from "react-router-dom";
import Paragraph from "../Components/Paragraph";

const Home = () => {
  return (
   
    <div>
      <div className="flex flex-col justify-center items-center w-full h-[70vh]">
        <div className="w-4/5  h-full ">
          <div className="bg-image bg-gradient-to-r from-rgba(0,0,0,0.8) via-rgba(0,0,0,0.4) to-rgba(0,0,0,0.1) xs:w-4/5 w-full h-full  text-white rounded-md p-5 flex flex-col justify-between items-start ">
            <div>
              <Paragraph
                text="Empower your students with digital certificates and marksheets"
                className="font-bold lg:text-5xl text-left  md:text-2xl text-xs"
              />

              <Paragraph
                className="font-normal lg:text-base text-left lg:mt-0 mt-2 md:text-2xl text-xs"
                text=" Simplify the process of issuing and verifying digital
                credentials. No more lost certificates or delays in
                distribution."
              />
            </div>
            <Link
              to="/signup"
              className="font-semibold lg:text-base md:text-2xl text-xs bg-primary  text-left lg:p-2.5 p-1.5 rounded-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-auto">
        <div className="flex justify-around xs:w-4/5 w-full   sm:w-auto pt-2 sm:pt-5">
          <Link className="font-noraml text-sm ">Privacy policy</Link>
          <Link className="font-noraml text-sm ">Terms of use</Link>
        </div>
        <div className="flex justify-center items-end h-full lg:pt-0 pt-5 ">
          <Link className="font-noraml text-sm ">© 2024 copyrights</Link>
        </div>
      </div>
      </div>
  );
};

export default Home;
