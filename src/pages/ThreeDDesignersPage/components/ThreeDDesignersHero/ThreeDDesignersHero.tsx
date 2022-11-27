import styles from "./ThreeDDesignersHero.module.css";
import mainImage from "../../../../assets/images/three-d-hero.png";

export function ThreeDDesignersHero() {
  return (
    <div className={styles["hero"]}>
      <div className={styles["text-part"]}>
        <h1 className={styles["title"]}>3D дизайнеры</h1>
        <p className={styles["text"]}>
          Будущее создаётся не только в реальном мире, но и в виртуальном
        </p>
      </div>
      <img className={styles["img"]} src={mainImage} alt="" />
    </div>
  );
}
