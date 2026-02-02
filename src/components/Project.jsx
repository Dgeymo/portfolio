import { FaGithub } from "react-icons/fa";
import Badget from "./Badget.jsx";
const Project = (props) => {
  const {
    title,
    type,
    technologies,
    forDestination,
    description,
    objective,
    date,
    githubLink,
    liveLink,
  } = props;
  return (
    <article className="mb-8 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-all duration-500">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="italic mb-2">
        {type} - {forDestination} - {date}
      </p>
      <p className="mb-4">{description}</p>
      <p className="mb-4">
        <strong>Objetivo:</strong> {objective}
      </p>
      <div className="mb-4">
        <strong>Tecnologías:</strong>
        <ul className="list-none w-20 mt-2 flex flex-row gap-2">
          {technologies.map((tech, index) => (
            <li key={index}><Badget text={tech} color="bg-green-600" textColor="text-gray-50" /></li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:underline flex items-center dark:text-gray-50"
        >
          <FaGithub className="inline mr-2 text-3xl" />Código Fuente
        </a>
        {liveLink && liveLink !== "#" && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
};

export default Project;
