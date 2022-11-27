import styles from "./OurActivities.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import activities1 from "../../../../assets/images/prog-activities1.jpg";
import activities2 from "../../../../assets/images/prog-activities2.jpg";
import activities3 from "../../../../assets/images/activities3.jpg";

export function OurActivities() {
  return (
    <div className={styles["our-activities"]}>
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
          <h1>Первый проектный опыт</h1>
          <img className={styles["img"]} src={activities2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h1>Хакатон ВТБ</h1>
          <img className={styles["img"]} src={activities1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <h1>Хакатон ВТБ</h1>
          <img className={styles["img"]} src={activities3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
