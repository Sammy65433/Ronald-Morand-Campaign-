import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Navbar.css";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Ronald Morand Campaign</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/about">{t("about")}</Link></li>
        <li><Link to="/community">{t("community")}</Link></li>
        <li><Link to="/donate">{t("donate")}</Link></li>
        <li><Link to="/contact">{t("contact")}</Link></li>
      </ul>

      <LanguageSwitcher />
    </nav>
  );
}

export default Navbar;
