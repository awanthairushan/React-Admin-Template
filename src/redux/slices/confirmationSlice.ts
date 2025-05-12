// store/confirmationSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConfirmationState {
  isOpen: boolean;
  header: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onResolve?: (confirmed: boolean) => void;
}

const initialState: ConfirmationState = {
  isOpen: false,
  header: "",
  message: "",
};

const confirmationSlice = createSlice({
  name: "confirmation",
  initialState,
  reducers: {
    openConfirmation: (
      state,
      action: PayloadAction<Omit<ConfirmationState, "isOpen">>
    ) => {
      state.isOpen = true;
      Object.assign(state, action.payload);
    },
    closeConfirmation: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openConfirmation, closeConfirmation } = confirmationSlice.actions;
export default confirmationSlice.reducer;
