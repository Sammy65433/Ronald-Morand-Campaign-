import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import "../styles/ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-page">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="contact-tag">Contact the Campaign</p>
        <h2>Get in Touch</h2>
        <p className="contact-subtext">
          Have a question, want to support the campaign, or looking to connect
          with the team? Send us a message and we will get back to you.
        </p>
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
              <h3>Email</h3>
              <p>RonaldMorandgoFundMe@Gmail.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>(267) 616-3905</p>
            </div>
          </div>

          <div className="contact-info-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Campaign Base</h3>
              <p>United States Support Network</p>
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
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
          </div>

          <input type="tel" name="phone" placeholder="Phone Number" />

          <textarea
            name="message"
            placeholder="Write your message here..."
            rows="7"
            required
          ></textarea>

          <button type="submit" className="contact-submit-btn">
            <FaPaperPlane />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactSection;
