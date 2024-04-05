import { useState } from "react";
import CreateGroupModal from "../Components/CreateGroupModal";
import Group from "../Components/Group";
import PlusIcon from "../assets/PlusIcon";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addGroup, addSubgroup } from "../Redux/StudentgropSlice";



const StudentManagement = () => {

  const dispatch = useDispatch();
  const [groupName, setGroupName] = useState("");
  const [subgroupName, setSubgroupName] = useState("");
  const studentGroups = useSelector(state => state.studentGroups);
  console.log("gp",studentGroups)


  const handleCreateGroup = () => {
    if (groupName.trim() !== '') {
      const newGroup = {
        id: Date.now(), // Use timestamp as ID
        name: groupName.trim(),
        subgroups: [],
      };
      dispatch(addGroup(newGroup));
      setGroupName('');
      handleCreateSubgroup(newGroup.id);
    }
  };

  const handleCreateSubgroup = (groupId) => {
    if (subgroupName.trim() !== '') {
      const newSubgroup = {
        id: Date.now(), // Use timestamp as ID
        name: subgroupName.trim(),
      };
      dispatch(addSubgroup({ groupId, subgroup: newSubgroup }));
      setSubgroupName('');
    }
  };


  // const handleCreateGroup = () => {
  //   // Check if the group name is not empty
  //   if (groupName.trim() !== "") {
  //     // Create a new group object with an ID, name, and an empty array for subgroups
  //     const newGroup = {
  //       id: studentGroups.length + 1,
  //       name: groupName.trim(),
  //       subgroups: [],
  //     };

  //     // Update the list of student groups by adding the new group
  //     setStudentGroups([...studentGroups, newGroup]);

  //     // Reset the group name to clear the input field
  //     setGroupName("");
  //     handleCreateSubgroup(newGroup.id);
  //   }
  // };

  // const handleCreateSubgroup = (groupId) => {
  //   // Check if the subgroup name is not empty
  //   if (subgroupName.trim() !== "") {
  //     // Create a new subgroup object with a unique ID and name
  //     const newSubgroup = {
  //       id: Date.now(), // Use the current timestamp as the ID
  //       name: subgroupName.trim(),
  //     };

  //     // Update the list of student groups by adding the new subgroup to the specified group
  //     setStudentGroups((prevStudentGroups) => {
  //       console.log("values",prevStudentGroups)
  //       const updatedGroups =[...prevStudentGroups]; // Create a copy of the previous student groups
  //       // Find the specified group by its ID and add the new subgroup to its subgroups array
  //       const groupIndex = updatedGroups.findIndex(
  //         (group) => group.id === groupId
  //       );
  //       console.log("index",groupIndex)
  //       if (groupIndex !== -1) {
  //         updatedGroups[groupIndex].subgroups.push(newSubgroup);

  //       } else {
  //         console.error("Invalid groupId:", groupId);
  //       }
  //       console.log("LI",updatedGroups)
  //       return updatedGroups; // Return the updated list of student groups

  //     });

  //     // Reset the subgroup name to clear the input field
  //     setSubgroupName("");
  //   }
  // };

  console.log(studentGroups.map((ele) => ele));

  const [isOpen, SetIsOpen] = useState();

  const handleOpen = () => {
    SetIsOpen(true);
  };

  const handleClose = () => {
    SetIsOpen(false);
  };

  // const handleSubGroup = (groups) => {
  //   console.log("cc",groups)
  //   localStorage.setItem("studentGroups", JSON.stringify(groups));
  // };

  return (
    <>
      <div className="w-full md:p-8 p-2">
        <div className="w-full flex flex-col justify-center items-center ">
          <div className="flex gap-4 lg:w-[80%] w-full  items-center">
            <div className="w-full border flex justify-between items-center py-2 px-4">
              <input
                type="text"
                className="bg-transparent w-full py-2 px-4 outline-none"
                placeholder="Search here"
              />
              <svg
                width="24"
                height="24"
                className="cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5003 2C9.14485 2.00012 7.80912 2.32436 6.60451 2.94569C5.3999 3.56702 4.36135 4.46742 3.57549 5.57175C2.78963 6.67609 2.27926 7.95235 2.08696 9.29404C1.89466 10.6357 2.026 12.004 2.47003 13.2846C2.91406 14.5652 3.6579 15.7211 4.63949 16.6557C5.62108 17.5904 6.81196 18.2768 8.11277 18.6576C9.41358 19.0384 10.7866 19.1026 12.1173 18.8449C13.448 18.5872 14.6977 18.015 15.7623 17.176L19.4143 20.828C19.6029 21.0102 19.8555 21.111 20.1177 21.1087C20.3799 21.1064 20.6307 21.0012 20.8161 20.8158C21.0015 20.6304 21.1066 20.3796 21.1089 20.1174C21.1112 19.8552 21.0104 19.6026 20.8283 19.414L17.1763 15.762C18.1642 14.5086 18.7794 13.0024 18.9514 11.4157C19.1233 9.82905 18.8451 8.22602 18.1485 6.79009C17.4519 5.35417 16.3651 4.14336 15.0126 3.29623C13.66 2.44911 12.0962 1.99989 10.5003 2ZM4.00025 10.5C4.00025 8.77609 4.68507 7.12279 5.90406 5.90381C7.12305 4.68482 8.77635 4 10.5003 4C12.2242 4 13.8775 4.68482 15.0964 5.90381C16.3154 7.12279 17.0003 8.77609 17.0003 10.5C17.0003 12.2239 16.3154 13.8772 15.0964 15.0962C13.8775 16.3152 12.2242 17 10.5003 17C8.77635 17 7.12305 16.3152 5.90406 15.0962C4.68507 13.8772 4.00025 12.2239 4.00025 10.5Z"
                  fill="#0A8F8C"
                />
              </svg>
            </div>
            <div onClick={() => handleOpen()} className="cursor-pointer">
              <PlusIcon width="34" height="34" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 w-full py-10">
            <Group groupname={"CSE"} />
            <Group groupname={"ECE"} />
            <Group groupname={"EEE"} />
            <Group groupname={"EEE"} />
            {studentGroups?.map((item) => (
  <div key={item.id}>
    <Link to="/subgroup" className="group-link">
      <Group
        groupname={item.name}
         
      />
    </Link>
   
  </div>
))}


          </div>
        </div>
      </div>
     
      <CreateGroupModal
        isOpen={isOpen}
        studentGroups={studentGroups}
        subgroupName={subgroupName}
        setSubgroupName={setSubgroupName}
        handleCreateSubgroup={handleCreateSubgroup}
        onRequestClose={handleClose}
        groupName={groupName}
        setGroupName={setGroupName}
        handleCreateGroup={handleCreateGroup}
      />
    </>
  );
};

export default StudentManagement;
