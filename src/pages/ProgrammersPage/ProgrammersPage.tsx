import { Header } from "../../components/Header/Header";
import { MainPerson } from "../../components/MainPerson/MainPerson";
import { OurStack } from "./components/OurStack/OurStack";
import { ProgrammersPageHero } from "./components/ProgrammersPageHero/ProgrammersPageHero";
import styles from "./ProgrammersPage.module.css";
import anar from "../../assets/images/anar.jpg";
import { Footer } from "../../components/Footer/Footer";
import { OurProject } from "./components/OurProjects/OurProjects";
import { OurActivities } from "./components/OurActivities/OurAcrivities";

export function ProgrammersPage() {
  return (
    <>
      <Header />
      <ProgrammersPageHero />
      <OurStack />
      <OurActivities />
      <OurProject />
      <MainPerson className={styles["main-person"]}>
        <img className={styles["img"]} src={anar} alt="" />
        <div className={styles["info"]}>
          {" "}
          <h3 className={styles["title"]}>Руководитель</h3>{" "}
          <h2 className={styles["name"]}>Анар</h2>
          <div className={styles["main-info"]}>
            <ul className={styles["list"]}>
              <li>
                <h5>Главный разработчик ЮНИТ</h5>
              </li>
              <li>
                <h5>Java Разработчик</h5>
              </li>
              <li>
                <h5>Преподаватель программирования</h5>
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
