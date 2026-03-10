import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import Project from "./Project";

function ProjectsCarousel({ projects }) {
  const { t } = useTranslation();
  return (
    <section className=" bg-white dark:bg-gray-800 rounded-md transition-all duration-500 my-6 border border-white dark:border-gray-700 shadow-lg">
      <h2 className="text-2xl font-bold mb:mb-4 p-6 flex-shrink-0">
        {t("projects.title.academy")}
      </h2>
      <div className="flex  md:p-6 px-2  overflow-x-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1.1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2.1 }, 
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Project {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProjectsCarousel;
