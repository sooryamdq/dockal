import NavigationThree from "../assets/NavigationThree"
import Group from "./Group"
import { Link } from 'react-router-dom';


const GroupsCertificate = ()=>{
    return(
        <>
        <div className="flex flex-col lg:items-start items-center gap-5 py-4">
        <p className="font-semibold text-sm text-left">Groups</p>
      </div>
      <div className="w-full lg:h-60 h-auto card md:block hidden">
        <div className="flex justify-evenly p-6  items-center lg:gap-2 gap-8 certificateCard rounded-md w-auto lg:h-60 h-auto relative">
          <Group groupname={"Degree Certificates"} />
          <Group groupname={"Diploma Certificates"} />
          <Group groupname={"Course Certificates"} />
          <Link className="cardlink">
            <NavigationThree width="56px" height="56px"/>
          </Link>
        </div>
      </div>
      <div className="w-full lg:h-60 h-auto card block md:hidden">
        <div className="grid grid-cols-2 gap-4 p-4 certificateCard rounded-md w-auto h-auto relative">
          <Group groupname={"Diploma Certificates"} />
          <Group groupname={"Course Certificates"} />
          <Group groupname={"Degree Certificates"} />
          <Group groupname={"Course Certificates"} />
          <Link className="cardlink">
            <NavigationThree width="24px" height="24px"/>
          </Link>
        </div>
      </div>
        </>
    )
}

export default GroupsCertificate