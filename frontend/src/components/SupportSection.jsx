import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SupportSection() {
  const cards = [
    { amount: "$25", text: "Helps spread campaign awareness" },
    { amount: "$50", text: "Supports outreach and communication" },
    { amount: "$100", text: "Helps fund events and organizing" },
  ];

  return (
    <section className="section support-section">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Support the Campaign</h2>
        <p>
          Every contribution helps build momentum, increase outreach, and bring
          the campaign message to more people across the community.
        </p>

        <div className="support-cards">
          {cards.map((card, index) => (
            <div className="support-card" key={index}>
              <h3>{card.amount}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <Link to="/donate" className="hero-btn">
          Contribute Today
        </Link>
      </motion.div>
    </section>
  );
}

export default SupportSection;
