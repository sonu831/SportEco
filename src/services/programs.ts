import axios from "./utils/axios";
import { endpoints } from "./utils/endpoints";
import { createAsyncThunk } from "@reduxjs/toolkit";

type AddProgramProps = {
  data: { [key: string]: any };
};

export const addPrograms = createAsyncThunk(
  "addPrograms",
  async (request: AddProgramProps, { rejectWithValue }) => {
    const { data } = request;

    return axios
      .post(endpoints.addPrograms, data)
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);