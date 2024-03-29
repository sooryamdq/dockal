import NavigationThree from "../assets/NavigationThree";
import Group from "./Group"
import { Link } from 'react-router-dom';


const GroupMarkSheet = ()=>{
    return(
        <>
        <div className="flex flex-col lg:items-start items-center gap-5 py-4">
        <p className="font-semibold text-sm text-left">Groups</p>
      </div>
      <div className="w-full lg:h-60 h-auto card md:block hidden">
        <div className="flex flex-wrap justify-evenly p-6 lg:items-center gap-2  certificateCard rounded-md w-auto lg:h-60 h-auto relative">
          <Group groupname={"ECE"} />
          <Group groupname={"MECH"} />
          <Group groupname={"EEE"} />
          <Link className="cardlink">
            <NavigationThree />
          </Link>
        </div>
      </div>
      <div className="w-full lg:h-60 h-auto card block md:hidden">
        <div className="grid grid-cols-2 gap-4 p-5 certificateCard rounded-md w-auto lg:h-60 h-auto relative">
          <Group groupname={"ECE"} />
          <Group groupname={"MECH"} />
          <Group groupname={"EEE"} />
          <Link className="cardlink">
            <NavigationThree />
          </Link>
        </div>
      </div>
        </>
    )
}


export default GroupMarkSheet