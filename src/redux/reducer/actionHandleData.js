import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataInsurance: "",
  dataImgs: "",
  dataImgsAccidents: "",
};

export const actionHandleData = createSlice({
  name: "loginGoogle",
  initialState,
  reducers: {
    addDataInsurance: (state, action) => {
      state.dataInsurance = action.payload.dataInsurance;
    },
    addDataImgs: (state, action) => {
      state.dataImgs = action.payload.dataImgs;
    },
    addImgsAccidents: (state, action) => {
      state.dataImgsAccidents = action.payload.dataImgsAccidents;
    },
  },
});

export const { addDataInsurance, addDataImgs, addImgsAccidents } =
  actionHandleData.actions;
export default actionHandleData.reducer;
