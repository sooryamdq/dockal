import { useState, useEffect } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Event listener to handle clicks outside the modal
    const handleClickOutsideModal = (e) => {
      if (!e.target.closest('.modal')) {
        closeModal();
      }
    };

    // Attach event listener when modal is open
    if (isOpen) {
      window.addEventListener('click', handleClickOutsideModal);
    }

    // Remove event listener when modal is closed
    return () => {
      window.removeEventListener('click', handleClickOutsideModal);
    };
  }, [isOpen]); // Re-run effect when isOpen changes

  return { isOpen, openModal, closeModal };
};

export default useModal;
