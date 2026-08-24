import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="language-switcher">
      <select onChange={changeLanguage} value={i18n.language}>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="ht">Kreyòl</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
