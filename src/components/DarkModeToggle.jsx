import { FaMoon, FaSun } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const { t } = useTranslation();
  return (
    <button
      type="button"
      onClick={() => setDarkMode(!darkMode)}
      className="flex flex-nowrap items-center hover:scale-110 transition-all"
    >
      {darkMode ? (
        <>
          <FaSun className="mr-1" />{" "}
          <span className="hidden md:inline">{t("header.mode.light")}</span>
        </>
      ) : (
        <>
          <FaMoon className="mr-1" />{" "}
          <span className="hidden md:inline">{t("header.mode.dark")}</span>
        </>
      )}
    </button>
  );
};
export default DarkModeToggle;
