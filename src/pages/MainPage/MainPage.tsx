import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

import { MainPerson } from "../../components/MainPerson/MainPerson";
import { Form } from "./components/Form/Form";
import { MainPageHero } from "./components/MainPageHero/MainPageHero";
import { OurGroups } from "./components/OurGroups/OurGroups";
import styles from "./MainPage.module.css";
import andrey from "./../../assets/images/andrey.jpg";
import { OurActivities } from "./components/OurActivities/OurActivities";

export function MainPage() {
  return (
    <>
      <Header />
      <MainPageHero />
      <OurGroups />
      <OurActivities />
      <MainPerson className={styles["main-person"]}>
        <img className={styles["img"]} src={andrey} alt="" />
        <div className={styles["info"]}>
          {" "}
          <h3 className={styles["title"]}>Руководитель ЮНИТ</h3>{" "}
          <h2 className={styles["name"]}>Андрей</h2>
          <div className={styles["main-info"]}>
            <ul className={styles["list"]}>
              <li>
                <h5 className={styles["list-title"]}>Наставник</h5>
              </li>
              <li>
                <h5 className={styles["list-title"]}>
                  Победитель конкурса "Новое Железо"
                </h5>
              </li>
              <li>
                <h5 className={styles["list-title"]}>
                  Состоит в Академии ведущих
                </h5>
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
      <Form />

      <Footer />
    </>
  );
}
