import { FaGlobe } from "react-icons/fa";

const ChangeLanguageToggle = ({ language, setLanguage }) => {
  return (
    <button
      type="button"
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="flex items-center hover:scale-110 transition-all">    
      <FaGlobe className="h12 hidden md:inline md:mr-1" />
      <p className="font-bold md:font-normal text-xl">{language === "en" ? "es" : "en"}</p>
    </button>
  );
};
export default ChangeLanguageToggle;