import React, { useState } from "react";
import "./URegister.css";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";
import { toast } from "react-toastify";

const URegister = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      toast.warning("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      toast.success(res.data.message);
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="auth-page">
        <div className="auth-container">
          <h2>Create Account</h2>

          <input type="text" placeholder="Full Name" value={name}
            onChange={(e) => setName(e.target.value)} />

          <input type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} />

          <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} />

          <input type="password" placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} />

          <button type="submit">Create Account</button>

          <p>
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default URegister;
