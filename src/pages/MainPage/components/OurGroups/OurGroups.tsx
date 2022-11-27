import styles from "./OurGroups.module.css";
import design from "../../../../assets/icons/our-groups-design.png";
import programming from "../../../../assets/icons/our-groups-programming.png";
import piar from "../../../../assets/icons/our-groups-piar.png";
import ddesign from "../../../../assets/icons/our-groups-3ddesign.png";

export function OurGroups() {
  return (
    <div className={styles["our-groups"]}>
      <h2 className={styles["title"]}>Чем мы занимаемся</h2>
      <div className={styles["content"]}>
        <div className={styles["container"]}>
          <img className={styles["icon"]} src={programming} alt="" />
          <h4 className={styles["container-title"]}> Программирование</h4>
          <ul>
            <li>
              <p className={styles["text"]}>Игры</p>
            </li>
            <li>
              <p className={styles["text"]}>Приложения</p>
            </li>
            <li>
              <p className={styles["text"]}>Сайты</p>
            </li>
          </ul>
        </div>
        <div className={styles["container"]}>
          <img className={styles["icon"]} src={design} alt="" />
          <h4 className={styles["text"]}>Дизайн</h4>
          <ul>
            <li>
              <p className={styles["text"]}>UI/UX Дизайн</p>
            </li>
            <li>
              <p className={styles["text"]}>Веб-дизайн</p>
            </li>
            <li>
              <p className={styles["text"]}>Дизайн логотипов</p>
            </li>
          </ul>
        </div>
        <div className={styles["container"]}>
          <img className={styles["icon"]} src={ddesign} alt="" />
          <h4 className={styles["text"]}>3D Дизайн</h4>
          <ul>
            <li>
              <p className={styles["text"]}>Гейм-дизайн</p>
            </li>
            <li>
              <p className={styles["text"]}>Визуализация эффектов</p>
            </li>
            <li>
              <p className={styles["text"]}>Интерьеры</p>
            </li>
          </ul>
        </div>
        <div className={styles["container"]}>
          <img className={styles["icon"]} src={piar} alt="" />
          <h4 className={styles["text"]}>Пиар</h4>
          <ul>
            <li>
              <p className={styles["text"]}>Копирайтинг</p>
            </li>
            <li>
              <p className={styles["text"]}>Менеджмент</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
