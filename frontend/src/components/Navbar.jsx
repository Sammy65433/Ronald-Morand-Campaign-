import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Navbar.css";
import LanguageButtons from "./LanguageButtons";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="logo">
  <Link to="/" aria-label={t("home")}>
    {t("home")}
  </Link>
</div>


      <ul className="nav-links">
        <li>
          <Link to="/about">{t("about")}</Link>
        </li>
        <li>
          <Link to="/community">{t("community")}</Link>
        </li>
        <li>
          <Link to="/donate">{t("donate")}</Link>
        </li>
        <li>
          <Link to="/contact">{t("contact")}</Link>
        </li>
      </ul>

      <div className="nav-language">
        <LanguageButtons />
      </div>
    </nav>
  );
}

export default Navbar;
