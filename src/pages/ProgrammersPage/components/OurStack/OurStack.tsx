import styles from "./OurStack.module.css";
import csharp from "../../../../assets/icons/csharp.png";
import python from "../../../../assets/icons/python.png";
import js from "../../../../assets/icons/js.png";
import unity from "../../../../assets/icons/unity.png";

export function OurStack() {
  return (
    <div className={styles["our-stack"]}>
      <div className={styles["stack"]}>
        <div className={styles["container"]}>
          <img className={styles["icon"]} src={csharp} alt="" />
          <p className={styles["container-text"]}>С sharp </p>
        </div>
        <div className={styles["container"]}>
          <img className={styles["icon"]} src={python} alt="" />
          <p className={styles["container-text"]}>Python</p>
        </div>
        <div className={styles["container"]}>
          <img className={styles["icon"]} src={js} alt="" />{" "}
          <p className={styles["container-text"]}>JavaScript</p>
        </div>
        <div className={styles["container"]}>
          <img className={styles["icon"]} src={unity} alt="" />{" "}
          <p className={styles["container-text"]}>Unity</p>
        </div>
      </div>
      <div className={styles["info"]}>
        {" "}
        <h3 className={styles["title"]}>Что мы делаем?</h3>{" "}
        <p className={styles["text"]}>
          <span>М</span>ы создаём игры, приложения, сайты и всё, что только
          захотим. <span>К</span>лассное коммьюнити подарит незабываемые
          впечатления от работы в команде и не даст заскучать вовремя написания
          кода. <span>М</span>ы поможем и направим, давай учиться и развиваться
          вместе!
        </p>
      </div>
    </div>
  );
}
