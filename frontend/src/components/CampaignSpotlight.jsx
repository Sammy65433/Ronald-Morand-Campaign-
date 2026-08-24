import { motion } from "framer-motion";
import {
  FaUsers,
  FaGlobeAmericas,
  FaSeedling,
  FaQuoteLeft,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import candidateImg1 from "../assets/Morand2.jpg";
import candidateImg2 from "../assets/Morand1.jpg";
import "../styles/CampaignSpotlight.css";

function CampaignSpotlight() {
  const { t } = useTranslation();

  return (
    <section className="spotlight-section">
      <div className="spotlight-bg-shape one"></div>
      <div className="spotlight-bg-shape two"></div>

      <div className="spotlight-container">
        <motion.div
          className="spotlight-images"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="spotlight-img-card large glass-panel">
            <img src={candidateImg1} alt="Ronald Morand portrait" />
          </div>

          <div className="spotlight-img-card small glass-panel">
            <img src={candidateImg2} alt="Ronald Morand in community" />
          </div>

          <div className="spotlight-quote glass-panel">
            <FaQuoteLeft className="spotlight-quote-icon" />
            <p>{t("spotlightQuote")}</p>
          </div>
        </motion.div>

        <motion.div
          className="spotlight-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="spotlight-tag">{t("spotlightTag")}</p>
          <h2>{t("spotlightTitle")}</h2>

          <p className="spotlight-lead">{t("spotlightLead")}</p>

          <p>{t("spotlightText1")}</p>

          <p>{t("spotlightText2")}</p>

          <div className="spotlight-points">
            <div className="point-card glass-panel">
              <FaUsers className="point-icon" />
              <span>{t("spotlightPoint1")}</span>
            </div>

            <div className="point-card glass-panel">
              <FaGlobeAmericas className="point-icon" />
              <span>{t("spotlightPoint2")}</span>
            </div>

            <div className="point-card glass-panel">
              <FaSeedling className="point-icon" />
              <span>{t("spotlightPoint3")}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CampaignSpotlight;
