import React, { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const FilterModal = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const dummyData = [
    { name: "John", dept: "IT", section: "A", year: 2023 },
    { name: "Alice", dept: "HR", section: "B", year: 2022 },
    { name: "Bob", dept: "Finance", section: "C", year: 2024 },
    { name: "Emily", dept: "Marketing", section: "D", year: 2023 },
    { name: "Michael", dept: "Operations", section: "A", year: 2022 },
  ];

  const applyFilter = () => {
    let results = [...dummyData];
    switch (filterType) {
      case "year":
        results = results.filter((item) => item.year === parseInt(filterValue));
        break;
      case "dept":
        results = results.filter((item) =>
          item.dept.toLowerCase().includes(filterValue.toLowerCase())
        );
        break;
      case "section":
        results = results.filter((item) =>
          item.section.toLowerCase().includes(filterValue.toLowerCase())
        );
        break;
      default:
        break;
    }
    setFilteredData(results);
  };

  useEffect(() => {
    applyFilter();
  }, [filterType, filterValue]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>
        <svg
          width="30"
          height="30"
          className="cursor-pointer modal"
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
      <div className="cursor-pointer flex flex-col justify-center items-center gap-3 w-32 h-32  pt-4 absolute right-5 bg-white rounded-md">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="text-xs  bg-transparent w-[80%]"
        >
          <option value="">Select Filter</option>
          <option value="year">Year</option>
          <option value="dept">Department</option>
          <option value="section">Section</option>
        </select>
        <input
          type="text"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          placeholder="Enter Filter Value"
          className="w-[80%] text-xs border"
        />
      </div>
      <div></div>
    </div>
  );
};

export default FilterModal;
