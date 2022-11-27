import styles from "./ProgrammersPageHero.module.css";
import mainImage from "../../../../assets/images/background-programmer.png";

export function ProgrammersPageHero() {
  return (
    <div className={styles["programmers-page-hero"]}>
      <div className={styles["text-part"]}>
        <h1 className={styles["title"]}>Программисты</h1>
        <p className={styles["text"]}>Будущее за нами</p>
      </div>
      <img className={styles["img"]} src={mainImage} alt="" />
    </div>
  );
}
