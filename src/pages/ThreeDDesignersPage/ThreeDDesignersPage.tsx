import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MainPerson } from "../../components/MainPerson/MainPerson";
import styles from "./ThreeDDesignersPage.module.css";
import semen from "../../assets/images/semen.jpg";

import { ThreeDDesignersHero } from "./components/ThreeDDesignersHero/ThreeDDesignersHero";
import { OurProject } from "./components/OurProjects/OurProjects";
import { Projects } from "./components/Projects/Projects";
import { Stack } from "./components/Stack/Stack";

export function ThreeDDesignersPage() {
  return (
    <>
      <Header />
      <ThreeDDesignersHero />
      <Stack />
      <OurProject />
      <Projects />
      <MainPerson className={styles["main-person"]}>
        <img className={styles["img"]} src={semen} alt="" />
        <div className={styles["info"]}>
          {" "}
          <h3 className={styles["title"]}>Руководитель</h3>
          <h2 className={styles["name"]}>Семён</h2>
          <div className={styles["main-info"]}>
            <ul className={styles["list"]}>
              <li>
                <h5>Глава отдела 3D-дизайна </h5>
              </li>
              <li>
                <h5>Заместитель руководителя СО ЮНИТ</h5>
              </li>
              <li>
                <h5>И просто хороший парень</h5>
              </li>
              <li>
                <h4>Цитата:</h4>
                <h5> У меня в глазах два солнца</h5>
              </li>
            </ul>
            <h4>Контакты</h4>
            <ul>
              <li>
                <p>email: test@test.com</p>
              </li>
              <li>
                <p>Тел. : 7 999 999 99 99</p>
              </li>
            </ul>
          </div>
        </div>
      </MainPerson>
      <Footer />
    </>
  );
}
