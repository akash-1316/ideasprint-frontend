import React from "react";
import "./home.css";
import Countdown from "../../components/Countdown/countdown";
import Navbar from "../../components/Navbar/navbar";
import Pricing from "../../components/Pricing/Pricing";
import Rewards from "../../components/Rewards/Rewards";
import Footer from "../../components/Footer/footer";
import ProblemDomains from "../../components/Problems/Problems";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <div className="home">
        {/* DATE PILL */}
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

        {/* ⏳ COUNTDOWN – NOT REMOVED */}
        <Countdown />

        {/* 🚫 REGISTRATIONS CLOSED MESSAGE */}
        <div className="registration-closed">
          🚫 Registrations for the event are closed.
          <br />
          We’ll get back to you soon!
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
