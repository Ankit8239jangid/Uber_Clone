import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Pages/Layout";
import CaptanLoginPage from "./Components/auth/User_Login";
import User_Signup from "./Components/auth/User_Signup";
import Dashbord from "./Components/Dashboard/Dashbord";

import Hero from "./Components/Pages/Home/Hero";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Hero />} />
            <Route path="/dashbord" element={<Dashbord />} />
          </Route>
          <Route path="/signup" element={<User_Signup />} />
          <Route path="/login" element={<CaptanLoginPage />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}