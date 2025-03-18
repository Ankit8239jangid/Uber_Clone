import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Pages/Home/LandingPage";
import CaptanLoginPage from "./Components/auth/Captain_auth/User_Login";
import Captin_Signup from "./Components/auth/Captain_auth/Captin_Signup";
import Dashbord from "./Components/Dashbord/Dashbord";
import { Home } from "lucide-react";
import Hero from "./Components/Pages/Home/Hero";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} >
            <Route path="/" element={<Hero/>} />
            <Route path="/dashbord" element={<Dashbord />} />
          </Route>
            <Route path="/signup" element={<Captin_Signup />} />
            <Route path="/login" element={<CaptanLoginPage />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}