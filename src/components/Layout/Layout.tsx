import styles from "./Layout.module.css";
import { HTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function Layout({ children }: Props) {
  return <div className={styles["layout"]}>{children}</div>;
}
