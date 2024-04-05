import { Link } from "react-router-dom";
import EditIcon from "../assets/EditIcon";
import NavigationThree from "../assets/NavigationThree";
import MarkSheetImage from "../assets/Marksheet";
import Group from "../Components/Group";
import MarkSheetGroup from "../Components/MarksheetGroup";
import TemplateMarkSheet from "../Components/TemplateMarkSheet";
import RecentelySharedMarkSheet from "../Components/RecentlySharedMarkSheet";
import SavedMarkSheet from "../Components/SavedMarkSheet";
import GroupMarkSheet from "../Components/GroupMarkSheet";

const MarkSheet = () => {
  return (
    <>
    
    
      <div className="bg-gradient-to-b from-white to-[#1CAAA3] h-auto w-full px-8 pb-4">
        <div className="flex flex-col lg:items-start items-center gap-5 py-4">
          <Link to="/credential" className="font-semibold text-sm py-2 ">
            Certificates /{" "}
            <Link to="/marksheets" className="font-normal text-sm">
              Marksheets
            </Link>
          </Link>
        </div>
        <TemplateMarkSheet/>
        <RecentelySharedMarkSheet/>
        <SavedMarkSheet/>
        <GroupMarkSheet/>
      </div>
    </>
  );
};

export default MarkSheet;
