import { useTranslation } from "react-i18next";

const ProjectOwner = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-4 p-6 bg-white shadow dark:bg-gray-800 hover:shadow-md transition-all duration-500 my-6 rounded-md border border-white dark:border-gray-800">
      <h3 className="pb-2 text-2xl font-bold">{t("projectOwnerTitle")}</h3>
      <div className="border-white dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-4 transition-all duration-300 hover:shadow-lg border shadow">
        <h4 className="text-gray-700 dark:text-gray-300 text-xl font-bold block text-center">
          {t("project1.title")}
        </h4>
        <div className="md:flex md:items-start mt-4 justify-center items-center">
          <figure>
            <img
              className="max-w-[600px] min-w-[400px] w-full h-auto"
              src="..\assets\movilEq\MovilEq.png"
              alt=""
            />
          </figure>
          <div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              {t("project1.detailsProject1")}
            </p>
            <h4 className="text-gray-700 dark:text-gray-300 text-md font-bold mt-4">
              {t("titleProblem")}
            </h4>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {t("project1.problemProject1")}
            </p>
            <h3 className="text-gray-700 dark:text-gray-300 text-md font-bold mt-4">
              {t("objetiveProject")}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {t("project1.objectiveProject1")}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {t("project1.releaseDate")}
            </p>
          </div>
        </div>
        <h3 className="text-gray-700 dark:text-gray-300 text-md font-bold mt-4">
          {t("technologyProject")}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {t("project1.technologyProject1")}
        </p>
      </div>
      <div className="border-white dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-4 transition-all duration-300 hover:shadow-lg border shadow">
        <h4 className="text-gray-700 dark:text-gray-300 text-xl font-bold block text-center">
          {t("project2.title")}
        </h4>
        <div className="md:flex md:items-start mt-4 justify-center items-center">
          <figure>
            <img
              className="max-w-[600px] min-w-[400px] w-full h-auto"
              src="..\assets\Pandas.png"
              alt=""
            />
          </figure>
          <div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              {t("project2.detailsProject2")}
            </p>
            <h4 className="text-gray-700 dark:text-gray-300 text-md font-bold mt-4">
              {t("titleProblem")}
            </h4>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {t("project2.problemProject2")}
            </p>
            <h3 className="text-gray-700 dark:text-gray-300 text-md font-bold mt-4">
              {t("objetiveProject")}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {t("project2.objetiveProject2")}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {t("project2.releaseDate")}
            </p>
          </div>
        </div>
        <h3 className="text-gray-700 dark:text-gray-300 text-md font-bold mt-4">
          {t("technologyProject")}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {t("project2.technologyProject2")}
        </p>
      </div>
    </div>
  );
};

export default ProjectOwner;
