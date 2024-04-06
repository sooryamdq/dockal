import { useState } from "react";
import Modal from "react-modal";

const CreateGroupModal = ({
  isOpen,
  onRequestClose,
  groupName,
  studentGroups,
  setGroupName,
  handleCreateGroup,
  subgroupName,
  setSubgroupName,
  handleCreateSubgroup,
}) => {
  const [view, setView] = useState(false);

  const handleSubGroup = () => {
    setView((prev) => !prev);
  };

  return (
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
          width: "357px", // Set a fixed width
          height: "175px",
          padding: "10px",
          borderRadius: "10px", // Set a fixed height
          position: "absolute",
          overflow: "hidden",
        },
      }}
    >
      <div className="flex flex-col justify-center items-center p-2">
        <input
          type="text"
          placeholder="Enter group name here"
          className="border px-2 py-1"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        {view && (
          <input
            type="text"
            placeholder="Enter Subgroup name here "
            value={subgroupName}
            onChange={(e) => setSubgroupName(e.target.value)}
            className="border px-2 py-1 mt-2"
          />
        )}
        <div className="flex justify-end items-center gap-5 mt-10">
          <button
            className="border-primary text-black p-2 hover:text-white rounded-md text-xs hover:bg-primary"
            onClick={() => handleSubGroup()}
          >
            Add subgroup
          </button>
          <button
            className="border-primary p-2 text-black hover:text-white rounded-md text-xs hover:bg-primary"
            onClick={() => handleSubGroup()}
          >
            Cancel
          </button>
          <button
            className="bg-primary p-2 text-white rounded-md text-xs"
            onClick={() => handleCreateGroup()}
          >
            Create
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateGroupModal;
