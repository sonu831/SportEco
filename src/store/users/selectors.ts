import { createSelector } from "@reduxjs/toolkit";
import { UserSlice } from "./reducers";
import { RootState } from "../index";

const users$ = (s: RootState) => s[UserSlice.name];

export const userDetails$ = createSelector([users$], (users) => users.user);

export const isAccountVerified$ = createSelector(
  [users$],
  (users) => users.isVerified
);
