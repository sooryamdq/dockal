import { Link } from "react-router-dom";
import NavigationThree from "../assets/NavigationThree";
import Certificate from "./Certificate";

const CertificateGroup = () => {
  return (
    <>
      <div className="w-full lg:h-60 h-auto mb-4 card md:block hidden">
        <div
          style={{ scrollbarWidth: "none" }}
          className="flex flex-wrap justify-evenly lg:p-6 p-10 items-center lg:gap-2 gap-8 overflow-y-auto certificateCard rounded-md w-auto lg:h-60 h-auto "
        >
          <Certificate />
          <Certificate />
          <Certificate />
        </div>
        <Link className="cardlink">
          <NavigationThree width="56px" height="56px" />
        </Link>
      </div>
      <div className="w-full h-48 certificateCard p-8 h-auto mb-4 pb-6 card block md:hidden rounded-lg">
        <div className="grid grid-cols-2 gap-4 rounded-md">
          <Certificate />
          <Certificate />
          <Link className="cardlink">
            <NavigationThree width="24px" height="24px" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CertificateGroup;
