import React from "react";
import Layout from "./layout/Layout";
import LogInForm from "./loginForm/LogInForm";
import Exercises from "./pages/Exercises";
import Nutrition from "./pages/Nutrition";
// import BMICalculator from "./pages/BMICalculator";
import Settings from "./pages/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [url, setUrl] = React.useState("chest");

  const grabUrl = (data) => {
    setUrl(data);
  };

  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<Layout grabUrl={grabUrl} />}>
            <Route index element={<LogInForm />} />
            <Route
              path={`/workouts/${url}`}
              element={<Exercises params={url} />}
            />
            <Route path="nutrition" element={<Nutrition />} />
            {/* <Route path="calculator" element={<BMICalculator />} /> */}
            <Route path="settings" element={<Settings />} />
          </Route>
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
