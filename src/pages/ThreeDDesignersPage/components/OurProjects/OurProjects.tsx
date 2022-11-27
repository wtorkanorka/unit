import styles from "./OurProjects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import project1 from "../../../../assets/images/three-d-project1.jpg";
import project2 from "../../../../assets/images/three-d-project2.jpg";
import project3 from "../../../../assets/images/three-d-project3.jpg";
import project4 from "../../../../assets/images/three-d-project4.jpg";
import project5 from "../../../../assets/images/three-d-project5.jpg";

export function OurProject() {
  return (
    <div className={styles["our-projects"]}>
      <h1 className={styles["title"]}>Наши работы</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          {" "}
          <h3 className={styles["title-slide"]}>Первый урок</h3>
          <img className={styles["img"]} src={project1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h3 className={styles["title-slide"]}>Второй урок</h3>
          <img className={styles["img"]} src={project2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <h3 className={styles["title-slide"]}>Третий урок</h3>
          <img className={styles["img"]} src={project3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <h3 className={styles["title-slide"]}>Четвёртый урок</h3>
          <img className={styles["img"]} src={project4} alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          {" "}
          <h3 className={styles["title-slide"]}>Четвёртый урок</h3>
          <img className={styles["img"]} src={project4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <h3 className={styles["title-slide"]}>Пятый урок</h3>
          <img className={styles["img"]} src={project5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
