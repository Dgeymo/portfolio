import { useTranslation } from "react-i18next";
import Badget from "./Badget.jsx";
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaPython, FaNode, FaReact } from "react-icons/fa";
import { SiDotnet, SiExpress } from "react-icons/si";
import LanguageCoreData from "../data/LanguageCoreData.json";
import fw from "../data/FrameworksyLibrerias.json";
const iconMap = {
  FaJava: <FaJava />,
  FaJs: <FaJs />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaPython: <FaPython />,
  SiDotnet: <SiDotnet />
};
const iconMapF = {
  FaJava: <FaJava />,
  FaNode: <FaNode />,
  FaReact: <FaReact />,
  SiDotnet: <SiDotnet />,
  SiExpress: <SiExpress />
};

const Tecnologias = () => {

  const { t } = useTranslation();


  return (
    <section className="md:p-6 p-2 bg-white dark:bg-gray-800 transition-all duration-500 my-6 rounded-md dark:border dark:border-gray-700 shadow-lg">
      <article className="mx-auto items-center flex flex-col md:items-start">
        <h2 className="text-2xl font-bold mb-4">{t("technology.coreLanguages")}</h2>
        <div className="space-x-2 flex flex-row flex-wrap justify-center md:justify-start mb-6">
          {LanguageCoreData.map((lang, index) => (
            <Badget
              key={index}
              color={lang.color}
              textColor={lang.textColor}
              text={lang.text}
              logo={iconMap[lang.logo]}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{t("technology.frameworksAndLibraries")}</h2>
        <div className="space-x-2 flex flex-row flex-wrap mb-6 justify-center md:justify-start">
          {fw.map( (fw, index) => (
            <Badget
              key={index}
              color={fw.color}
              textColor={fw.textColor}
              text={fw.text}
              logo={iconMapF[fw.logo]}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Tecnologias;