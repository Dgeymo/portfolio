import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Project from "./Project";

function ProjectsCarousel({ projects }) {
    return (
        <section className="flex p-6 overflow-x-auto">
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
        </section>
    );
}

export default ProjectsCarousel;