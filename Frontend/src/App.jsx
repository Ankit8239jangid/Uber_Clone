import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Pages/Layout";
import UserLoginPage from "./Components/auth/User_Login";
import User_Signup from "./Components/auth/User_Signup";
import Dashbord from "./Components/Dashboard/Dashbord";
import Hero from "./Components/Pages/Home/Hero";

import CaptainRegistration from "./Components/auth/Captain_auth/CaptainRegistration";
import CaptanLoginPage from "./Components/auth/Captain_auth/Captain_Login";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Hero />} />
          <Route path="/dashbord" element={<Dashbord />} />
        </Route>
        <Route path="/user-signup" element={<User_Signup />} />
        <Route path="/user-login" element={<UserLoginPage />} />
        <Route path="/Captain-Registration" element={<CaptainRegistration />} />
        <Route path="/Captain-login" element={<CaptanLoginPage />} />
      </Routes>

    </BrowserRouter>
  );
}
