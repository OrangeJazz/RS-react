import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFoundPage, AboutPage, MainPage } from "./pages";
import { Layout } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
