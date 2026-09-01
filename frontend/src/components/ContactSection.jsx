import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaHandHoldingHeart,
  FaPhoneAlt,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";
import contactImg from "../assets/Morand4.jpeg";
import "../styles/ContactSection.css";

function ContactSection() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("mbgjodad");

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
          className="contact-info-panel"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-image-card glass-card">
            <img src={contactImg} alt="Ronald Morand" className="contact-image" />
          </div>

          <div className="contact-info glass-card">
            <div className="contact-info-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>{t("emailLabel")}</h3>
                <p>Rmorand2026@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <h3>Zelle</h3>
                <p>267-616-3905</p>
              </div>
            </div>

            <div className="contact-info-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>{t("campaignSupport")}</h3>
                <p>{t("campaignSupportText")}</p>
              </div>
            </div>
          </div>

          <div className="contact-cta-card glass-card">
            <FaHandHoldingHeart className="contact-cta-icon" />
            <h3>{t("contactCtaTitle")}</h3>
            <p>{t("contactCtaText")}</p>

            <a
              href="https://donorbox.org/ronald-morand-campaign-fund"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-donate-btn"
            >
              {t("contactDonateNow")}
            </a>

          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="contact-form glass-card"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {state.succeeded ? (
            <p className="form-success">
              Thank you. Your message has been sent successfully.
            </p>
          ) : (
            <>
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

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <input
                type="text"
                name="phone"
                placeholder={t("phone")}
              />

              <textarea
                name="message"
                placeholder={t("messagePlaceholder")}
                rows="7"
                required
              ></textarea>

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={state.submitting}
              >
                <FaPaperPlane />
                {state.submitting ? "Sending..." : t("sendMessage")}
              </button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default ContactSection;
