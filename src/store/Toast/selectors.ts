import { createSelector } from "@reduxjs/toolkit";
import { ToastSlice } from "./reducers";
import { RootState } from "../index";

const toast$ = (s: RootState) => s[ToastSlice.name];

export const toastDetail$ = createSelector([toast$], (toast) => ({
  type: toast.type,
  message: toast.message,
}));
