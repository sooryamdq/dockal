import { Link } from "react-router-dom";
import MarkSheet from "./MarkSheet";
import NavigationThree from "../assets/NavigationThree";

const MarkSheetGroup = () => {
  return (
    <>
      <div className="w-full lg:h-60 h-auto mb-4 card md:block hidden">
        <div className="flex flex-wrap justify-evenly p-4 items-center gap-1 certificateCard w-auto lg:h-60 h-auto ">
          <MarkSheet />
          <MarkSheet />
          <MarkSheet />
          <MarkSheet />
          <MarkSheet />
          <Link className="cardlink">
            <NavigationThree width="56px" height="56px" />
          </Link>
        </div>
      </div>

      <div className="w-full h-48  mb-4 certificateCard p-4 card md:hidden block">
        <div className="flex flex-wrap justify-evenly  w-auto ">
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
