//experience in works
import { useTranslation } from "react-i18next";

const Experiencia = () => {
  const { t } = useTranslation();
  return (
    <section
      id="experience"
      className="p-6  bg-white shadow-lg dark:bg-gray-800 hover:shadow-md transition-all duration-500 my-6 rounded-md border  border-white dark:border-gray-700"
    >
      <h2 className="text-2xl font-bold mb-5">{t("experienceTitle")}</h2>

      <h3 className="pb-2 text-xl font-bold">
        {t("experience2.title")}{" "}
        <span className="text-sm text-gray-500">{t("experience2.period")}</span>
      </h3>
      <h4 className="pb-2">{t("experience2.company")}</h4>
      <ul className="space-y-1 border-l-4 border-blue-600 dark:border-blue-500 pl-4">
        <li>
          <strong>{t("experience2.skill1")}</strong>{" "}
          {t("experience2.detailsSkill1")}
        </li>
        <li>
          <strong>{t("experience2.skill2")}</strong>{" "}
          {t("experience2.detailsSkill2")}
        </li>
      </ul>

      <hr className="my-4 border-gray-200 dark:border-gray-700" />

      <h3 className="pb-2 text-xl font-bold">
        {t("experience.title")}{" "}
        <span className="text-sm text-gray-500">{t("experience.period")}</span>
      </h3>
      <h4 className="pb-2">{t("experience.company")}</h4>
      <ul className="space-y-1 border-l-4 border-green-600 dark:border-green-500 pl-4">
        <li>
          <strong>{t("experience.skill1")}</strong>{" "}
          {t("experience.detailsSkill1")}
        </li>
        <li>
          <strong>{t("experience.skill2")}</strong>{" "}
          {t("experience.detailsSkill2")}
        </li>
        <li>
          <strong>{t("experience.skill3")}</strong>{" "}
          {t("experience.detailsSkill3")}
        </li>
        <li>
          <strong>{t("experience.skill4")}</strong>{" "}
          {t("experience.detailsSkill4")}
        </li>
      </ul>
    </section>
  );
};
export default Experiencia;
