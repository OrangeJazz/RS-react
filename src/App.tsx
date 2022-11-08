import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import {
  NotFoundPage,
  AboutPage,
  MainPage,
  FormPage,
  APIPage,
  ItemPage,
} from "./pages";
import { Layout } from "./components";
import reducer from "./store/reducer";
import { initialState, State } from "store/store";
import { Actions } from "store/actions";

export const Context = React.createContext<{
  state: State;
  dispatch: (action: Actions) => void;
}>({
  state: initialState,
  dispatch: () => {},
});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="api" element={<APIPage />} />
          <Route path="api/:name" element={<ItemPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Context.Provider>
  );
}

export default App;
