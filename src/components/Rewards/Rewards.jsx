 import React from 'react'
 import './Rewards.css'
 const Rewards = () => {
   return (
     <section className="rewards-section" id="rewards">
 <div className="rewards-container">
        {/* LEFT CONTENT */}
        <div className="rewards-left">
          <span className="rewards-tag">🏆 PRIZES & PERKS</span>

          <h2>
            Win Big.
            <br />
            <span>₹60,000 Prize Pool</span>
          </h2>

          <p className="rewards-desc">
            Compete for the <strong>Top 3 Positions</strong>. Winners take home
            cash prizes, exclusive merchandise, and recognized certifications.
          </p>

          <ul className="rewards-list">
            <li>
              <span className="icon">💰</span>
              <div>
                <h4>Cash Rewards</h4>
                <p>Prizes for 1st, 2nd, and 3rd place teams.</p>
              </div>
            </li>

            <li>
              <span className="icon">🎁</span>
              <div>
                <h4>Exclusive Merch</h4>
                <p>Official goodies and RAIC merchandise.</p>
              </div>
            </li>

            <li>
              <span className="icon">📜</span>
              <div>
                <h4>Certifications</h4>
                <p>Verified certificates for all participants.</p>
              </div>
            </li>

            <li>
              <span className="icon">🚀</span>
              <div>
                <h4>Internship Opportunities</h4>
                <p>Top performers get exclusive internship chances.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* RIGHT VISUAL */}
        <div className="rewards-right">
          <div className="rank-card">
            <h1>#1</h1>
            <p>WIN IT ALL</p>
          </div>

          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>

          <span className="float-icon rocket">🚀</span>
          <span className="float-icon laptop">💻</span>
        </div>
      </div>
</section>
   )
 }
 
 export default Rewards
 