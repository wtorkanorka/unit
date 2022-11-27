import styles from "./MainPageHero.module.css";
import MainIcon from "../../../../assets/icons/unit-main.jpg";

export function MainPageHero() {
  return (
    <div className={styles["main-page-hero"]}>
      <div className={styles["text-part"]}>
        <h1 className={styles["title"]}>ЮНИТ</h1>
        <p className={styles["text"]}>
          Если ты программист, художник или просто человек, который хочет менять
          мир - присоединяйся к нам
        </p>
      </div>
      <img className={styles["img"]} src={MainIcon} alt="" />
    </div>
  );
}
