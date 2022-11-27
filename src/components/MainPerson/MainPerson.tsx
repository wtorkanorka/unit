import styles from "./MainPerson.module.css";
import semen from "../../assets/images/semen.jpg";
import { HTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;
export function MainPerson({ children }: Props) {
  return <div className={styles["container"]}>{children}</div>;
}
