import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import SaveIcon from "../assets/SaveIcon";
import LinkedInIcon from "../assets/LinkedInIcon";
import WhatsappIcon from "../assets/WhatsappIcon";
import EmailIcon from "../assets/EmailIcon";
import FilterModal from "./FilterModal";

Modal.setAppElement("#root");

const dummyData = [
  { name: "John", dept: "IT", section: "A", year: 2023 },
  { name: "Alice", dept: "HR", section: "B", year: 2022 },
  { name: "Bob", dept: "Finance", section: "C", year: 2024 },
  { name: "Emily", dept: "Marketing", section: "D", year: 2023 },
  { name: "Michael", dept: "Operations", section: "A", year: 2022 },
  { name: "John", dept: "IT", section: "A", year: 2023 },
  { name: "Alice", dept: "HR", section: "B", year: 2022 },
  { name: "Bob", dept: "Finance", section: "C", year: 2024 },
  { name: "Emily", dept: "Marketing", section: "D", year: 2023 },
  { name: "Michael", dept: "Operations", section: "A", year: 2022 },
];

const ShareModal = ({ isOpen, onRequestClose }) => {
  const [filter, setFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(dummyData);
  const [activeFilter, setActiveFilter] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [filterValueYear, setFilterValueYear] = useState("");
  const [filterValueDept, setFilterValueDept] = useState("");
  const [filterValueSection, setFilterValueSection] = useState("");
  const [sharePopup, setSharePopup] = useState("");

  // Function to handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to filter data based on search term and filter value
  const applyFilter = () => {
    let results = [...dummyData];

    if (activeFilter === "year" && filterValueYear) {
      results = results.filter((item) =>
        item.year.toString().includes(filterValueYear)
      );
    }

    if (activeFilter === "dept" && filterValueDept) {
      results = results.filter((item) =>
        item.dept.toLowerCase().includes(filterValueDept.toLowerCase())
      );
    }

    if (activeFilter === "section" && filterValueSection) {
      results = results.filter((item) =>
        item.section.toLowerCase().includes(filterValueSection.toLowerCase())
      );
    }

    if (searchTerm) {
      results = results.filter((item) =>
        Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    setFilteredData(results);
    setFilter(false);
  };
  const FilterOpen = () => {
    setFilter(true);
  };

  const filterClose = () => {
    setFilter(false);
  };

  const [selectedRow, setSelectedRow] = useState(null); // State to keep track of selected row

  const handleRowClick = (item) => {
    // Toggle selection on row click
    if (selectedRow === item) {
      setSelectedRow(null); // Deselect the row if it's already selected
    } else {
      setSelectedRow(item); // Select the row
    }
  };

  // Function to handle message icon click
  const handleMessageClick = (e, item) => {
    e.stopPropagation(); // Prevent row click event propagation
    // Handle message action here
    console.log("Message clicked:", item);
  };

  // Function to handle share icon click
  const handleShareClick = (e, item) => {
    e.stopPropagation(); // Prevent row click event propagation
    setSharePopup((prev) => !prev);
  };

  useEffect(() => {
    // Event listener to handle clicks outside the modal
    const handleClickOutsideModal = (e) => {
      // Check if the click target is outside the current modal
      if (!e.target.closest(".filter")) {
        // Check if the click target is not an input field inside the modal
        if (!e.target.closest(".filter input")) {
          filterClose();
        }
      }
    };

    // Attach event listener when modal is open
    if (filter) {
      window.addEventListener("click", handleClickOutsideModal);
    }

    // Remove event listener when modal is closed
    return () => {
      window.removeEventListener("click", handleClickOutsideModal);
    };
  }, [filter]); // Re-run effect when isOpen changes

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Small Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%", // Center vertically
            left: "50%", // Center horizontally
            transform: "translate(-50%, -50%)", // Move to center
            width: "90%", // Set width to 90% of the viewport width
            maxWidth: "500px", // Maximum width
            height: "400px", // Set height to 90% of the viewport height
            maxHeight: "400px", // Maximum height
            padding: "10px",
            borderRadius: "10px", // Set a fixed height
            position: "absolute",
            overflow: "scrool",
          },
        }}
      >
        <div className="">
          <div className="py-2 px-1 ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.1917 3.93295C9.24981 3.991 9.29591 4.05993 9.32736 4.1358C9.35882 4.21168 9.37501 4.29301 9.37501 4.37514C9.37501 4.45727 9.35882 4.53861 9.32736 4.61448C9.29591 4.69035 9.24981 4.75928 9.1917 4.81733L4.63311 9.37514H16.8745C17.0403 9.37514 17.1992 9.44099 17.3165 9.5582C17.4337 9.67541 17.4995 9.83438 17.4995 10.0001C17.4995 10.1659 17.4337 10.3249 17.3165 10.4421C17.1992 10.5593 17.0403 10.6251 16.8745 10.6251H4.63311L9.1917 15.183C9.30898 15.3002 9.37486 15.4593 9.37486 15.6251C9.37486 15.791 9.30898 15.9501 9.1917 16.0673C9.07443 16.1846 8.91537 16.2505 8.74952 16.2505C8.58366 16.2505 8.4246 16.1846 8.30733 16.0673L2.68233 10.4423C2.62422 10.3843 2.57812 10.3154 2.54667 10.2395C2.51521 10.1636 2.49902 10.0823 2.49902 10.0001C2.49902 9.91801 2.51521 9.83668 2.54667 9.7608C2.57812 9.68493 2.62422 9.616 2.68233 9.55795L8.30733 3.93295C8.36537 3.87484 8.4343 3.82874 8.51018 3.79729C8.58605 3.76584 8.66738 3.74965 8.74952 3.74965C8.83165 3.74965 8.91298 3.76584 8.98885 3.79729C9.06473 3.82874 9.13366 3.87484 9.1917 3.93295Z"
                fill="#0A8F8C"
              />
            </svg>
          </div>
          <div className="">
            <div className="flex justify-around items-center">
              <div className="w-[400px] border flex justify-between items-center">
                <input
                  type="text"
                  className="bg-transparent w-full py-2 px-4 outline-none"
                  placeholder="Search by name"
                  value={searchTerm}
                  onChange={handleSearch}
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

              <div>
                <button>
                  <svg
                    width="30"
                    height="30"
                    className="cursor-pointer filter"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => FilterOpen()}
                  >
                    <circle cx="15" cy="15" r="15" fill="#0A8F8C" />
                    <path
                      d="M21.9795 13.6875H7.35449C7.139 13.6875 6.93234 13.6019 6.77997 13.4495C6.62759 13.2972 6.54199 13.0905 6.54199 12.875C6.54199 12.6595 6.62759 12.4528 6.77997 12.3005C6.93234 12.1481 7.139 12.0625 7.35449 12.0625H21.9795C22.195 12.0625 22.4016 12.1481 22.554 12.3005C22.7064 12.4528 22.792 12.6595 22.792 12.875C22.792 13.0905 22.7064 13.2972 22.554 13.4495C22.4016 13.6019 22.195 13.6875 21.9795 13.6875ZM19.2712 17.4792H10.0628C9.84734 17.4792 9.64067 17.3936 9.4883 17.2412C9.33593 17.0888 9.25033 16.8822 9.25033 16.6667C9.25033 16.4512 9.33593 16.2445 9.4883 16.0921C9.64067 15.9398 9.84734 15.8542 10.0628 15.8542H19.2712C19.4866 15.8542 19.6933 15.9398 19.8457 16.0921C19.9981 16.2445 20.0837 16.4512 20.0837 16.6667C20.0837 16.8822 19.9981 17.0888 19.8457 17.2412C19.6933 17.3936 19.4866 17.4792 19.2712 17.4792ZM16.0212 21.2708H13.3128C13.0973 21.2708 12.8907 21.1852 12.7383 21.0329C12.5859 20.8805 12.5003 20.6738 12.5003 20.4583C12.5003 20.2428 12.5859 20.0362 12.7383 19.8838C12.8907 19.7314 13.0973 19.6458 13.3128 19.6458H16.0212C16.2366 19.6458 16.4433 19.7314 16.5957 19.8838C16.7481 20.0362 16.8337 20.2428 16.8337 20.4583C16.8337 20.6738 16.7481 20.8805 16.5957 21.0329C16.4433 21.1852 16.2366 21.2708 16.0212 21.2708Z"
                      fill="white"
                    />
                  </svg>
                </button>

                {filter && (
                  <div className="z-50 filter cursor-pointer flex flex-col justify-center items-center gap-3 w-40 h-40  pt-4 absolute right-5 bg-white rounded-md">
                    <div className="py-2 px-1">
                      <div className="flex flex-col gap-2 items-center z-50">
                        {["year", "dept", "section"].map((filterType) => (
                          <div key={filterType} className="mr-2">
                            <div className="flex items-center gap-5 justify-around">
                              <button
                                className={`text-xs hover:text-primary ${
                                  activeFilter === filterType
                                    ? "text-primary"
                                    : ""
                                }`}
                                onClick={() =>
                                  setActiveFilter(
                                    activeFilter === filterType
                                      ? ""
                                      : filterType
                                  )
                                }
                              >
                                {filterType}
                              </button>
                              <svg
                                width="7"
                                height="4"
                                viewBox="0 0 7 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.375 0.25L3.5 3.375L6.625 0.25H0.375Z"
                                  fill="#2F2F2F"
                                />
                              </svg>
                            </div>

                            {activeFilter === filterType && (
                              <div className="flex justify-center items-center">
                                <input
                                  type="text"
                                  value={
                                    filterType === "year"
                                      ? filterValueYear
                                      : filterType === "dept"
                                      ? filterValueDept
                                      : filterValueSection
                                  }
                                  onChange={(e) =>
                                    filterType === "year"
                                      ? setFilterValueYear(e.target.value)
                                      : filterType === "dept"
                                      ? setFilterValueDept(e.target.value)
                                      : setFilterValueSection(e.target.value)
                                  }
                                  placeholder={`Enter ${filterType}`}
                                  className="text-xs border mt-2 w-[80%] px-2 py-1"
                                />
                              </div>
                            )}
                          </div>
                        ))}
                        <div className="flex justify-end items-center gap-2">
                          <button
                            className="bg-primary p-1 px-2 text-white rounded-md text-xs"
                            onClick={() => filterClose()}
                          >
                            Cancel
                          </button>
                          <button
                            className="bg-primary p-1 px-2 text-white rounded-md text-xs"
                            onClick={() => applyFilter()}
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div></div>
              </div>
            </div>

            <div className="max-h-[280px] bg-[#80CBC9] mt-4 overflow-auto  p-4 ">
              <table className="w-full h-full table-auto font-medium ">
                <thead>
                  <tr className=" mb-2 rounded-md">
                    <th className="px-4 py-2 font-medium text-sm">Name</th>
                    <th className="px-4 py-2 font-medium text-sm">Dept</th>
                    <th className="px-4 py-2 font-medium text-sm">Section</th>
                    <th className="px-4 py-2 font-medium text-sm">Year</th>
                    {selectedRow && (
                      <th className="px-4 py-2 font-medium text-sm">Actions</th>
                    )}
                  </tr>
                </thead>
                <tbody className="text-center cursor-pointer rounded-md">
                  {filteredData.map((item) => (
                    <tr
                      className={`bg-[#80CBC9] mt-2 ${
                        selectedRow === item
                          ? "selected-row bg-white rounded-md"
                          : ""
                      }`}
                      onClick={() => handleRowClick(item)}
                    >
                      <td className=" px-4 py-2 font-medium text-sm">
                        {item.name}
                      </td>
                      <td className=" px-4 py-2 font-medium text-sm">
                        {item.dept}
                      </td>
                      <td className=" px-4 py-2 font-medium text-sm">
                        {item.section}
                      </td>
                      <td className=" px-4 py-2 font-medium text-sm">
                        {item.year}
                      </td>
                      {selectedRow === item && (
                        <td className="py-2 font-medium flex gap-2 justify-center text-sm relative">
                          <>
                            <svg
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              onClick={(e) => handleMessageClick(e, item)}
                            >
                              <circle
                                cx="12.5"
                                cy="12.5"
                                r="12.5"
                                fill="#0A8F8C"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M6.40625 9.125C6.40625 8.66916 6.58733 8.23199 6.90966 7.90966C7.23199 7.58733 7.66916 7.40625 8.125 7.40625H16.875C17.3308 7.40625 17.768 7.58733 18.0903 7.90966C18.4127 8.23199 18.5938 8.66916 18.5938 9.125V15.375C18.5938 15.8308 18.4127 16.268 18.0903 16.5903C17.768 16.9127 17.3308 17.0938 16.875 17.0938H9.97563C9.73813 17.0938 9.51375 17.2019 9.36563 17.3875L7.90938 19.2081C7.41063 19.8306 6.40625 19.4788 6.40625 18.6813V9.125Z"
                                fill="white"
                              />
                            </svg>

                            <svg
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              onClick={(e) => handleShareClick(e, item)}
                            >
                              <circle
                                cx="12.5"
                                cy="12.5"
                                r="12.5"
                                fill="#0A8F8C"
                              />
                              <path
                                d="M15.25 15.05C14.775 15.05 14.35 15.2375 14.025 15.5313L9.56875 12.9375C9.6 12.7938 9.625 12.65 9.625 12.5C9.625 12.35 9.6 12.2063 9.56875 12.0625L13.975 9.49375C14.3125 9.80625 14.7563 10 15.25 10C16.2875 10 17.125 9.1625 17.125 8.125C17.125 7.0875 16.2875 6.25 15.25 6.25C14.2125 6.25 13.375 7.0875 13.375 8.125C13.375 8.275 13.4 8.41875 13.4313 8.5625L9.025 11.1313C8.6875 10.8188 8.24375 10.625 7.75 10.625C6.7125 10.625 5.875 11.4625 5.875 12.5C5.875 13.5375 6.7125 14.375 7.75 14.375C8.24375 14.375 8.6875 14.1813 9.025 13.8688L13.475 16.4688C13.4437 16.6 13.425 16.7375 13.425 16.875C13.425 17.8813 14.2437 18.7 15.25 18.7C16.2563 18.7 17.075 17.8813 17.075 16.875C17.075 15.8688 16.2563 15.05 15.25 15.05Z"
                                fill="white"
                              />
                            </svg>
                          </>
                          {sharePopup && (
                            <div className="w-14 h-40 bg-white absolute top-16 flex flex-col justify-center items-center gap-2 rounded-md right-0 z-50">
                              <div>
                                <a href="">
                                  <SaveIcon />
                                </a>
                              </div>
                              <div>
                                <a href="whatsapp://send?text=Check%20out%20this%20page:%20http://example.com">
                                  <WhatsappIcon />
                                </a>
                              </div>
                              <div>
                                <EmailIcon />
                              </div>
                              <div>
                                <a href="https://www.linkedin.com/sharing/share-offsite/?url=http://example.com">
                                  <LinkedInIcon />
                                </a>
                              </div>
                            </div>
                          )}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ShareModal;
