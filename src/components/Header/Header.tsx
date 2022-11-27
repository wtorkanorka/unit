import styles from "./Header.module.css";
import MainIcon from "../../assets/icons/unit-main.jpg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className={styles["header"]}>
      <Link className={styles["link"]} to="/">
        <img className={styles["header-img"]} src={MainIcon} alt="" />
      </Link>
      <ul className={styles["list"]}>
        <li className={styles["item"]}>
          {" "}
          <Link to="/programmers">
            <h5 className={styles["title"]}>Программисты</h5>
          </Link>{" "}
        </li>
        <li className={styles["item"]}>
          {" "}
          <Link to="/designers">
            <h5 className={styles["title"]}>Дизайнеры</h5>
          </Link>
        </li>
        <li className={styles["item"]}>
          {" "}
          <Link to="/3ddesigners">
            <h5 className={styles["title"]}>3D Дизайнеры</h5>{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}
