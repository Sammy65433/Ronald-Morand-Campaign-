import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaHandHoldingHeart,
  FaUsers,
  FaLock,
  FaQuoteLeft,
} from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../styles/Hero.css";
import candidateImg1 from "../assets/Morand1.jpg";
import Countdown from "./Countdown";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-bg-shape hero-bg-one"></div>
      <div className="hero-bg-shape hero-bg-two"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="hero-tag">{t("heroTag")}</p>
        <h1>{t("heroTitle")}</h1>
        <p className="hero-text">{t("heroText")}</p>
        <p className="hero-text hero-text-strong">{t("heroText2")}</p>

        <div className="hero-mini-info">
          <div className="mini-pill">
            <FaCalendarAlt />
            <span>
              {t("electionDayLabel")} {t("electionDay")}
            </span>
          </div>
        </div>

        <div className="hero-actions">
          <a
            href="https://donorbox.org/ronald-morand-campaign-fund"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
          >
            <FaLock />
            {t("donateNow")}
          </a>

          <Link to="/about" className="hero-btn secondary-btn">
            {t("learnMore")}
          </Link>
        </div>

        <Countdown />

        <div className="hero-stats">
          <div className="stat-box glass-card">
            <FaCalendarAlt className="stat-icon" />
            <h3>2026</h3>
            <p>{t("heroStatYear")}</p>
          </div>

          <div className="stat-box glass-card">
            <FaUsers className="stat-icon" />
            <h3>Haiti</h3>
            <p>{t("heroStatCommunity")}</p>
          </div>

          <div className="stat-box glass-card">
            <FaHandHoldingHeart className="stat-icon" />
            <h3>100%</h3>
            <p>{t("heroStatGrassroots")}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hero-image-wrapper"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9 }}
      >
        <div className="hero-image-stack">
          <div className="flag-accent"></div>

          <div className="hero-image-card glass-card">
            <img src={candidateImg1} alt="Ronald Morand" className="hero-image" />
          </div>

          <div className="floating-badge glass-card">
            <FaGlobeAmericas className="badge-icon" />
            <span>🇭🇹 {t("heroBadge")}</span>
          </div>

          <div className="quote-card glass-card">
            <FaQuoteLeft className="quote-icon" />
            <p>{t("heroQuote")}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
