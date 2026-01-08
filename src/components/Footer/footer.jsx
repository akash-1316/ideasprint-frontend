import React from "react";
import "./footer.css";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <h3>RAIC · IdeaSprint</h3>
          <p>
            Igniting innovation through code. Join the most electrifying
            hackathon powered by RAIC in collaboration with IIT Tirupati.
          </p>

          {/* SOCIAL ICONS */}
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/raic_rec?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/raghuaiclub/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://chat.whatsapp.com/GbeHpWdczSS9XK6iFAR9X4"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* EVENT */}
        <div className="footer-col">
          <h4>Event</h4>
          <ul>
            <li>Pricing</li>
            <li>Problems</li>
            <li>Prizes</li>
          </ul>
        </div>

        {/* TEAM */}
        <div className="footer-col">
          <h4>Team</h4>

          <p className="footer-sub">Student Coordinators</p>
          <ul>
            <li>G. Bala Krishna</li>
            <li>S. Jyotshna Sree</li>
          </ul>

          <p className="footer-sub">Faculty Coordinators</p>
          <ul>
            <li>Dr. S. Vidya Sagar Appaji</li>
            <li>G. Uma Devi</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Get in Touch</h4>
          <ul className="contact-list">
            <li>📍 Raghu Engineering College, Dakamarri, Visakhapatnam</li>
            <li>📞 +91 91774 26430 (G. Bala Krishna)</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 RAIC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
