import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Pages/Home/LandingPage";
import CaptanLoginPage from "./Components/auth/Captain_auth/User_Login";
import Captin_Signup from "./Components/auth/Captain_auth/Captin_Signup";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<CaptanLoginPage />} />
          <Route path="/signup" element={<Captin_Signup />} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}