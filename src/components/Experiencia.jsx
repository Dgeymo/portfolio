//experience in works
import { useTranslation } from "react-i18next";

const Experiencia = () => {
    const { t } = useTranslation();
    return (

        <section id="experience" className="p-6  bg-gray-50 dark:bg-gray-800 hover:shadow-md transition-all duration-500 my-6 rounded-xs">
            <h2 className="text-2xl font-bold mb-5">{t("experience.title")}</h2>
            <h3 className="pb-2">{t("experience.company")}</h3>
            <ul className="space-y-1 border-l-4 border-green-600 dark:border-green-500 pl-4">
                <li>
                    <strong>{t("experience.skill1")}</strong> {t("experience.detailsSkill1")}
                </li>
                <li>
                    <strong>{t("experience.skill2")}</strong> {t("experience.detailsSkill2")}
                </li>
                <li>
                    <strong>{t("experience.skill3")}</strong> {t("experience.detailsSkill3")}
                </li>
                <li >
                    <strong>{t("experience.skill4")}</strong> {t("experience.detailsSkill4")}
                </li>
            </ul>
        </section>
            );
}
export default Experiencia;