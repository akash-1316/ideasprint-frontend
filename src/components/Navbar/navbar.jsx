import React, { useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import raicLogo from "../../assets/raic-logo.png";
import API from "../../api/axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    if (token) {
      API.get("/payment/status")
        .then((res) => {
          if (res.data?.success) {
            setPaymentInfo(res.data);
          } else {
            setPaymentInfo(null);
          }
        })
        .catch(() => setPaymentInfo(null));
    }
  }, []);
  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setPaymentInfo(null);
    setMenuOpen(false);
    toast.info("Logged out successfully");
    navigate("/");
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        {/* LEFT */}
        <div className="nav-left" onClick={() => navigate("/")}>
          <img src={raicLogo} alt="RAIC" />
          <span>IdeaSprint</span>
        </div>

        {/* CENTER (DESKTOP) */}
        <div className="menu-pill">
          <span onClick={() => scrollTo("pricing")}>Pricing</span>
          <span onClick={() => scrollTo("problems")}>Problems</span>
          <span onClick={() => scrollTo("rewards")}>Rewards</span>
          <span onClick={() => scrollTo("contact")}>Contact</span>
        </div>

        {/* RIGHT (DESKTOP) */}
        <div className="nav-actions">
          {!isLoggedIn ? (
            <>
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
              <button
                className="nav-btn"
                onClick={() => navigate("/user-register")}
              >
                Register
              </button>
            </>
          ) : (
            <>
              {paymentInfo && (
                <div className="payment-status-box">
                  <span>
                    <b>Leader:</b> {paymentInfo.leaderName || "—"}
                  </span>
                  <span>
                    <b>Team:</b> {paymentInfo.teamSize}
                  </span>
                  <span>
                    <b>Amount:</b> ₹{paymentInfo.amountPaid}
                  </span>
                  <span className={paymentInfo.paymentStatus}>
                    {paymentInfo.paymentStatus}
                  </span>
                </div>
              )}

              <button className="login-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="mobile-menu">
          {/* LINKS */}
          <div className="mobile-links">
            <span onClick={() => navigate("/")}>Pricing</span>
            <span onClick={() => navigate("/")}>Problems</span>
            <span onClick={() => navigate("/")}>Rewards</span>
            <span onClick={() => navigate("/")}>Contact</span>
          </div>

          {/* PAYMENT STATUS */}
          {isLoggedIn && paymentInfo && (
            <div className="mobile-payment-box">
              <div>
                <b>Leader:</b> {paymentInfo.leaderName || "—"}
              </div>
              <div>
                <b>Team:</b> {paymentInfo.teamSize}
              </div>
              <div>
                <b>Amount:</b> ₹{paymentInfo.amountPaid}
              </div>
              <div className={paymentInfo.paymentStatus}>
                {paymentInfo.paymentStatus}
              </div>
            </div>
          )}

          {/* ACTION BUTTONS */}
          <div className="mobile-actions">
            {!isLoggedIn ? (
              <>
                <button onClick={() => navigate("/login")}>Login</button>
                <button onClick={() => navigate("/user-register")}>
                  Register
                </button>
              </>
            ) : (
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
