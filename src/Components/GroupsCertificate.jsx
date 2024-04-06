import NavigationThree from "../assets/NavigationThree";
import Group from "./Group";
import { Link } from "react-router-dom";

const GroupsCertificate = () => {
  return (
    <>
      <div className="flex flex-col items-start  gap-5 py-4">
        <p className="font-semibold text-sm text-left">Groups</p>
      </div>
      <div className="w-full lg:h-60 h-auto card md:block hidden">
        <div
          style={{ scrollbarWidth: "none" }}
          className="flex flex-wrap justify-evenly lg:p-8 p-6 overflow-y-auto items-center lg:gap-2 gap-8 certificateCard rounded-md w-auto lg:h-60 h-auto relative"
        >
          <Group groupname={"Degree Certificates"} />
          <Group groupname={"Diploma Certificates"} />
          <Group groupname={"Course Certificates"} />
        </div>
        <Link className="cardlink">
          <NavigationThree width="56px" height="56px" />
        </Link>
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

export default GroupsCertificate;
