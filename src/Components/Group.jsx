import GroupsIcon from "../assets/GroupsIcon";

const Group = ({ groupname }) => {
  console.log(groupname);
  return (
    <>
      <div className="relative groupsbanner lg:w-72 lg:h-44 w-40 h-24 mt-2 lg:mt-0 lg:mb-8 flex justify-center items-center group">
        <p className="font-semibold lg:text-base text-xs text-white">
          {groupname}
        </p>
        <div className="groupicon">
          <GroupsIcon />
        </div>
      </div>
    </>
  );
};

export default Group;
