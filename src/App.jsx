import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Tecnologias from "./components/Tecnologias.jsx";
import Experienecia from "./components/Experiencia.jsx";
import Footer from "./components/Footer.jsx";
import { useState, useEffect } from "react";
import i18n from "./i18n/i18n.js"; // tu configuración de i18next
import ProjectsCarousel from "./components/ProjectCarousel.jsx";
import projectsData from "./data/projects.json";
import Education from "./components/Education.jsx";


function App() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage ? savedLanguage : "es";
  }
  const getInitialDarkMode = () => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      return JSON.parse(savedMode);
    }
    return prefersDark;
  }
  
  const [darkMode, setDarkMode] = useState(getInitialDarkMode());
  const [language, setLanguage] = useState(getInitialLanguage());

  
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    if (language === "es") {
      i18n.changeLanguage("es");
    } else {
      i18n.changeLanguage("en");
    }
  }, [language]);
  
  const projects = JSON.parse(JSON.stringify(projectsData));
  return (
    <>
      <div className="p-3 max-w-[1200px] mx-auto text-gray-900 dark:bg-gray-900 dark:text-stone-300 min-h-screen transition-all duration-500">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} language={language} setLanguage={setLanguage} />
        <About />
        <Tecnologias />
        <Experienecia />
        <ProjectsCarousel projects={projects} />
        <Education />
      </div>
      <Footer />
    </>
  );
}

export default App;
