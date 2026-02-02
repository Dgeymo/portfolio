import { FaGlobe } from "react-icons/fa";

const ChangeLanguageToggle = ({ language, setLanguage }) => {
  return (
    <button
      type="button"
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="flex items-center hover:scale-110 transition-all">    
      <FaGlobe className="mr-1" />
      <span className="hidden md:inline">{language === "en" ? "es" : "en"}</span>
    </button>
  );
};
export default ChangeLanguageToggle;