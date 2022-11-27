import styles from "./Form.module.css";
import * as yup from "yup";
import "yup-phone";
import { useFormik } from "formik";
import cx from "classnames";
import InputMask from "react-input-mask";

export function Form() {
  const basicSchema = yup.object().shape({
    name: yup.string().required("Это обязательное поле"),
    email: yup
      .string()
      .email("Введите корректный Email")
      .required("Это обязательное поле"),
    subject: yup.string().required("Это обязательное поле"),
    message: yup
      .string()
      .min(5, "Должно быть минимум 5 символов")
      .required("Это обязательное поле"),
    mobile: yup
      .string()
      .phone("", false, "Введите корректный номер")
      .required("Это обязательное поле"),
  });
  const { values, errors, touched, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        subject: "",
        message: "",
        mobile: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: basicSchema,
    });
  console.log(values);
  return (
    <div className={styles["form-container"]}>
      <h3 className={styles["text-part"]}>
        Уже присмотрел что-то по душе? Тогда присоединяйся к нам!
      </h3>
      <form onSubmit={handleSubmit} className={styles["form-part"]}>
        <div className={styles["input-container"]}>
          <input
            className={styles["input"]}
            type="text"
            id="name"
            placeholder="Имя"
            onChange={handleChange}
            value={values.name}
          />{" "}
          <div className={styles["error-container"]}>
            {errors.name && touched.name && (
              <p className={styles["error-text"]}>{errors.name}</p>
            )}{" "}
          </div>
          <input
            className={styles["input"]}
            type="text"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            value={values.email}
          />
          <div className={styles["error-container"]}>
            {errors.email && touched.email && (
              <p className={styles["error-text"]}>{errors.email}</p>
            )}
          </div>
          <select
            className={cx(styles["input-select"])}
            onChange={handleChange}
            value={values.subject}
            name="subject"
            style={{ fontFamily: "Ablation" }}
          >
            <option className={styles["option"]} value="Человек">
              Человек
            </option>

            <option className={styles["option"]}>Программист</option>
            <option className={styles["option"]}>Дизайнер</option>
            <option className={styles["option"]}>3D дизайнер</option>
          </select>
          <div className={styles["error-container"]}>
            {errors.subject && touched.subject && (
              <p className={styles["error-text"]}>{errors.subject}</p>
            )}{" "}
          </div>
          <InputMask
            className={styles["input"]}
            type="text"
            mask="+7-(999)-999-9999"
            id="mobile"
            placeholder="Mobile No"
            value={values.mobile}
            onChange={handleChange}
          ></InputMask>
          <div className={styles["error-container"]}>
            {errors.mobile && touched.mobile && (
              <p className={styles["error-text"]}>{errors.mobile}</p>
            )}
          </div>
          <textarea
            typeof="text"
            className={styles["input"]}
            id="message"
            placeholder="Send Message"
            onChange={handleChange}
            value={values.message}
          ></textarea>
          <div className={styles["error-container"]}>
            {errors.message && touched.message && (
              <p className={styles["error-text"]}>{errors.message}</p>
            )}
          </div>
        </div>

        {!isSubmitting ? (
          <button typeof="submit" className={styles["button"]}>
            Отправить
          </button>
        ) : (
          <button
            disabled
            typeof="submit"
            className={cx(styles["button"], styles["button-disabled"])}
          >
            Отправлено
          </button>
        )}
      </form>
    </div>
  );
}
