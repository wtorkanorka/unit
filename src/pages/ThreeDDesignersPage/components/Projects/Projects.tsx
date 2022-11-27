import styles from "./Projects.module.css";
import pool from "../../../../assets/images/three-d-pool.jpg";
import house from "../../../../assets/images/three-d-house.jpg";
import coffee from "../../../../assets/images/three-d-coffee.jpg";
import yorik from "../../../../assets/images/three-d-yorik.jpg";
import village from "../../../../assets/images/three-d-village.jpg";
import stairs from "../../../../assets/images/three-d-stairs.jpg";
import stairs1 from "../../../../assets/images/three-d-stairs1.jpg";
import stairs2 from "../../../../assets/images/three-d-stairs2.jpg";
import stairs3 from "../../../../assets/images/three-d-stairs3.jpg";

export function Projects() {
  return (
    <div className={styles["projects"]}>
      <h2 className={styles["title"]}>Портфолио</h2>
      <div className={styles["container"]}>
        <div className={styles["carousel"]}>
          <div className={styles["carousel__face"]}>
            <img className={styles["img"]} src={pool} alt="" />
          </div>
          <div className={styles["carousel__face"]}>
            <img className={styles["img"]} src={house} alt="" />
          </div>
          <div className={styles["carousel__face"]}>
            <img className={styles["img"]} src={coffee} alt="" />
          </div>
          <div className={styles["carousel__face"]}>
            <img className={styles["img"]} src={yorik} alt="" />
          </div>
          <div className={styles["carousel__face"]}>
            <img className={styles["img"]} src={village} alt="" />
          </div>
          <div className={styles["carousel__face"]}>
            <img className={styles["img"]} src={stairs} alt="" />
          </div>
          <div className={styles["carousel__face"]}>
            <img className={styles["img"]} src={stairs1} alt="" />
          </div>
          <div className={styles["carousel__face"]}>
            <img className={styles["img"]} src={stairs2} alt="" />
          </div>
          <div className={styles["carousel__face"]}>
            <img className={styles["img"]} src={stairs3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
