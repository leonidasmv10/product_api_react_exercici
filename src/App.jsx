import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </>
  );
};

export default App;
