import { createSlice } from "@reduxjs/toolkit";
import { FormData } from "../../data/types";

export const initialState: FormData = {
  firstName: "",
  lastName: "",
  image: {} as FileList,
  date: "",
  dollType: [],
  rare: false,
  favBrand: "",
  promoPermission: false,
};

export const slice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeFirstName(state, action) {
      state.firstName = action.payload;
    },
    changeLastName(state, action) {
      state.lastName = action.payload;
    },
    changeFile(state, action) {
      state.image = action.payload;
    },
    changeDate(state, action) {
      state.date = action.payload;
    },
    changeFavBrand(state, action) {
      state.favBrand = action.payload;
    },
    changePromo(state, action) {
      state.promoPermission = action.payload;
    },
    changeRare(state, action) {
      state.rare = action.payload;
    },
    addDollType(state, action) {
      state.dollType.push(action.payload);
    },
    deleteDollType(state, action) {
      state.dollType.filter((item) => item !== action.payload);
    },
  },
});

export default slice.reducer;

export const {
  changeFirstName,
  changeLastName,
  changeFile,
  changeDate,
  changeFavBrand,
  changePromo,
  changeRare,
  addDollType,
  deleteDollType,
} = slice.actions;
