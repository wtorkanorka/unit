import styles from "./OurActivities.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import activities1 from "../../../../assets/images/activities1.jpg";
import activities2 from "../../../../assets/images/activities2.jpg";
import activities3 from "../../../../assets/images/activities3.jpg";
import activities4 from "../../../../assets/images/activities4.jpg";
import activities5 from "../../../../assets/images/activities5.jpg";

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
          <h1>Первая встреча</h1>
          <img className={styles["img"]} src={activities1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <h1>Первое собрание</h1>
          <img className={styles["img"]} src={activities2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <h1>Первый хакатон</h1>
          <img className={styles["img"]} src={activities3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <h1>Первый раз в Targem Games</h1>
          <img className={styles["img"]} src={activities4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <h1>Первая лекция</h1>
          <img className={styles["img"]} src={activities5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
