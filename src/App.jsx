import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Tecnologias from "./components/Tecnologias.jsx";
import Experienecia from "./components/Experiencia.jsx";
import Footer from "./components/Footer.jsx";
import { useState, useEffect, Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import i18n from "./i18n/i18n.js";
const ProjectsCarousel = lazy(() => import("./components/ProjectCarousel.jsx"));
import projectsData from "./data/projects.json";
import Education from "./components/Education.jsx";
import ProjectOwner from "./components/ProjectOwner.jsx";

function App() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage ? savedLanguage : "es";
  };
  const getInitialDarkMode = () => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      return JSON.parse(savedMode);
    }
    return prefersDark;
  };

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
      {/* SEO Helmet */}
      <Helmet>
        <title>Diego Geymonat — Fullstack | Arquitectura &amp; APIs</title>
        <meta name="description" content="Desarrollo Fullstack, arquitectura limpia, APIs y DevOps. Mirá proyectos e impacto." />
        <link rel="canonical" href="https://diegogeymonat.netlify.app/" />
        {/* Open Graph / Twitter */}
        <meta property="og:title" content="Diego Geymonat — Fullstack | Arquitectura &amp; APIs" />
        <meta property="og:description" content="Desarrollo Fullstack, arquitectura limpia, APIs y DevOps. Mirá proyectos e impacto." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://diegogeymonat.netlify.app/" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diego Geymonat — Fullstack | Arquitectura &amp; APIs" />
        <meta name="twitter:description" content="Desarrollo Fullstack, arquitectura limpia, APIs y DevOps. Mirá proyectos e impacto." />
        <meta name="twitter:image" content="/og-image.jpg" />
        {/* JSON-LD Person */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Diego Geymonat",
            "url": "https://diegogeymonat.netlify.app/",
            "jobTitle": "Fullstack Developer, Arquitecto de Software",
            "sameAs": [
              "https://www.linkedin.com/in/diegogeymonat/",
              "https://github.com/dgeymonat"
            ]
          }
        `}</script>
      </Helmet>

      {/* Skip link accesible */}
      <a href="#main" className="skip-link absolute left-2 top-2 bg-white text-blue-700 px-3 py-1 rounded z-50 focus:translate-y-0 -translate-y-16 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-200">Saltar al contenido</a>

      <div className="px-2 pb-2 max-w-[1200px] mx-auto text-gray-900 dark:text-stone-300 min-h-screen transition-all duration-500 bg-white/60 dark:bg-gray-900/60 rounded-md border dark:border-gray-700 border-gray-50">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          language={language}
          setLanguage={setLanguage}
        />
        <main id="main" tabIndex={-1}>
          <About />
          <Tecnologias />
          <Experienecia />
          <Suspense fallback={<div className="my-8 text-center text-blue-600">Cargando proyectos…</div>}>
            <ProjectsCarousel projects={projects} />
          </Suspense>
          <ProjectOwner />
          <Education />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
      {/* Estilos skip-link accesible */}
      <style>{`
        .skip-link {
          position: absolute;
          left: 0.5rem;
          top: 0.5rem;
          background: #fff;
          color: #2563eb;
          padding: 0.25rem 0.75rem;
          border-radius: 0.375rem;
          z-index: 50;
          transform: translateY(-4rem);
          transition: transform 0.2s;
        }
        .skip-link:focus {
          outline: 2px solid #2563eb;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}

export default App;
