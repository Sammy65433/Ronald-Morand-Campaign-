import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaMobileAlt,
  FaCopy,
  FaLock,
  FaHandHoldingHeart,
} from "react-icons/fa";
import "../styles/DonateSection.css";
import ronaldImg from "../assets/Morand2.jpg";
import communityImg from "../assets/Morandcomm2.jpg";

function DonateSection() {
  const goal = 100000;
  const raised = 0;
  const donors = 0;
  const progress = (raised / goal) * 100;

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
  };

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://donorbox.org/widgets.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://donorbox.org/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="donate-page">
      <motion.div
        className="donate-hero-shell"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="donate-hero-text">
          <p className="donate-tag">Support the Campaign</p>
          <h1>Help Fund Ronald Morand’s 2026 Election Campaign</h1>
          <p className="donate-subtext">
            Every donation helps expand outreach, strengthen community support,
            and move this campaign forward in Haiti. Your contribution helps
            power a message of leadership, unity, and lasting impact.
          </p>

          <div className="donate-hero-actions">
            <a
              href="https://donorbox.org/ronald-morand-campaign-fund"
              target="_blank"
              rel="noopener noreferrer"
              className="donate-primary-btn"
            >
              <FaLock />
              Donate Securely
            </a>

            <div className="donate-impact-chip">
              <FaHandHoldingHeart />
              <span>Every contribution makes a difference</span>
            </div>
          </div>
        </div>

        <div className="donate-hero-visual">
          <div className="donate-main-image-card glass-card">
            <img
              src={ronaldImg}
              alt="Ronald Morand"
              className="donate-main-image"
            />
            <div className="donate-floating-badge">Morand 2026</div>
          </div>

          <div className="donate-mini-card glass-card">
            <img
              src={communityImg}
              alt="Community support"
              className="donate-mini-image"
            />
            <div className="donate-mini-text">
              <strong>Community First</strong>
              <span>Building support through outreach and action</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="donate-stats-row"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="donate-stat-card">
          <span>Goal</span>
          <h3>$100,000</h3>
        </div>
        <div className="donate-stat-card">
          <span>Raised</span>
          <h3>To Be Updated</h3>
        </div>
        <div className="donate-stat-card">
          <span>Supporters</span>
          <h3>{donors}</h3>
        </div>
      </motion.div>

      <motion.div
        className="progress-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="progress-top">
          <span>Campaign Progress</span>
          <span>{progress.toFixed(0)}%</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </motion.div>

      <motion.div
        className="donate-impact-row"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="impact-card glass-card">
          <h4>$25</h4>
          <p>Support the movement</p>
        </div>
        <div className="impact-card glass-card">
          <h4>$50</h4>
          <p>Help us reach more voters</p>
        </div>
        <div className="impact-card glass-card">
          <h4>$100</h4>
          <p>Fund campaign outreach</p>
        </div>
        <div className="impact-card glass-card">
          <h4>$250</h4>
          <p>Support community events</p>
        </div>
      </motion.div>

      <motion.div
        className="donorbox-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="donorbox-copy">
          <p className="donorbox-tag">Secure Online Giving</p>
          <h2>Make Your Contribution Today</h2>
          <p>
            Give online through our secure donation form. Your support helps
            strengthen outreach, grow visibility, and move the campaign forward.
          </p>
        </div>

        <div className="donorbox-embed-wrapper glass-card">
          <div
            dangerouslySetInnerHTML={{
              __html: `<dbox-widget campaign="ronald-morand-campaign-fund" type="donation_form" enable-auto-scroll="true"></dbox-widget>`,
            }}
          />
        </div>
      </motion.div>

      <div className="donate-grid">
        <motion.div
          className="donation-card glass-card"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="donation-card-header">
            <FaMobileAlt className="donation-icon" />
            <h3>Zelle Donation</h3>
          </div>
          <p className="donation-label">Send your contribution to:</p>
          <div className="donation-value-row">
            <p className="donation-value">267-616-3905</p>
            <button
              onClick={() => copyText("267-616-3905")}
              className="copy-btn"
            >
              <FaCopy />
            </button>
          </div>
          <p className="donation-note">
            Use Zelle for fast and direct campaign support.
          </p>
        </motion.div>

        <motion.div
          className="donation-card glass-card"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="donation-card-header">
            <FaUniversity className="donation-icon" />
            <h3>Bank Transfer</h3>
          </div>

          <div className="bank-row">
            <span>Account Number</span>
            <div className="donation-value-row">
              <p className="donation-value">52709339541</p>
              <button
                onClick={() => copyText("52709339541")}
                className="copy-btn"
              >
                <FaCopy />
              </button>
            </div>
          </div>

          <div className="bank-row">
            <span>Routing Number</span>
            <div className="donation-value-row">
              <p className="donation-value">10212000250</p>
              <button
                onClick={() => copyText("10212000250")}
                className="copy-btn"
              >
                <FaCopy />
              </button>
            </div>
          </div>

          <p className="donation-note">
            Please confirm account details before sending your donation.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="donation-message glass-card"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <FaHandHoldingHeart className="message-icon" />
        <h3>Thank You for Supporting the Campaign</h3>
        <p>
          Your generosity helps strengthen the movement, expand our outreach,
          and build a better future for Haiti through leadership and community
          action.
        </p>
      </motion.div>
    </section>
  );
}

export default DonateSection;
