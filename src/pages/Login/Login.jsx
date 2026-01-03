import React, { useState } from "react";
import API from "../../api/axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


const handleLogin = async (e) => {
  e.preventDefault();
  if (!email || !password) {
  toast.warning("All fields are required");
  return;
}

  try {
    const res = await API.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);
    toast.success(res.data.message);

    // ✅ FIX: redirect to HOME instead of event-register
    navigate("/", { replace: true });

  } catch (err) {
    toast.error(err.response?.data?.message || "Login failed");
  }
};

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="auth-page">
          <div className="auth-container">
            <h2>Login</h2>

            {/* ✅ CONNECTED INPUTS */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>

            <p>
              New user?{" "}
              <span onClick={() => navigate("/user-register")}>
                Create account
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
