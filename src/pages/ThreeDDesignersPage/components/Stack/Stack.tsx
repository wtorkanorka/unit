import styles from "./Stack.module.css";
import blender from "../../../../assets/icons/blender.png";
import ps from "../../../../assets/icons/ps.png";

export function Stack() {
  return (
    <div className={styles["our-stack"]}>
      <div className={styles["stack"]}>
        <div className={styles["container"]}>
          <img className={styles["icon"]} src={blender} alt="" />
          <p className={styles["container-text"]}>blender </p>
        </div>
        <div className={styles["container"]}>
          <img className={styles["icon"]} src={ps} alt="" />
          <p className={styles["container-text"]}>photoshop</p>
        </div>
      </div>
      <div className={styles["info"]}>
        {" "}
        <h3 className={styles["title"]}>Что мы делаем?</h3>{" "}
        <p className={styles["text"]}>
          <span>3D</span> дизайнеры <span>М</span>ы используем современные
          програмные расширения для создания крупномаштабных игровых и
          дизайнерских проектов с помощью технологии 3D моделирования.{" "}
          <span>М</span>ы всегда рады помочь тебе справиться со всеми
          трудностями обучения и помни утка следит за тобой.
        </p>
      </div>
    </div>
  );
}
