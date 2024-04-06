// modalSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    modalType: null, // You can use this to identify different types of modals if needed
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalType = action.payload; // Payload can be used to identify different types of modals
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalType = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const selectIsOpen = (state) => state.modal.isOpen;
export const selectModalType = (state) => state.modal.modalType;

export default modalSlice.reducer;
