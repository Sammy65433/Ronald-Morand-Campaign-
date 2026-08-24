import "../styles/ContactSection.css";

function ContactSection() {
  return (
    <section className="section">
      <h2>Contact the Campaign</h2>
      <p>
        Reach out for questions, support, volunteer opportunities, or more information about the campaign.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default ContactSection;
