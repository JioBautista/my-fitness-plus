import React from "react";
import Layout from "./layout/Layout";
import BMICalculator from "./pages/BMICalculator";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<Layout />}>
            <Route path="calculator" element={<BMICalculator />} />
          </Route>
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
