import { motion } from "framer-motion";
import {
  FaUsers,
  FaGlobeAmericas,
  FaSeedling,
  FaQuoteLeft,
} from "react-icons/fa";
import candidateImg1 from "../assets/Morand2.jpg";
import candidateImg2 from "../assets/Morand1.jpg";
import "../styles/CampaignSpotlight.css";

function CampaignSpotlight() {
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
            <p>Building hope through service, unity, and action.</p>
          </div>
        </motion.div>

        <motion.div
          className="spotlight-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="spotlight-tag">A Vision for Haiti</p>
          <h2>Leadership Rooted in Community</h2>

          <p className="spotlight-lead">
            Ronald Morand’s campaign is focused on service, unity, and
            progress.
          </p>

          <p>
            This movement is about empowering communities, creating
            opportunity, and building a better future for Haiti.
          </p>

          <p>
            With support from people at home and abroad, this campaign can
            expand its outreach, strengthen its message, and reach more
            families across the country.
          </p>

          <div className="spotlight-points">
            <div className="point-card glass-panel">
              <FaUsers className="point-icon" />
              <span>Community First</span>
            </div>

            <div className="point-card glass-panel">
              <FaGlobeAmericas className="point-icon" />
              <span>Global Support</span>
            </div>

            <div className="point-card glass-panel">
              <FaSeedling className="point-icon" />
              <span>Future-Focused Leadership</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CampaignSpotlight;
