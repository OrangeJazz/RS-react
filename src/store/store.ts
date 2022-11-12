import { combineReducers, configureStore } from "@reduxjs/toolkit";
import apiReducer from "./reducers/sliceApi";
import formReducer from "./reducers/sliceForm";

const rootReducer = combineReducers({
  apiReducer,
  formReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
