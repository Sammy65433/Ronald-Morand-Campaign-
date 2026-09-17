import { useTranslation } from "react-i18next";

function LanguageButtons() {
  const { i18n } = useTranslation();

  const activeLanguage = i18n.language.startsWith("fr")
    ? "fr"
    : i18n.language.startsWith("ht")
    ? "ht"
    : "en";

  return (
    <div className="language-buttons" aria-label="Language selector">
      <button
        className={activeLanguage === "en" ? "active" : ""}
        onClick={() => i18n.changeLanguage("en")}
      >
        English
      </button>

      <button
        className={activeLanguage === "fr" ? "active" : ""}
        onClick={() => i18n.changeLanguage("fr")}
      >
        Français
      </button>

      <button
        className={activeLanguage === "ht" ? "active" : ""}
        onClick={() => i18n.changeLanguage("ht")}
      >
        Kreyòl
      </button>
    </div>
  );
}

export default LanguageButtons;
