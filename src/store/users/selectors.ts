import { createSelector } from "@reduxjs/toolkit";
import { UserSlice } from "./reducers";
import { RootState } from "../index";
import { STATE_OPTIONS } from "../../constants/EditProfile";

const users$ = (s: RootState) => s[UserSlice.name];

export const userDetails$ = createSelector(
  [users$],
  // @ts-ignore
  (users) => users.user?.data || {}
);

export const isAccountVerified$ = createSelector(
  [users$],
  (users) => users.isVerified
);

export const isLoginVerified$ = createSelector(
  [users$],
  (users) => users.isLoginVerified
);

export const countryState$ = createSelector(
  [users$],
  (users) =>
    // @ts-ignore
    users.states?.data?.states?.map((i) => ({
      label: i.name,
      value: i.name,
    })) || STATE_OPTIONS
);

export const citiesByState$ = createSelector(
  [users$],
  (users) =>
    // @ts-ignore
    users.cities?.data?.map((i) => ({
      value: i,
      label: i,
    })) || []
);
