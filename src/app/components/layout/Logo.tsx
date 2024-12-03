import styles from "@/styles/layout/Logo.module.scss";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <h1>Endurance</h1>
    </Link>
  );
}
