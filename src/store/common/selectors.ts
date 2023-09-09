import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { CommonSlice } from "./reducers";

const common$ = (s: RootState) => s[CommonSlice.name];

export const isLoading$ = createSelector(
  [common$],
  (common) => common.isLoading
);
