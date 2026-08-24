import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SupportSection() {
  const { t } = useTranslation();

  const cards = [
    { amount: "$25", text: t("support25") },
    { amount: "$50", text: t("support50") },
    { amount: "$100", text: t("support100") },
  ];

  return (
    <section className="section support-section">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>{t("supportTitle")}</h2>
        <p>{t("supportText")}</p>

        <div className="support-cards">
          {cards.map((card, index) => (
            <div className="support-card" key={index}>
              <h3>{card.amount}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <Link to="/donate" className="hero-btn">
          {t("contributeToday")}
        </Link>
      </motion.div>
    </section>
  );
}

export default SupportSection;
