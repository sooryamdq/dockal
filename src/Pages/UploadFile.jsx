
import PlusIcon from "../assets/PlusIcon";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const data = [
    {
      roleNumber: 1,
      name: "John Doe",
      email: "john@example.com",
      contact: "123-456-7890",
    },
    {
      roleNumber: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "987-654-3210",
    },
    {
      roleNumber: 1,
      name: "John Doe",
      email: "john@example.com",
      contact: "123-456-7890",
    },
    {
      roleNumber: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "987-654-3210",
    },
    {
      roleNumber: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      contact: "555-555-5555",
    },
    {
      roleNumber: 4,
      name: "Bob Brown",
      email: "bob@example.com",
      contact: "111-222-3333",
    },
    {
      roleNumber: 5,
      name: "Eve Roberts",
      email: "eve@example.com",
      contact: "444-444-4444",
    },
    {
      roleNumber: 1,
      name: "John Doe",
      email: "john@example.com",
      contact: "123-456-7890",
    },
    {
      roleNumber: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "987-654-3210",
    },
    {
      roleNumber: 1,
      name: "John Doe",
      email: "john@example.com",
      contact: "123-456-7890",
    },
    {
      roleNumber: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "987-654-3210",
    },
    {
      roleNumber: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      contact: "555-555-5555",
    },
    {
      roleNumber: 4,
      name: "Bob Brown",
      email: "bob@example.com",
      contact: "111-222-3333",
    },
    {
      roleNumber: 5,
      name: "Eve Roberts",
      email: "eve@example.com",
      contact: "444-444-4444",
    },
    {
      roleNumber: 1,
      name: "John Doe",
      email: "john@example.com",
      contact: "123-456-7890",
    },
    {
      roleNumber: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "987-654-3210",
    },
    {
      roleNumber: 1,
      name: "John Doe",
      email: "john@example.com",
      contact: "123-456-7890",
    },
    {
      roleNumber: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "987-654-3210",
    },
    {
      roleNumber: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      contact: "555-555-5555",
    },
    {
      roleNumber: 4,
      name: "Bob Brown",
      email: "bob@example.com",
      contact: "111-222-3333",
    },
    {
      roleNumber: 5,
      name: "Eve Roberts",
      email: "eve@example.com",
      contact: "444-444-4444",
    },
    {
      roleNumber: 1,
      name: "John Doe",
      email: "john@example.com",
      contact: "123-456-7890",
    },
    {
      roleNumber: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "987-654-3210",
    },
    {
      roleNumber: 1,
      name: "John Doe",
      email: "john@example.com",
      contact: "123-456-7890",
    },
    {
      roleNumber: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "987-654-3210",
    },
    {
      roleNumber: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      contact: "555-555-5555",
    },
    {
      roleNumber: 4,
      name: "Bob Brown",
      email: "bob@example.com",
      contact: "111-222-3333",
    },
    {
      roleNumber: 5,
      name: "Eve Roberts",
      email: "eve@example.com",
      contact: "444-444-4444",
    },
    {
      roleNumber: 1,
      name: "John Doe",
      email: "john@example.com",
      contact: "123-456-7890",
    },
    {
      roleNumber: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "987-654-3210",
    },
    {
      roleNumber: 1,
      name: "John Doe",
      email: "john@example.com",
      contact: "123-456-7890",
    },
    {
      roleNumber: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "987-654-3210",
    },
    {
      roleNumber: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      contact: "555-555-5555",
    },
    {
      roleNumber: 4,
      name: "Bob Brown",
      email: "bob@example.com",
      contact: "111-222-3333",
    },
    {
      roleNumber: 5,
      name: "Eve Roberts",
      email: "eve@example.com",
      contact: "444-444-4444",
    },
    {
      roleNumber: 1,
      name: "John Doe",
      email: "john@example.com",
      contact: "123-456-7890",
    },
    {
      roleNumber: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "987-654-3210",
    },
    {
      roleNumber: 1,
      name: "John Doe",
      email: "john@example.com",
      contact: "123-456-7890",
    },
    {
      roleNumber: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "987-654-3210",
    },
    {
      roleNumber: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      contact: "555-555-5555",
    },
    {
      roleNumber: 4,
      name: "Bob Brown",
      email: "bob@example.com",
      contact: "111-222-3333",
    },
    {
      roleNumber: 5,
      name: "Eve Roberts",
      email: "eve@example.com",
      contact: "444-444-4444",
    },
    {
      roleNumber: 1,
      name: "John Doe",
      email: "john@example.com",
      contact: "123-456-7890",
    },
    {
      roleNumber: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "987-654-3210",
    },
    {
      roleNumber: 1,
      name: "John Doe",
      email: "john@example.com",
      contact: "123-456-7890",
    },
    {
      roleNumber: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      contact: "987-654-3210",
    },
    {
      roleNumber: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      contact: "555-555-5555",
    },
    {
      roleNumber: 4,
      name: "Bob Brown",
      email: "bob@example.com",
      contact: "111-222-3333",
    },
    {
      roleNumber: 5,
      name: "Eve Roberts",
      email: "eve@example.com",
      contact: "444-444-4444",
    },
  ];

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleUserClick = () => {
    // Navigate to user detail page with user id
    // navigate(`/user/${userId}`);
    navigate("/studentdetails");
  };
  return (
    <>
    
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex gap-4 w-[80%] items-center">
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
          <div className="cursor-pointer">
            <PlusIcon width="34" height="34" />
          </div>
        </div>
        <div className="py-4 w-full px-5 overflow-x-auto">
          <table className="w-full text-[#2F2F2F] p-1">
            <thead className="" style={{ marginBottom: "1rem" }}>
              <tr className=" bg-[#E5E5E5] ">
                <th className="font-semibold text-xs p-4 border-r-2 border-[#D8D8D8]">
                  Roll No
                </th>
                <th className="font-semibold text-xs p-4 border-r-2 border-[#D8D8D8]">
                  Name
                </th>
                <th className="font-semibold text-xs p-4 border-r-2 border-[#D8D8D8]">
                  Email
                </th>
                <th className="font-semibold text-xs p-4 border-r-2 border-[#D8D8D8]">
                  Contact
                </th>
              </tr>
            </thead>

            <tbody className="mt-4 bg-[#E5E5E5]">
              {data.map((row, index) => (
                <tr
                  key={index}
                  onClick={() => handleUserClick()}
                  className="cursor-pointer"
                >
                  <td className="font-semibold text-xs px-4  border-r-2 border-[#D8D8D8]">
                    {row.roleNumber}
                  </td>
                  <td className="font-semibold text-xs px-4 whitespace-nowrap overflow-hidden overflow-ellipsis  border-r-2 border-[#D8D8D8]">
                    {row.name}
                  </td>
                  <td className="font-semibold text-xs px-4   border-r-2 border-[#D8D8D8]">
                    {row.email}
                  </td>
                  <td className="font-semibold text-xs px-4 whitespace-nowrap overflow-hidden overflow-ellipsis   border-r-2 border-[#D8D8D8]">
                    {row.contact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Upload;
