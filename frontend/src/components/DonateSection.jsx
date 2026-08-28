import { motion } from "framer-motion";
import {
  FaUniversity,
  FaMobileAlt,
  FaCopy,
  FaLock,
  FaHandHoldingHeart,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../styles/DonateSection.css";
import ronaldImg from "../assets/Morand2.jpg";
import communityImg from "../assets/Morandcomm2.jpg";

function DonateSection() {
  const { t } = useTranslation();

  const goal = 100000;
  const raised = 0;
  const donors = 0;
  const progress = (raised / goal) * 100;

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
  };

  return (
    <section className="donate-page">
      <motion.div
        className="donate-hero-shell"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="donate-hero-text">
          <p className="donate-tag">{t("donateTag")}</p>
          <h1>{t("donateTitle")}</h1>
          <p className="donate-subtext">{t("donateSubtext")}</p>

          <div className="donate-hero-actions">
            <a
              href="https://donorbox.org/ronald-morand-campaign-fund"
              target="_blank"
              rel="noopener noreferrer"
              className="donate-primary-btn"
            >
              <FaLock />
              {t("donateSecurely")}
            </a>

            <div className="donate-impact-chip">
              <FaHandHoldingHeart />
              <span>{t("donateImpactChip")}</span>
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
              <strong>{t("missionCommunityTitle")}</strong>
              <span>{t("impact100")}</span>
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
          <span>{t("goal")}</span>
          <h3>$100,000</h3>
        </div>

        <div className="donate-stat-card">
          <span>{t("raised")}</span>
          <h3>{t("toBeUpdated")}</h3>
        </div>

        <div className="donate-stat-card">
          <span>{t("supporters")}</span>
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
          <span>{t("campaignProgress")}</span>
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
          <h4>$100</h4>
          <p>{t("impact25")}</p>
        </div>

        <div className="impact-card glass-card">
          <h4>$250</h4>
          <p>{t("impact50")}</p>
        </div>

        <div className="impact-card glass-card">
          <h4>$500</h4>
          <p>{t("impact100")}</p>
        </div>

        <div className="impact-card glass-card">
          <h4>$1000</h4>
          <p>{t("impact250")}</p>
        </div>
      </motion.div>

      <motion.div
        className="donorbox-cta glass-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="donorbox-copy">
          <p className="donorbox-tag">{t("donorboxTag")}</p>
          <h2>{t("donorboxTitle")}</h2>
          <p>{t("donorboxText")}</p>
        </div>

        <a
          href="https://donorbox.org/ronald-morand-campaign-fund"
          target="_blank"
          rel="noopener noreferrer"
          className="donorbox-link-btn"
        >
          <FaLock />
          {t("donateSecurely")}
          <FaArrowRight />
        </a>
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
            <h3>{t("zelleTitle")}</h3>
          </div>

          <p className="donation-label">{t("zelleLabel")}</p>

          <div className="donation-value-row">
            <p className="donation-value">267-616-3905</p>
            <button
              onClick={() => copyText("267-616-3905")}
              className="copy-btn"
            >
              <FaCopy />
            </button>
          </div>

          <p className="donation-note">{t("zelleNote")}</p>
        </motion.div>

        <motion.div
          className="donation-card glass-card"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="donation-card-header">
            <FaUniversity className="donation-icon" />
            <h3>{t("bankTitle")}</h3>
          </div>

          <div className="bank-row">
            <span>{t("accountNumber")}</span>
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
            <span>{t("routingNumber")}</span>
            <div className="donation-value-row">
              <p className="donation-value">021200025</p>
              <button
                onClick={() => copyText("021200025")}
                className="copy-btn"
              >
                <FaCopy />
              </button>
            </div>
          </div>

          <div className="bank-row">
            <span>Email</span>
            <div className="donation-value-row">
              <p className="donation-value">Rmorand2026@gmail.com</p>
              <button
                onClick={() => copyText("rmorand2026@gmail.com")}
                className="copy-btn"
              >
                <FaCopy />
              </button>
            </div>
          </div>

          <p className="donation-note">{t("bankNote")}</p>
        </motion.div>
      </div>

      <motion.div
        className="donation-message glass-card"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <FaHandHoldingHeart className="message-icon" />
        <h3>{t("thankYouTitle")}</h3>
        <p>{t("thankYouText")}</p>
      </motion.div>
    </section>
  );
}

export default DonateSection;
