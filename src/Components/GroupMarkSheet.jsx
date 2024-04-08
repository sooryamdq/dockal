import { useState } from "react";
import NavigationThree from "../assets/NavigationThree";
import Group from "./Group";
import { Link } from "react-router-dom";

const GroupMarkSheet = () => {
  return (
    <>
      <div className="flex flex-col lg:items-start gap-5 py-4">
        <p className="font-semibold text-sm text-left">Groups</p>
      </div>
      <div className="w-full lg:h-60 h-auto card md:block hidden ">
        <div
          
          className="flex flex-wrap justify-evenly  lg:p-8 p-6 lg:items-center  gap-2 certificateCard rounded-md w-auto lg:h-60 h-auto relative"
        >
          <Group groupname={"ECE"} />
          <Group groupname={"MECH"} />
          <Group groupname={"EEE"} />
        </div>
        <Link className="cardlink">
          <NavigationThree width="56px" height="56px" />
        </Link>
        {/* {!buttonClicked && ( // Only render the button if it hasn't been clicked
        <div className="morebtn bg-primary  text-xs font-normal text-white lg:p-2.5 p-1.5 rounded">
          <button onClick={toggleShowMore}>More...</button>
        </div>
      )} */}
      </div>
      <div className="w-full h-48 p-8 h-auto card certificateCard block md:hidden">
        <div className="flex gap-2 rounded-md relative">
          <Group groupname={"Diploma Certificates"} />
          <Group groupname={"Course Certificates"} />
        </div>
        <Link className="cardlink">
          <NavigationThree width="24px" height="24px" />
        </Link>
      </div>
    </>
  );
};

export default GroupMarkSheet;
