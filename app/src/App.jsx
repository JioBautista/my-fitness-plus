import React from "react";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ExerciseCatalog from "./pages/ExerciseCatalog";
import Exercises from "./pages/Exercises";
import Programs from "./pages/Programs";
import Nutrition from "./pages/Nutrition";
import Settings from "./pages/Settings";
import LogInForm from "./loginForm/LogInForm";
import SignUpForm from "./loginForm/SignUpForm";
import ForgotPassword from "./loginForm/ForgotPassword";
import ModalBox from "./modalBox/ModalBox";
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
            <Route index element={<Home />} />
            <Route path="catalogs" element={<ExerciseCatalog />} />
            <Route path="login" element={<LogInForm />} />
            <Route path="register" element={<SignUpForm />} />
            <Route path="forgotpass" element={<ForgotPassword />} />
            <Route
              path={`/workouts/${url}`}
              element={<Exercises params={url} />}
            />
            <Route
              path="programs"
              element={<Programs grabUrl={grabUrl} params={url} />}
            >
              <Route path={`/programs/${url}`} element={<ModalBox />} />
            </Route>
            <Route path="nutrition" element={<Nutrition />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
