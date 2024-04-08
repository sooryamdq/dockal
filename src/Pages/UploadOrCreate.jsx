import { Link } from "react-router-dom";
import PlusIcon from "../assets/PlusIcon";
import SearchIcon from "../assets/Searchicon";

const UploadOrCreate = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex gap-4 w-[80%] items-center">
          <div className="w-full border flex justify-between items-center py-2 px-4">
            <input
              type="text"
              className="bg-transparent w-full py-2 px-4 outline-none"
              placeholder="Search here"
            />
            <SearchIcon/>
          </div>
          <div className="cursor-pointer">
            <PlusIcon width="34" height="34" />
          </div>
        </div>
        <div className="flex justify-center gap-10 items-center h-[40vh]">
          <Link
            to="/upload"
            className="bg-primary p-3 text-white rounded-md text-xs "
          >
            Upload File
          </Link>

          <p>Or</p>
          <Link
            to="/studentpage"
            className="border-primary border p-3 text-black hover:text-white rounded-md text-xs hover:bg-primary"
          >
            Create Group
          </Link>
        </div>
      </div>
    </>
  );
};

export default UploadOrCreate;
