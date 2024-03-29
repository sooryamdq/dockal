import React, { useState } from 'react';
import Modal from 'react-modal';

const EditGroupModal = ({ editOpen, onRequestClose }) => {
 

  return (
    <Modal
      isOpen={editOpen}
      onRequestClose={onRequestClose}
      contentLabel="Small Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          top: '45%', // Center vertically
          left: '85%', // Center horizontally
          transform: 'translate(-50%, -50%)', // Move to center
          width: '180px', // Set a fixed width
          height: '130px',
          paddingTop:"5px",
          padding:"0px",
          position:"fixed"
          
        }
      }}
    >
        
     
      
    </Modal>
  );
};

export default EditGroupModal
