import styles from "./Projects.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import site1 from "../../../../assets/images/design-site1.jpg";
import site2 from "../../../../assets/images/design-site2.jpg";
import site3 from "../../../../assets/images/design-site3.jpg";

export function Projects() {
  return (
    <div className={styles["projects"]}>
      <h2 className={styles["title"]}>Веб дизайн</h2>
      <Carousel>
        <div>
          <img src={site1} />
          <p className="legend">1</p>
        </div>
        <div>
          <img src={site2} />
          <p className="legend">2</p>
        </div>
        <div>
          <img src={site3} />
          <p className="legend">3</p>
        </div>
      </Carousel>
    </div>
  );
}
