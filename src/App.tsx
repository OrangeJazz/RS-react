import React from "react";
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
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

function App() {
  return (
    <Provider store={setupStore()}>
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
    </Provider>
  );
}

export default App;
