import { UserSlice } from "./users/reducers";
import { combineReducers } from "@reduxjs/toolkit";
import { PlayerSlice } from "./players/reducers";
import { CommonSlice } from "./common/reducers";
import { BatchSlice } from "./batches/reducers";
import { ToastSlice } from "./Toast/reducers";
import { ProgramSlice } from "./programs/reducers";
import { VenueSlice } from "./venue/reducers";

const rootReducer = combineReducers({
  [UserSlice.name]: UserSlice.reducer,
  [PlayerSlice.name]: PlayerSlice.reducer,
  [CommonSlice.name]: CommonSlice.reducer,
  [BatchSlice.name]: BatchSlice.reducer,
  [ToastSlice.name]: ToastSlice.reducer,
  [ProgramSlice.name]: ProgramSlice.reducer,
  [VenueSlice.name]: VenueSlice.reducer,
});

export default rootReducer;
