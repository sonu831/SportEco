import { endpoints } from "./utils/endpoints";
import axios from "./utils/axios";
import http from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "registerUser",
  async (
    { phNum }: { phNum: string },
    { rejectWithValue, fulfillWithValue }
  ) => {
    return axios
      .get(endpoints.userCreation, {
        headers: {
          contact_no: phNum,
        },
      })
      .then((res) => fulfillWithValue(res.data))
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

export const validateOtp = createAsyncThunk(
  "validateOtp",
  async (
    request: { [key: string]: string },
    { rejectWithValue, fulfillWithValue }
  ) => {
    return axios
      .post(endpoints.validateOtp, request)
      .then((res) => {
        return fulfillWithValue(res.data);
      })
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

type updateUserProfileProps = {
  data: { [key: string]: any };
};

export const updateUserProfile = createAsyncThunk(
  "updateUserProfile",
  async (request: updateUserProfileProps, { rejectWithValue }) => {
    const { data } = request;
    return axios
      .post(endpoints.updateUserProfile, data)
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

export const fetchUserById = createAsyncThunk(
  "fetchUserById",
  async (_, { rejectWithValue }) => {
    return axios
      .get(endpoints.fetchUserById)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log("err", err);
        rejectWithValue(err);
      });
  }
);

export const uploadUserProfilePicture = createAsyncThunk(
  "uploadUserProfilePicture",
  async (request: any, { rejectWithValue }) => {
    return axios
      .post(endpoints.uploadUserProfileImage, request, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

//TODO: For now we have hard code the country
export const getAllStates = createAsyncThunk(
  "getAllStates",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    return http
      .post(endpoints.fetchAllState, { country: "India" })
      .then((res) => {
        return fulfillWithValue(res.data);
      })
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

//TODO: For now we have hard code the country
export const getSelectedCityByState = createAsyncThunk(
  "getSelectedCityByState",
  async (selectedState: string, { rejectWithValue, fulfillWithValue }) => {
    return http
      .post(endpoints.fetchCityByState, {
        country: "India",
        state: selectedState,
      })
      .then((res) => {
        return fulfillWithValue(res.data);
      })
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);
