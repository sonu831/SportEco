import axios from "./utils/axios";
import { endpoints } from "./utils/endpoints";
import { createAsyncThunk } from "@reduxjs/toolkit";

type AddProgramProps = {
  data: { [key: string]: any };
};

export const addPrograms = createAsyncThunk(
  "addPrograms",
  async (request: AddProgramProps, { rejectWithValue }) => {
    return axios
      .post(endpoints.addPrograms, request)
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
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
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

type AddSessionInProgramProps = {
  data: { [key: string]: any };
  id: string | undefined;
};

export const addSessionInProgram = createAsyncThunk(
  "addSessionInProgram",
  async (request: AddSessionInProgramProps, { rejectWithValue }) => {
    return axios
      .post(endpoints.addSessionInProgram, request.data, {
        headers: {
          program_id: request.id,
        },
      })
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        rejectWithValue(err);
      });
  }
)

export const getProgromDataById = createAsyncThunk(
  "getProgromDataById",
  async (id: string, { rejectWithValue }) => {
    return axios
      .get(endpoints.getProgromDataById, {
        headers: {
          program_id: id,
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
)