import { useState } from "react";
import "./Pricing.css";

export default function Pricing() {
  // ✅ SLAB PRICING
  const PRICE_MAP = {
    1: 150,
    2: 250,
    3: 350,
  };

  const [teamSize, setTeamSize] = useState(1);

  const totalAmount = PRICE_MAP[teamSize];

  return (
    <section className="pricing-section" id="pricing">
      <span className="pricing-tag">Pricing</span>

      <h2>
        Calculate Your <span>Pass Price</span>
      </h2>

      <p className="pricing-sub">
        Select your team size to see live pricing
      </p>

      <div className="pricing-card">
        {/* LEFT */}
        <div className="pricing-left">
          <p className="label">Participation Mode</p>

          <div className="ticket-box active">
            <div>
              <h4>Online Participation</h4>
              <p>Remote Access · 2 Rounds</p>
            </div>
            <span className="price">₹{PRICE_MAP[teamSize]}</span>
          </div>

          <p className="label">Team Size</p>
          <div className="team-size-options">
            {[1, 2, 3].map((size) => (
              <button
                key={size}
                className={teamSize === size ? "active" : ""}
                onClick={() => setTeamSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="pricing-right">
          <h4>Price Breakdown</h4>
          <p className="muted">Flat team pricing</p>

          <div className="row">
            <span>Team Size</span>
            <span>{teamSize} Member{teamSize > 1 ? "s" : ""}</span>
          </div>

          <div className="row">
            <span>Team Price</span>
            <span>₹{PRICE_MAP[teamSize]}</span>
          </div>

          <div className="divider"></div>

          <div className="total">
            <span>Total Amount</span>
            <span>₹{totalAmount}</span>
          </div>

          <p className="calc">
            {teamSize === 1 && "Solo Sprint – ₹150"}
            {teamSize === 2 && "Duo Drive – ₹250"}
            {teamSize === 3 && "Trio Thunder – ₹350"}
          </p>
        </div>
      </div>
    </section>
  );
}
