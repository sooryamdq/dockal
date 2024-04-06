import MarkSheet from "./MarkSheet"
import MarkSheetGroup from "./MarksheetGroup"


const RecentelySharedMarkSheet = ()=>{
    return(
        <>
        <div className="flex flex-col items-start gap-5 py-4">
        <p className="font-semibold text-sm text-left">Recently shared</p>
      </div>
      <MarkSheetGroup/>
        </>
    )
}

export default RecentelySharedMarkSheet