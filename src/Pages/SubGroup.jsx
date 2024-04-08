import ExploreNavbar from "../Components/ExploreNavbar";
import Group from "../Components/Group";
import { Link, useLocation } from "react-router-dom";
import PlusIcon from "../assets/PlusIcon";
import { useSelector } from "react-redux";
import SearchIcon from "../assets/Searchicon";

const SubGroup = () => {
  const studentGroups = useSelector((state) => state.studentGroups);
  console.log("gp", studentGroups);

  return (
    <>
      <div className="w-full ">
        <div className="w-full flex flex-col justify-center items-center ">
          <div className="flex gap-4 w-[80%] items-center">
            <div className="w-full border flex justify-between items-center py-2 px-4">
              <input
                type="text"
                className="bg-transparent w-full py-2 px-4 outline-none"
                placeholder="Search here"
              />
             <SearchIcon/>
            </div>
            <div onClick={() => handleOpen()} className="cursor-pointer">
              <PlusIcon width="34" height="34" />
            </div>
          </div>
          <div className="flex flex-wrap gap-8 w-[80%] py-10">
            {studentGroups.map((item) =>
              item.subgroups.map((item) => (
                <Link to="/uploadOrCreate">
                  <Group groupname={item.name} key={item.id} />
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubGroup;
