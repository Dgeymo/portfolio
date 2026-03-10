import { FaGithub } from "react-icons/fa";
import Badget from "./Badget.jsx";
import { useTranslation } from "react-i18next";


// El mismo helper de arriba (o importalo desde un utils)
function useLocaleResolver() {
  const { i18n, t } = useTranslation();
  const getFromLocaleObject = (val) => {
    if (typeof val !== "object" || val === null) return null;
    const lang = i18n.language?.startsWith("en") ? "en" : "es";
    return val[lang] ?? val.es ?? val.en ?? Object.values(val).find(Boolean) ?? null;
  };
  const resolveText = (val, fallback) => {
    if (typeof val === "string") {
      const translated = t(val);
      if (translated === val && fallback) return fallback;
      return translated;
    }
    const localized = getFromLocaleObject(val);
    if (localized) return localized;
    return fallback ?? "";
  };
  return { resolveText, t };
}




const Project = (props) => {
  const { resolveText, t } = useLocaleResolver();

  const {
    title,          // string key o {es,en}
    type,           // string o {es,en} (o clave "enums.type.webApp")
    technologies,   // array de strings
    forDestination, // string key o {es,en}
    description,    // string key o {es,en}
    objective,      // string key o {es,en}
    date,           // string (neutral)
    githubLink,     // string
    liveLink,       // string
  } = props;

  // Si usas enums para type, puedes mapearlo a clave:
  // const typeKey = typeof type === "string" ? `enums.type.${type}` : type;

  return (
    <article className="mb-8 py-6 px-6 md:px-8 bg-white dark:bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 ">
      <h3 className="text-xl font-bold mb-2">{resolveText(title)}</h3>

      <p className="italic mb-2 justify-stretching text-sm text-gray-600 dark:text-gray-400">
        {resolveText(type)} - {resolveText(forDestination)} - {date}
      </p>

      <p className="mb-4 text-justify">{resolveText(description)}</p>

      <p className="mb-4 text-justify">
        <strong>{t("projects.objective")}:</strong> {resolveText(objective)}
      </p>

      <div className="mb-4 ">
        <strong>{t("projects.technology")}</strong>
        <ul className="list-none w-20 mt-2 flex flex-row gap-2">
          {technologies.map((tech, index) => (
            <li key={index}>
              <Badget text={tech} color="bg-green-600" textColor="text-gray-50" />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex space-x-4">
        {githubLink && githubLink !== "#" && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:underline flex items-center dark:text-gray-50"
          >
            <FaGithub className="inline mr-2 text-3xl" />
            {t("projects.gotToProjects")}
          </a>
        )}

        {liveLink && liveLink !== "#" && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            {t("projects.liveDemo")}
          </a>
        )}
      </div>
    </article>
  );
};

export default Project;

