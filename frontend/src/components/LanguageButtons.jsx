import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "ht", label: "Kreyòl" },
];

function LanguageButtons() {
  const { i18n } = useTranslation();
  const activeLanguage = i18n.resolvedLanguage?.split("-")[0] || "en";

  return (
    <div className="language-buttons" role="group" aria-label="Select language">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          lang={code}
          className={activeLanguage === code ? "active" : ""}
          aria-pressed={activeLanguage === code}
          onClick={() => i18n.changeLanguage(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default LanguageButtons;
