import Link from "next/link";
import styles from "./spin-gradient-button.module.css";

export default function SpinGradientButton() {
  return (
    <Link href="/contact" className={styles["spin-gradient-button"]}>
      <span className={styles["spin-gradient-button__pill"]}>
        <span className={styles["spin-gradient-button__gradient"]} aria-hidden="true"></span>
        <span className={styles["spin-gradient-button__inner"]}>
          <span className={styles["spin-gradient-button__label"]}>
            <span className={styles["status-dot"]}></span>
            Accepting select projects
          </span>
        </span>
      </span>
    </Link>
  );
}
