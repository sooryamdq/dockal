import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const CustomModal = ({ isOpen, onRequestClose, count, handleChange }) => {
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
          width: "300px", // Set a fixed width
          height: "250px",
          padding: "10px",
          borderRadius: "10px", // Set a fixed height
          position: "absolute",
        },
      }}
    >
      <p className="text-base font-medium py-2">Duplicate</p>
      <p className="py-2"> Selected certificate: 1</p>
      <div className="flex gap-1 py-1">
        <p>Duplicate count:</p>

        <input
          type="number"
          className="border text-xs p-1"
          value={count}
          style={{ width: "140px" }}
          placeholder="Enter count eg:2"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="flex justify-end items-center gap-2 mt-10">
        <button
          className="bg-primary p-2 text-white rounded-md text-xs"
          onClick={() => onRequestClose()}
        >
          Cancel
        </button>
        <Link
          to="/duplicate"
          className="bg-primary p-2 text-white rounded-md text-xs"
          onClick={() => onRequestClose()}
        >
          Ok
        </Link>
      </div>
    </Modal>
  );
};

export default CustomModal;
