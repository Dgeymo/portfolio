import {
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import portada from "../assets/portada.png";
const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="px-6 py-16 bg-gray-50 dark:bg-gray-800 items-center transition-all duration-500">
      <div className="flex text-center md:items-start flex-col mx-auto md:text-left backdrop-blur rounded-md">
        <div className="flex flex-col items-center md:flex-row space-y-2 ">
          <figure className="md:flex-shrink-0">
            <img
              src={portada}
              alt="Diego Geymonat"
              className="w-52 h-52 rounded-full dark:border-2 md:float-start md:mr-8 object-cover object-top dark:bg-gray-200"
            />
          </figure>
          <div className="ml-0 md:ml-6">

            <h1 className="text-6xl font-bold my-2">Diego Geymonat</h1>
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-500 pb-2">
              {t("about.role")}
            </h2>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <p className="font-semibold">Montevideo - Uruguay</p>
            </div>
            <ul className="md:flex items-center md:space-x-3 text-center text-sm mt-3">
              <li className="flex items-center mt-3 md:m-0 md:w-60 h-8 border-green-600 text-green-700 dark:text-green-500 hover:text-gray-50 hover:bg-green-600 dark:hover:text-gray-50 dark:hover:bg-green-600 dark:border-green-500 border-2 rounded-3xl font-semibold transition-all duration-500">
                <a
                  className="w-full flex flex-row items-center text-center justify-center"
                  href="mailto:dgeymonat84@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope className="mr-2 text-xl" />
                  <span>dgeymonat84@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center justify-items-center mt-3 md:m-0 md:w-12 h-8 border-green-600 text-green-700 hover:text-gray-50 hover:bg-green-600 dark:hover:text-gray-50 dark:hover:bg-green-600 dark:border-green-500 border-2 dark:text-green-500 rounded-3xl transition-all duration-500">
                <a
                  className="w-full"
                  href="#"
                  download="Diego_Geymonat_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFileAlt className="w-full text-xl" />
                </a>
              </li>
              <li className="flex items-center justify-items-center mt-3 md:m-0 md:w-12 h-8 border-green-600 text-green-700 hover:text-gray-50 hover:bg-green-600  dark:border-green-500 border-2 dark:text-green-500 dark:hover:bg-green-500 dark:hover:text-gray-50 rounded-3xl transition-all duration-500">
                <a
                  className="w-full"
                  href="https://github.com/dgeymo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-xl w-full" />
                </a>
              </li>
              <li className="flex items-center justify-items-center mt-3 md:m-0 md:w-12 h-8 border-green-600 text-green-700 hover:text-gray-50 hover:bg-green-700  dark:border-green-500 border-2 dark:text-green-500 dark:hover:bg-green-500 dark:hover:text-gray-50 rounded-3xl transition-all duration-500">
                <a
                  className="w-full"
                  href="https://www.linkedin.com/in/dgeymonat/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-xl w-full" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold flex items-center space-x-2">
            {t("about.title")}
          </h3>
          <p className=" text-lg leading-relaxed text-justify">
            {t("about.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
