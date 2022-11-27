import styles from "./DesignersHero.module.css";
import designerLogo from "../../../../assets/images/background-designer.png";

export function DesignersHero() {
  return (
    <div className={styles["designer-hero"]}>
      <div className={styles["text-part"]}>
        <h1 className={styles["title"]}>Дизайнеры</h1>
        <p className={styles["text"]}>Мы подчёркиваем красоту мира</p>
      </div>
      <img className={styles["img"]} src={designerLogo} alt="" />
    </div>
  );
}
