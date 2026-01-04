import React, { useEffect, useState } from "react";
import "./Success.css";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Success = () => {
  const [status, setStatus] = useState("loading"); 
  // loading | pending | verified
  const navigate = useNavigate();

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await API.get("/success/status");

        if (!res.data.success) {
          setStatus("pending");
          return;
        }

        // ✅ VERIFIED
        setStatus("verified");

        setTimeout(() => {
          navigate("/", { replace: true });
        }, 3000);
      } catch (err) {
        // ❌ token invalid / API error
        toast.error("Session expired. Redirecting to home.");
        navigate("/", { replace: true });
      }
    };

    checkStatus();
  }, [navigate]);

  if (status === "loading") {
    return (
      <div className="success-page">
        <div className="success-card pending">
          <div className="success-icon">⏳</div>
          <h2>Checking payment status...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="success-page">
      <div className={`success-card ${status}`}>
        <div className="success-icon">
          {status === "verified" ? "🎉" : "⏳"}
        </div>

        <h2>
          {status === "verified"
            ? "Registration Confirmed!"
            : "Payment Under Verification"}
        </h2>

        <p>
          {status === "verified"
            ? "Your payment has been verified. Redirecting to home..."
            : "Your payment is under manual verification. Please wait."}
        </p>
      </div>
    </div>
  );
};

export default Success;
