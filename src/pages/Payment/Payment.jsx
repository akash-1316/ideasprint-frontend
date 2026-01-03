import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useNavigate } from "react-router-dom";
import upiImage from "../../assets/upi-qr.jpeg";
import API from "../../api/axios";
import { toast } from "react-toastify";

const Payment = () => {
  const navigate = useNavigate();

  // ✅ SLAB PRICING (SINGLE SOURCE OF TRUTH)
  const PRICE_MAP = {
    1: 150,
    2: 250,
    3: 350,
  };

  const [utr, setUtr] = useState("");
  const [file, setFile] = useState(null);
  const [teamSize, setTeamSize] = useState(1);
  const [amount, setAmount] = useState(150);

  // 🔥 READ TEAM SIZE FROM REGISTER PAGE
  useEffect(() => {
    const storedSize = Number(localStorage.getItem("teamSize")) || 1;
    setTeamSize(storedSize);
    setAmount(PRICE_MAP[storedSize]);
  }, []);

  const submitPayment = async () => {
    if (!utr || !file) {
      toast.warning("Please enter UTR and upload screenshot");
      return;
    }

    const formData = new FormData();
    formData.append("utr", utr);
    formData.append("amount", amount); // ✅ correct slab amount
    formData.append("screenshot", file);

    try {
      await API.post("/payment/submit", formData);
      toast.success("Payment submitted successfully");
      navigate("/success");
    } catch (err) {
      toast.error(err.response?.data?.message || "Payment failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="payment-container">
        <h2 className="payment-title">Payment Verification</h2>

        <div className="amount-box">
          <h1>₹{amount}</h1>
          <p>{teamSize} member(s) · Online Event</p>
        </div>

        <div className="payment-content">
          {/* LEFT : QR */}
          <div className="qr-box">
            <img src={upiImage} alt="UPI QR" />
            <p className="upi-text">UPI ID</p>
            <p className="upi-id">7569417341-2@axl</p>
          </div>

          {/* RIGHT : FORM */}
          <div className="payment-form">
            <input
              type="text"
              placeholder="Enter 12-digit UTR"
              value={utr}
              onChange={(e) => setUtr(e.target.value)}
            />

            {/* ✅ Upload UI (UNCHANGED) */}
            <label className="upload-box">
              <div className="upload-inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="upload-icon"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>

                <span>
                  {file ? file.name : "Upload Payment Screenshot"}
                </span>
              </div>

              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

            <button onClick={submitPayment}>Submit Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
