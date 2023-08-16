import { createSlice } from "@reduxjs/toolkit";

export type ModalState = {
  isOpen: boolean;
};

const initialState: ModalState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    resetModal: (state) => {
      state.isOpen = false;
    },
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { resetModal, toggleOpen } = modalSlice.actions;
export default modalSlice;
