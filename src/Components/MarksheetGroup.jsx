import { Link } from "react-router-dom";
import MarkSheet from "./MarkSheet";
import NavigationThree from "../assets/NavigationThree";

const MarkSheetGroup = () => {
  return (
    <>
      <div className="w-full lg:h-60 h-auto mb-4 card md:block hidden">
        <div className="flex flex-wrap justify-evenly p-6 items-center gap-2 certificateCard w-auto lg:h-60 h-auto ">
          <MarkSheet />
          <MarkSheet />
          <MarkSheet />
          <MarkSheet />
          <MarkSheet />
          <Link className="cardlink">
            <NavigationThree />
          </Link>
        </div>
      </div>
      
      <div className="w-full lg:h-60 h-auto mb-4 card md:hidden block">
        <div className="grid grid-cols-2 gap-4 p-5 certificateCard w-auto lg:h-60 h-auto ">
          <MarkSheet />
          <MarkSheet />
          <MarkSheet />
          <MarkSheet />
          <MarkSheet />
          <Link className="cardlink">
            <NavigationThree width="24px" height="24px" />
          </Link>
        </div>
      </div>
      
    </>
  );
};

export default MarkSheetGroup;
