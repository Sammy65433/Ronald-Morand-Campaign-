import { motion } from "framer-motion";
import { FaGlobeAmericas, FaUsers, FaBullhorn } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import candidateImg1 from "../assets/Morand2.jpg";
import candidateImg2 from "../assets/Morand4.jpeg";
import featuredAboutImg from "../assets/Morand1.jpg";
import { aboutBiography } from "../data/aboutBiography";
import "../styles/AboutSection.css";

function AboutSection() {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language.startsWith("fr")
    ? "fr"
    : i18n.language.startsWith("ht")
    ? "ht"
    : "en";

  return (
    <section className="about-page-section">
      <div className="about-bg-orb about-orb-one"></div>
      <div className="about-bg-orb about-orb-two"></div>

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

      <motion.div
        className="about-long-bio glass-article"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="about-long-bio-header">
          <div className="about-long-bio-title-wrap">
            <span className="about-article-kicker">Campaign Biography</span>
            <h3 className="about-long-bio-title">{t("aboutTitle")}</h3>
          </div>

          <div className="about-long-bio-image">
            <img src={featuredAboutImg} alt="Ronald Morand featured portrait" />
          </div>
        </div>

        <div className="about-long-bio-text">
          {aboutBiography[currentLanguage]
            .trim()
            .split("\n\n")
            .map((paragraph, index) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
