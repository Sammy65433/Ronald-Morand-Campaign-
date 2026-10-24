import { useTranslation } from "react-i18next";
import "../styles/Footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer px-5 py-7 text-center text-sm font-semibold text-white">
      <p>{t("footerText")}</p>
    </footer>
  );
}

export default Footer;
