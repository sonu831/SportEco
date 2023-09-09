import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const CommonSlice = createSlice({
  name: "Common",
  initialState,
  reducers: {
    showLoader: (s) => {
      s.isLoading = true;
    },
    hideLoader: (s) => {
      s.isLoading = false;
    },
  },
});

export const { hideLoader, showLoader } = CommonSlice.actions;
