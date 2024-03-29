import EditIcon from "../assets/EditIcon"
import MarkSheetImage from "../assets/Marksheet"


const MarkSheet = ()=>{
    return(
        <div className="relative">
        <div className="md:w-36 md:h-52 w-32 h-48 h-auto mt-2">
          <MarkSheetImage />
        </div>
        <div className="absolute top-2 -right-0">
          <EditIcon />
        </div>
      </div>
    )
}

export default MarkSheet