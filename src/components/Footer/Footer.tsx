import styles from "./Footer.module.css";
import footerUnit from "../../assets/icons/qr-unit.png";
import tikTok from "../../assets/icons/tik-tok-footer.jpg";
import tg from "../../assets/icons/tg-footer.png";
import vk from "../../assets/icons/vk-footer.jpg";
import youtube from "../../assets/icons/youtube.png";

export function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["main-icon-part"]}>
        <img className={styles["main-icon"]} src={footerUnit} alt="" />
      </div>
      <div className={styles["media-part-container"]}>
        <h4>Мы здесь</h4>
        <div className={styles["media-part"]}>
          <a className={styles["media-link"]} href="">
            <img className={styles["media-icon"]} src={tikTok} alt="" />
          </a>
          <a className={styles["media-link"]} href="https://vk.com/unit.usue">
            <img className={styles["media-icon"]} src={vk} alt="" />
          </a>
          <a className={styles["media-link"]} href="">
            <img className={styles["media-icon"]} src={tg} alt="" />
          </a>
          <a
            className={styles["media-link"]}
            href="https://www.youtube.com/@UNIT-usue"
          >
            <img
              style={{ background: "white", borderRadius: " 5px" }}
              className={styles["media-icon"]}
              src={youtube}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className={styles["container"]}>
        <h4 className={styles["title"]}>Ждём в гости</h4>
        <p className={styles["text"]}>ул. 8 Марта, 68</p>
      </div>
      <div className={styles["container"]}>
        <h4 className={styles["title"]}>Связь</h4>
        <p className={styles["text"]}>unit@gmail.com</p>
        <p className={styles["text"]}>+7(999)-999-99-99</p>
      </div>
    </footer>
  );
}
