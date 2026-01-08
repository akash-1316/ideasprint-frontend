import React from "react";
import "./home.css";
import Countdown from "../../components/Countdown/countdown";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Pricing from "../../components/Pricing/Pricing";
import Rewards from "../../components/Rewards/Rewards";
import Footer from "../../components/Footer/footer";
import ProblemDomains from "../../components/Problems/Problems";

const Home = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    const token = localStorage.getItem("token");

    if (!token || token === "undefined") {
      localStorage.setItem("redirectAfterLogin", "/event-register");
      navigate("/login");
    } else {
      navigate("/event-register");
    }
  };

  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <div className="home">
        {/* 🗓️ DATE PILL – GREEN */}
        <div className="date-pill offer-pill date-green">
          <span className="calendar-icon">🗓️</span>
          <div>
            <p className="date">Jan 24th, 2026</p>
            <p className="mode">Offline Event</p>
          </div>
        </div>

        <h1>
          Think bold <br /> <span>Build fast.</span>
        </h1>

        <p className="subtitle">
          IdeaSprint · RAIC × IIT Tirupati
          <br /> Hackathon · 24 Jan
        </p>

        <Countdown />

        <button className="cta" onClick={handleRegisterClick}>
          Register for the Event →
        </button>

        {/* 🔥 INFO PILLS */}
        <div className="offer-pills">
          <span className="offer-pill open">🔥 Registration Open</span>
          <span className="offer-pill prizes">🏆 Exciting Prizes</span>
        </div>
      </div>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="problems">
        <ProblemDomains />
      </section>

      <section id="rewards">
        <Rewards />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
