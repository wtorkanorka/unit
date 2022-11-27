import styles from "./Stack.module.css";
import figma from "../../../../assets/icons/figma.png";
import ai from "../../../../assets/icons/ai.png";
import paint from "../../../../assets/icons/paint.jpg";
import ps from "../../../../assets/icons/ps.png";

export function Stack() {
  return (
    <div className={styles["stack-container"]}>
      <div className={styles["stack"]}>
        <div className={styles["container"]}>
          <img className={styles["icon"]} src={figma} alt="" />
          <p className={styles["container-text"]}>figma</p>
        </div>
        <div className={styles["container"]}>
          <img className={styles["icon"]} src={ai} alt="" />
          <p className={styles["container-text"]}>Adobe Illusrate</p>
        </div>
        <div className={styles["container"]}>
          <img className={styles["icon"]} src={paint} alt="" />{" "}
          <p className={styles["container-text"]}>paint</p>
        </div>
        <div className={styles["container"]}>
          <img className={styles["icon"]} src={ps} alt="" />{" "}
          <p className={styles["container-text"]}>photoshop</p>
        </div>
      </div>
      <div className={styles["info"]}>
        {" "}
        <h3 className={styles["title"]}>Что мы делаем?</h3>{" "}
        <p className={styles["text"]}>
          <span>М</span>ы придумываем невероятные дизайнерские решения в рамках
          програмнных, рекламных и других систем, что позволят пользователю
          лучше воспринять продукт, а также способствует повышению узнаваемости
          бренда. <span>В</span>ступай к нам мы поможеим тебя научится этому.
        </p>
      </div>
    </div>
  );
}
