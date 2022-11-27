import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MainPerson } from "../../components/MainPerson/MainPerson";
import styles from "./DesignersPage.module.css";
import sergey from "../../assets/images/sergey.jpg";
import { DesignersHero } from "./components/DesignersHero/DesignersHero";
import { Projects } from "./components/Projects/Projects";
import { OurProjects } from "./components/OurProjects/OurProjects";
import { Stack } from "./components/Stack/Stack";

export function DesignersPage() {
  return (
    <>
      <Header />
      <DesignersHero />
      <Stack />
      <Projects />
      <OurProjects />
      <MainPerson>
        <img className={styles["img"]} src={sergey} alt="" />
        <div className={styles["info"]}>
          {" "}
          <h3 className={styles["title"]}>Руководитель</h3>{" "}
          <h2 className={styles["name"]}>Сергей</h2>
          <div className={styles["main-info"]}>
            <ul className={styles["list"]}>
              <li>
                <h5 className={styles["list-title"]}>главный дизайнер ЮНИТ</h5>
              </li>
              <li>
                <h5 className={styles["list-title"]}>видеограф</h5>
              </li>
              <li>
                <h5 className={styles["list-title"]}>фотограф</h5>
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
