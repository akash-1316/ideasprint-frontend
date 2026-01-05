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
        <div className="date-pill">
          <span className="dot"></span>
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
          Register for Online Event →
        </button>

        {/* 🔥 OFFER PILLS */}
        <div className="offer-pills">
          <div className="offer-pill early">
            🟢 Early Bird Offer Live
          </div>

          <div className="offer-pill slots">
            🔥 Few Slots Left
          </div>
        </div>
      </div>

      {/* PRICING */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* PROBLEM DOMAINS */}
      <section id="problems">
        <ProblemDomains />
      </section>

      {/* REWARDS */}
      <section id="rewards">
        <Rewards />
      </section>

      {/* FOOTER */}
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
