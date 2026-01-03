import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// pages
import Home from "./pages/Home/home";
import Login from "./pages/Login/Login";
import UserRegister from "./pages/UserRegister/URegister";
import EventRegister from "./pages/Register/Register";
import Payment from "./pages/Payment/Payment";
import Success from "./pages/Success/Success";

// protected wrapper
import ProtectedRoute from "./components/ProtectedRoutes";

export default function App() {
  return (
   <>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-register" element={<UserRegister />} />

        {/* 🔒 PROTECTED ROUTES */}
        <Route
          path="/event-register"
          element={
            <ProtectedRoute>
              <EventRegister />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/success"
          element={
            <ProtectedRoute>
              <Success />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
   </>
  );
}
