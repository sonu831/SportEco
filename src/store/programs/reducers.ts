import { createSlice } from "@reduxjs/toolkit";
import { fetchPrograms } from "../../services/programs";
import { SessionDefinition } from "../../types/session";

type InitialState = {
  sessions: SessionDefinition[];
  programList: any;
  selectedProgram: any;
};

const initialState: InitialState = {
  sessions: [],
  programList: [],
  selectedProgram: null,
};

export const ProgramSlice = createSlice({
  name: "Programs",
  initialState,
  reducers: {
    addSession: (s, a) => {
      s.sessions = [...s.sessions, { ...a.payload, id: s.sessions.length + 1 }];
    },
    removeSession: (s, a) => {
      s.sessions = s.sessions.filter((e) => e.id !== a.payload);
    },
    setSelectedProgram: (s, a) => {
      s.selectedProgram = a.payload;
    },
    setSessionForEdit: (s, a) => {
      s.sessions = a.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPrograms.fulfilled, (s, a) => {
      s.programList = a.payload || [];
    });
  },
});

export const {
  addSession,
  removeSession,
  setSelectedProgram,
  setSessionForEdit,
} = ProgramSlice.actions;
