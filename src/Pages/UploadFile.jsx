import PlusIcon from "../assets/PlusIcon";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../assets/Searchicon";

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
            <SearchIcon/>
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
