import ChangeLanguageToggle from "./ChangeLanguageToggle.jsx";
import DarkModeToggle from "./DarkModeToggle.jsx";
import { IoCode } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const Header = ({ darkMode, setDarkMode, language, setLanguage }) => {
  const { t } = useTranslation();
  return (
    <header className="p-4 flex justify-between items-center  dark:bg-gray-900/30 bg-white/30 dark:border border-gray-200 dark:border-gray-800  px-6 mb-4">
      <h1 className="text-2xl font-bold flex items-center space-x-2">
        <IoCode className="text-5xl text-green-700" />
        <span>{t("header.title")}</span>
      </h1>
      <nav className="text-xl">
        <ul className="flex list-none space-x-5 items-center">
          <li>
            <ChangeLanguageToggle
              language={language}
              setLanguage={setLanguage}
            />
          </li>
          <li>
            <DarkModeToggle
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
