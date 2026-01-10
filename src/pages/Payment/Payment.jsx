import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useNavigate } from "react-router-dom";
import upiImage from "../../assets/upi-qr.jpeg";
import API from "../../api/axios";
import { toast } from "react-toastify";

const Payment = () => {
  const navigate = useNavigate();

  // ✅ NORMAL PRICING
  const PRICE_MAP = {
    1: 200,
    2: 300,
    3: 400,
  };

  const [utr, setUtr] = useState("");
  const [file, setFile] = useState(null);
  const [teamSize, setTeamSize] = useState(1);
  const [amount, setAmount] = useState(200);
  const [submitting, setSubmitting] = useState(false);

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
    formData.append("amount", amount);
    formData.append("screenshot", file);

    try {
      setSubmitting(true);

      await API.post("/payment/submit", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Payment submitted successfully");
      navigate("/success");
    } catch (err) {
      toast.error(err.response?.data?.message || "Payment failed");
    } finally {
      setSubmitting(false);
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
          <div className="qr-box">
            <img src={upiImage} alt="UPI QR" />
            <p className="upi-text">UPI ID</p>
            <p className="upi-id">9177426430@axl</p>
          </div>

          <div className="payment-form">
            <input
              type="text"
              placeholder="Enter 12-digit UTR"
              value={utr}
              onChange={(e) => setUtr(e.target.value)}
            />

            <label className="upload-box">
              <div className="upload-inner">
                <span>{file ? file.name : "Upload Payment Screenshot"}</span>
              </div>
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

            <button onClick={submitPayment} disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Payment"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
