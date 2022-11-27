import styles from "./OurProjects.module.css";
import project1 from "../../../../assets/images/game.jpg";

export function OurProject() {
  return (
    <div className={styles["our-project"]}>
      <h2 className={styles["title-main"]}>Наши проекты</h2>
      <div className={styles["project-part"]}>
        <div className={styles["container"]}>
          {" "}
          <h4 className={styles["title"]}>KruGrat</h4>
          <p className={styles["text"]}>
            Данил Абсалямов за 15 дней сделал игру KruGrat в жанре буллет-хелл!
            Прохождение занимает около 20 минут. Ссылка:
            <a className={styles["link"]}>dziroz.itch.io/krugrat</a>
          </p>{" "}
          <img className={styles["img"]} src={project1} alt="" />
        </div>
        <div className={styles["container"]}>
          <h4 className={styles["title"]}>Будущий проект</h4>
          <p className={styles["text"]}>
            Умопомрачительный текст проекта, который ждёт не дождётся своего
            выхода
          </p>{" "}
          <img className={styles["img"]} src="" alt="" />
        </div>
        <div className={styles["container"]}>
          <h4 className={styles["title"]}>Будущий проект</h4>
          <p className={styles["text"]}>
            Умопомрачительный текст проекта, который ждёт не дождётся своего
            выхода
          </p>{" "}
          <img className={styles["img"]} src="" alt="" />
        </div>
      </div>
    </div>
  );
}
