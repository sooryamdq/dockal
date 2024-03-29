import GroupsIcon from "../assets/GroupsIcon"


const Group = ({groupname})=>{
    return(
        <>
         <div className="relative groupsbanner md:w-72 md:h-44 w-32 h-24 mt-2 lg:mt-0 flex justify-center items-center">
        <p className="font-semibold text-xs text-white">{groupname}</p>
         <div className="absolute lg:-top-6 lg:right-28 -top-4">
          <GroupsIcon/>
         </div>
       </div>
      
        </>
       
    )
}

export default Group