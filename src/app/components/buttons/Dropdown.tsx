"use client";

import styles from "@/styles/buttons/Dropdown.module.scss";
import Link from "next/link";
import { useState } from "react";

import { FaAngleDown } from "react-icons/fa6";

export default function Dropdown() {
  const [isActive, setIsActive] = useState(false);

  function defineIsActive() {
    setIsActive((prevState) => !prevState);
  }

  return (
    <div className={`${styles.dropdown} ${isActive && styles.active}`}>
      <span onClick={defineIsActive}>
        Workouts <FaAngleDown />
      </span>
      <div className={styles.dropdown_child}>
        <nav className={styles.dropdown_navigation}>
          <Link href="/workouts/ballet">Ballet</Link>
          <Link href="/workouts/bodybuilding">Bodybuilding</Link>
          <Link href="/workouts/sports">Sports</Link>
          <Link href="/workouts/yoga">Yoga</Link>
        </nav>
      </div>
    </div>
  );
}
