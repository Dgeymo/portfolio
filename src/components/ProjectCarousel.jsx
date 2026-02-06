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
    <section className=" bg-gray-50 dark:bg-gray-800 rounded-md transition-all duration-500 p-6">
      <h2 className="text-2xl font-bold mb-4 flex-shrink-0">
        {t("projects.title.academy")}
      </h2>
      <div className="flex p-6 overflow-x-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2.2 }, // en pantallas grandes se ven 2 y parte del 3°
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
