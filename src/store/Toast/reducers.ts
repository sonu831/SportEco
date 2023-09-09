import { fetchBatchById, fetchBatches } from "./../../services/batches";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  type: "success",
};

export const ToastSlice = createSlice({
  name: "Toast",
  initialState,
  reducers: {
    setToast: (s, a) => {
      s.message = a.payload?.message || initialState.message;
      s.type = a.payload?.type || initialState.type;
    },
  },
});

export const { setToast } = ToastSlice.actions;
