import React from "react";
import Layout from "./layout/Layout";
import LogInForm from "./loginForm/LogInForm";
import BMICalculator from "./pages/BMICalculator";
import WorkoutsLayout from "./layout/WorkoutsLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<Layout />}>
            <Route path="/workouts" element={<WorkoutsLayout />}>
            </Route>
            <Route path="calculator" element={<BMICalculator />} />
            <Route path="user" element={<LogInForm />} />
          </Route>
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
