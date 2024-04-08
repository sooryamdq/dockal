import EditIcon from "../assets/EditIcon";
import MarkSheetImage from "../assets/Marksheet";

const MarkSheet = () => {
  return (
    <div className="relative">
      <div className="lg:w-36 lg:h-52 w-32 h-24 ">
        <MarkSheetImage />
      </div>
      <div className="absolute lg:top-0 lg:right-0 top-0 right-8">
        <EditIcon />
      </div>
    </div>
  );
};

export default MarkSheet;
