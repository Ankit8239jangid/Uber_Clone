import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Pages/Layout";
import UserLoginPage from "./Components/auth/userAuth/User_Login";
import User_Signup from "./Components/auth/userAuth/User_Signup";
import Hero from "./Components/Pages/Home/Hero";
import CaptainRegistration from "./Components/auth/Captain_auth/CaptainRegistration";
import CaptainLoginPage from "./Components/auth/Captain_auth/Captain_Login"; // Fixed typo
import ProtectedRoute from "./Components/auth/ProtectedRoute";
import { AuthProvider } from "./Components/context/AuthContext";
import CaptainDashboard from "./Components/Dashboard/CaptianDashbord"; // Fixed typo
import Landing from "./Components/Pages/Landing/Landing";
import UserDashbord from "./Components/Dashboard/UserDashbord";


export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public routes with Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />}>
            </Route>
            <Route path="/Landing" element={<Landing />} />

            {/* Protected routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <UserDashbord />
                </ProtectedRoute>
              }
            />
            <Route
              path="/captain-dashboard"
              element={
                <ProtectedRoute captainOnly={true}>
                  <CaptainDashboard />
                // </ProtectedRoute>
              }
            />

            {/* Auth routes */}
            <Route path="/user-login" element={<UserLoginPage />} />
            <Route path="/user-signup" element={<User_Signup />} />
            <Route path="/captain-registration" element={<CaptainRegistration />} />
            <Route path="/captain-login" element={<CaptainLoginPage />} />
          </Route>


        </Routes>
      </AuthProvider>

    </BrowserRouter>
  );
}