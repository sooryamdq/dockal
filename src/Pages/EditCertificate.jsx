import { Link } from "react-router-dom";
import ExploreNavbar from "../Components/ExploreNavbar";
import QRCode from "qrcode.react";
import DeleteIcon from "../assets/DeleteIcon";
import Menubar from "../assets/Menubar";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CustomModal from "../Components/Modal";
import ShareModal from "../Components/ShareModal";
import PlusIcon from "../assets/PlusIcon";
import EditCertificates from "../Components/EditCertificates";

Modal.setAppElement("#root");

const EditCertificate = ({ count, handleChange, setCount }) => {
  console.log("cnt", count);

  const notify = () => {
    toast.success("Successfully saved");
  };

  const [isOpen, setIsOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [sharemodalOpen, setShareModal] = useState(false);
  const [addgroup, setAddgroup] = useState(false);
  const [groupname, setGroupName] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleMenu = () => {
    setEditOpen(true);
  };

  const menuClose = () => {
    setEditOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      menuClose();
    }
  };

  const shareModalOpen = () => {
    setShareModal(true);
  };

  const shareModalClose = () => {
    setShareModal(false);
  };

  useEffect(() => {
    // Event listener to handle clicks outside the modal
    const handleClickOutsideModal = (e) => {
      if (!e.target.closest(".modal")) {
        menuClose();
      }
    };

    // Attach event listener when modal is open
    if (editOpen) {
      window.addEventListener("click", handleClickOutsideModal);
    }

    // Remove event listener when modal is closed
    return () => {
      window.removeEventListener("click", handleClickOutsideModal);
    };
  }, [editOpen]); // Re-run effect when isOpen changes

  const handleAddGroup = () => {
    setAddgroup(true);
    setEditOpen(false);
  };

  const handleGroupName = () => {
    setGroupName(true);
    setEditOpen(false);
    setAddgroup(false);
  };

  const closeGroup = ()=>{
    setGroupName(false)
  }

  return (
    <>
      <div className="w-full h-auto" onClick={handleOverlayClick}>
        <ExploreNavbar />
        <div className="flex flex-col lg:items-start items-center gap-5 lg:pl-20 pl-0">
          <p className="font-semibold text-sm py-2 ">
            Certificates /{" "}
            <Link to="/marksheets" className="font-normal text-sm">
              Marksheets
            </Link>
          </p>
        </div>
       <EditCertificates editOpen={editOpen} handleAddGroup={handleAddGroup} closeGroup={closeGroup} handleMenu={handleMenu} groupname={groupname} addgroup={addgroup}  handleGroupName={handleGroupName}/>
        <div className="lg:w-[90%] w-full flex lg:justify-end justify-center py-1 gap-2">
          <button
            className="bg-primary p-2 text-white rounded-md"
            onClick={notify}
          >
            Save
          </button>
          <button
            className="bg-primary p-2 text-white rounded-md"
            onClick={() => shareModalOpen()}
          >
            Share
          </button>
          <button
            className="bg-primary p-2 text-white rounded-md"
            onClick={() => openModal()}
          >
            Duplicate{" "}
          </button>
          <button className="bg-primary p-2 text-white rounded-md">
            Request
          </button>
        </div>
      </div>
      <CustomModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        handleChange={handleChange}
        count={count}
        setCount={setCount}
      ></CustomModal>

      <ShareModal isOpen={sharemodalOpen} onRequestClose={shareModalClose} />
    </>
  );
};

export default EditCertificate;
