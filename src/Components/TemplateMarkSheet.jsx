
import MarkSheetGroup from "./MarksheetGroup"


const TemplateMarkSheet = ()=>{
    return(
        <>
        <div className="flex flex-col lg:items-start items-center gap-5 py-4">
        <p className="font-semibold text-sm text-left">Templates</p>
        </div>
       
         <MarkSheetGroup/>
         </>
    )
}

export default TemplateMarkSheet