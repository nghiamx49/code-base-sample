import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationLayout from "../layout/application";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import PrivateRouter from "./PrivateRouter";
import RegisterAndLoginRouter from "./RegisterAndLoginRouter";


export default function ApplicationRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRouter>
                <HomePage />
              </PrivateRouter>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/login"
            element={
              <RegisterAndLoginRouter>
                <LoginPage />
              </RegisterAndLoginRouter>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/register"
            element={
              <RegisterAndLoginRouter>
                <RegisterPage />
              </RegisterAndLoginRouter>
            }
          />
        </Routes>
      </BrowserRouter>
    );
}