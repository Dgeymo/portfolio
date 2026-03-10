import { useTranslation } from "react-i18next";
import Badget from "./Badget";
import CodeComplete from "./CodeComplete";
import { FaCode } from "react-icons/fa";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="block md:flex items-center md:justify-between h-32 bg-white/70 dark:bg-gray-900/60 dark:text-gray-50 mt-8 md:px-44 px-6 backdrop-blur-md border dark:border-gray-700 shadow-lg rounded-md">
            <div className="md:w-1/3 flex md:justify-end justify-center">
                <FaCode className="text-4xl text-green-700 dark:text-green-500" />
            </div>
            <div className="md:w-1/3 flex justify-center">
                <a href="#about">
                    <Badget
                        textSize="text-2xl"
                        text={t("footer.cta")}
                        color="bg-green-700 dark:bg-green-600"
                        textColor="text-gray-50 "
                    />
                </a>
            </div>
            <div className="md:w-1/3">
                <CodeComplete />
            </div>
        </footer>
    );
}
export default Footer;