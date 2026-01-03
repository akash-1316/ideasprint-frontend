import React, { useEffect, useState } from "react";
import "./Success.css";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/success/status").then((res) => {
      setSuccess(res.data.success);

      // ✅ Redirect to home after success (3 seconds)
      if (res.data.success) {
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 3000);
      }
    });
  }, [navigate]);

  return (
    <div className="success-page">
      <div className={`success-card ${success ? "success" : "pending"}`}>
        <div className="success-icon">
          {success ? "🎉" : "⏳"}
        </div>

        <h2>
          {success
            ? "Registration Confirmed!"
            : "Payment Under Verification"}
        </h2>

        <p>
          {success
            ? "Your payment has been verified successfully. Redirecting to home..."
            : "Your payment is under manual verification. Please wait for confirmation."}
        </p>
      </div>
    </div>
  );
};

export default Success;
