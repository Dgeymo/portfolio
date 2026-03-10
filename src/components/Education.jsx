import EducationData from "../data/EducatioData.json";
import { useTranslation } from "react-i18next";

const Education = () => {
    const educationData = JSON.parse(JSON.stringify(EducationData));
    const { t } = useTranslation();
    return (
        <section id="education" className="bg-white dark:bg-gray-800  p-6 rounded-md border border-white dark:border-gray-700 shadow-lg" >
            <h2 className="text-2xl font-bold mb-6">{t("education.title")}</h2>
            <div className="space-y-6">
                {educationData.map((edu, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-950 rounded-lg p-4 transition-all duration-300 hover:shadow-lg border"
                    >
                        <h3 className="text-lg font-semibold">{t(edu.institutionKey)}</h3>
                        <p className="italic">{t(edu.titleKey)}</p>
                        <ul className="list-none ml-4 list-inside mt-2">
                            {edu.detailsKeys.map((d, j) => (
                                <li key={j}>{t(d)}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;