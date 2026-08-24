import { useTranslation } from "react-i18next";
import "../styles/Footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>{t("footerText")}</p>
    </footer>
  );
}

export default Footer;
