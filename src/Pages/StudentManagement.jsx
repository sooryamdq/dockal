import { useEffect, useState } from "react";
import CreateGroupModal from "../Components/CreateGroupModal";
import Group from "../Components/Group";
import PlusIcon from "../assets/PlusIcon";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addGroup, addSubgroup, createGroup, fetchGroups } from "../Redux/StudentgropSlice";
import  axios  from "axios";

const StudentManagement = () => {

  const [bearerToken, setBearerToken] = useState(null);
  const [loginUserId, setLoginUserId] = useState(null);
 // const [userId, setUserId] = useState(null);

  // Use useEffect to set state variables
  useEffect(() => {
    // Retrieve userData from local storage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      // Assuming your token key is "token" in the userData object
      if (userData) {
        setBearerToken(userData.data.bearerToken);
        setLoginUserId(userData.data.userId);
        //setUserRole(userData.data.userRole); // Assuming userRole is available in userData
      }
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount


//token and userId


  const dispatch = useDispatch();
  const [groupName, setGroupName] = useState("");
  const [subgroupName, setSubgroupName] = useState("");
  const studentGroups = useSelector((state) => state.studentGroups);
 
   console.log("ele",studentGroups.studentGroups.data)


    
  // const fetchData = async () => {

  //   console.log(bearerToken,loginUserId)
  //   try {
  //     // Create a new FormData object
  //     const formData = new FormData();
      
  //     // Append the loginUserId to the FormData object
  //     formData.append('loginUserId', loginUserId);
     
  
  //     // Make the POST request with the FormData
  //     const response = await axios.post(
  //       "https://mdqualityapps.in/API/dockal/development/get_all_user_roles",
  //       formData, // Pass the FormData object here
  //       {
  //         headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded', // Set the Content-Type header for form data
  //           Authorization: `Bearer ${bearerToken}` // Pass bearerToken in the request headers
  //         }
  //       }
  //     );
  //     console.log("res", response.data);
  //     // Handle response data as needed
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     // Redirect to login page if token expires or request fails
  //   }
  // };
  
  
 // Fetch data when token and userId change
 
 useEffect(() => {
  // Fetch groups data if both loginUserId and bearerToken are available
  if (loginUserId && bearerToken) {
    dispatch(fetchGroups({ bearerToken, loginUserId }));
  }
}, [dispatch, loginUserId, bearerToken]);

  

  const handleCreateGroup = () => {
    console.log("val",groupName)
    if (groupName.trim() !== "") {
      
      dispatch(createGroup({groupName,loginUserId,bearerToken}));
      // setGroupName("");
      // handleCreateSubgroup(newGroup.id);
    }
  };

  // const handleCreateSubgroup = (groupId) => {
  //   if (subgroupName.trim() !== "") {
  //     const newSubgroup = {
  //       id: Date.now(), // Use timestamp as ID
  //       name: subgroupName.trim(),
  //     };
  //     dispatch(({ groupId, subgroup: newSubgroup }));
  //     setSubgroupName("");
  //   }
  // };

  

  // console.log(studentGroups.map((ele) => ele));

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
    {/* <button onClick={()=>fetchData()}>data</button> */}
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
                  fillRule="evenodd"
                  clipRule="evenodd"
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
           
            {studentGroups?.studentGroups?.data?.map((item) => (
              <div key={item.departmentId}>
                <Link
                  // to={item.subgroups.length > 0 ? `/subgroup/${item.subgroups.map((ele) => ele.name).join(',')}`
                  // : "#"}
                  className="group-link"
                >
                  <Group groupname={item.departmentName} />
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
        // handleCreateSubgroup={handleCreateSubgroup}
        onRequestClose={handleClose}
        groupName={groupName}
        setGroupName={setGroupName}
        handleCreateGroup={handleCreateGroup}
      />
    </>
  );
};

export default StudentManagement;
