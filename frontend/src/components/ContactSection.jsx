import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../styles/ContactSection.css";

function ContactSection() {
  const { t } = useTranslation();

  return (
    <section className="contact-page">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="contact-tag">{t("contactTag")}</p>
        <h2>{t("contactTitle")}</h2>
        <p className="contact-subtext">{t("contactSubtext")}</p>
      </motion.div>

      <div className="contact-layout">
        <motion.div
          className="contact-info glass-card"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-info-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>{t("emailLabel")}</h3>
              <p>Rmorand2026@gmail.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>{t("campaignSupport")}</h3>
              <p>{t("campaignSupportText")}</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="contact-form glass-card"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <input type="hidden" name="form-name" value="contact" />

          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder={t("fullName")}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t("emailAddress")}
              required
            />
          </div>

          <input type="text" name="phone" placeholder={t("phone")} />

          <textarea
            name="message"
            placeholder={t("messagePlaceholder")}
            rows="7"
            required
          ></textarea>

          <button type="submit" className="contact-submit-btn">
            <FaPaperPlane />
            {t("sendMessage")}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactSection;
