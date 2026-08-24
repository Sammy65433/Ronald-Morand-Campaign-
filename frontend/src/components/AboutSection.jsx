import { motion } from "framer-motion";
import { FaGlobeAmericas, FaUsers, FaBullhorn } from "react-icons/fa";
import candidateImg1 from "../assets/Morand2.jpg";
import candidateImg2 from "../assets/Morand4.jpeg";
import "../styles/AboutSection.css";

function AboutSection() {
  return (
    <section className="about-page-section">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="about-tag">About the Campaign</p>
          <h2>About Ronald Morand</h2>

          <p className="about-lead">
            Ronald Morand is committed to serving the people of Haiti with
            leadership, integrity, and a strong vision for the future.
          </p>

          <p>
            This campaign is focused on community support, progress, and
            creating opportunities for the people. It is built on the belief
            that real leadership starts by listening, serving, and bringing
            people together.
          </p>

          <p>
            With support from local communities and Haitians around the world,
            this campaign aims to inspire hope, strengthen outreach, and create
            meaningful impact ahead of Election Day.
          </p>
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
          <h3>Community</h3>
          <p>
            Building stronger relationships and empowering families through
            service and outreach.
          </p>
        </div>

        <div className="about-mission-card">
          <FaBullhorn className="about-icon" />
          <h3>Leadership</h3>
          <p>
            Promoting honest leadership, clear communication, and meaningful
            representation.
          </p>
        </div>

        <div className="about-mission-card">
          <FaGlobeAmericas className="about-icon" />
          <h3>Vision</h3>
          <p>
            Creating a hopeful future for Haiti through progress, opportunity,
            and unity.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
