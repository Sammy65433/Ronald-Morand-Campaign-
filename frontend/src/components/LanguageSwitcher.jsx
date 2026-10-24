import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const activeLanguage = i18n.resolvedLanguage?.split("-")[0] || "en";

  return (
    <select
      aria-label="Select language"
      value={activeLanguage}
      onChange={(event) => i18n.changeLanguage(event.target.value)}
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="ht">Kreyòl</option>
    </select>
  );
}

export default LanguageSwitcher;
