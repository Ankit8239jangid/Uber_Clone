import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Pages/Layout";
import UserLoginPage from "./Components/auth/User_Login";
import User_Signup from "./Components/auth/User_Signup";

import Hero from "./Components/Pages/Home/Hero";
import CaptainRegistration from "./Components/auth/Captain_auth/CaptainRegistration";
import CaptanLoginPage from "./Components/auth/Captain_auth/Captain_Login";
import ProtectedRoute from "./Components/auth/ProtectedRoute";
import { AuthProvider } from "./Components/context/AuthContext"; // Ensure correct path
import Dashbord from "./Components/Dashboard/Dashbord";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />

            <Route path="/dashboard" element={
              <ProtectedRoute >
                <Dashbord />
              </ProtectedRoute>

            } />
          </Route>
          <Route path="/user-signup" element={<User_Signup />} />
          <Route path="/user-login" element={<UserLoginPage />} />
          <Route path="/Captain-Registration" element={<CaptainRegistration />} />
          <Route path="/Captain-login" element={<CaptanLoginPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
