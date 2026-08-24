import { motion } from "framer-motion";
import { FaGlobeAmericas, FaUsers, FaBullhorn } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import candidateImg1 from "../assets/Morand2.jpg";
import candidateImg2 from "../assets/Morand4.jpeg";
import "../styles/AboutSection.css";

function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="about-page-section">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="about-tag">{t("aboutTag")}</p>
          <h2>{t("aboutTitle")}</h2>

          <p className="about-lead">{t("aboutLead")}</p>

          <p>{t("aboutText1")}</p>

          <p>{t("aboutText2")}</p>
        </motion.div>

        <motion.div
          className="about-images"
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-img-card top">
            <img src={candidateImg1} alt="Ronald Morand portrait" />
          </div>

          <div className="about-img-card bottom">
            <img src={candidateImg2} alt="Ronald Morand with community" />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="about-mission-grid"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-mission-card">
          <FaUsers className="about-icon" />
          <h3>{t("missionCommunityTitle")}</h3>
          <p>{t("missionCommunityText")}</p>
        </div>

        <div className="about-mission-card">
          <FaBullhorn className="about-icon" />
          <h3>{t("missionLeadershipTitle")}</h3>
          <p>{t("missionLeadershipText")}</p>
        </div>

        <div className="about-mission-card">
          <FaGlobeAmericas className="about-icon" />
          <h3>{t("missionVisionTitle")}</h3>
          <p>{t("missionVisionText")}</p>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
