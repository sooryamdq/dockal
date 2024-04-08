import NavigationThree from "../assets/NavigationThree";
import Group from "./Group";
import { Link } from "react-router-dom";

const GroupsCertificate = () => {
  return (
    <>
      <div className="flex flex-col items-start  gap-5 py-4">
        <p className="font-semibold text-sm text-left">Groups</p>
      </div>
      <div className="w-full lg:h-60 h-auto mb-4 card md:block hidden">
        <div
          className="flex flex-wrap justify-evenly lg:p-8 p-10 items-center lg:gap-2 gap-8  certificateCard rounded-md w-auto lg:h-60 h-auto "
        >
         <Group groupname={"ECE"}/>
         <Group groupname={"MECH"}/>
         <Group groupname={"EEE"}/>
        </div>
        <Link className="cardlink">
          <NavigationThree />
        </Link>
      </div>
      <div className="w-full h-48 p-8 h-auto card certificateCard block md:hidden">
        <div className="flex gap-2 rounded-md relative">
          <Group groupname={"Diploma Certificates"} />
          <Group groupname={"Course Certificates"} />
        </div>
        <Link className="cardlink">
          <NavigationThree/>
        </Link>
      </div>
    </>
  );
};

export default GroupsCertificate;
