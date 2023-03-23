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

export const fetchPrograms = createAsyncThunk(
  "fetchPrograms",
  async (_, { rejectWithValue }) => {
    return axios
      .get(endpoints.fetchPrograms)
      .then((res) => res.data)
      .catch((err) => {
        console.log("err", err);
        rejectWithValue(err);
      });
  }
);

export const deleteProgram = createAsyncThunk(
  "deleteProgram",
  async ({ programId }: { programId: string }, { rejectWithValue }) => {
    return axios
      .get(endpoints.deleteProgram, {
        headers: {
          program_id: programId,
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        console.log("err", err);
        rejectWithValue(err);
      });
  }
);

type UpdateProgramProps = {
  data: { [key: string]: any };
  id: string | undefined;
};

export const updateProgram = createAsyncThunk(
  "updateProgram",
  async (request: UpdateProgramProps, { rejectWithValue }) => {
    const { data, id } = request;

    return axios
      .post(endpoints.updateProgram, data, {
        headers: {
          program_id: id,
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);
