import styles from "@/styles/pages/home/Hero.module.scss";

import Link from "next/link";
import Wallpaper from "@/app/components/layout/Wallpaper";

import wallpaperMain from "@/assets/gym/bodybuilding/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club.jpg";
import { FaArrowDown } from "react-icons/fa6";

export default function Hero() {
  return (
    <main className={styles.hero}>
      <Wallpaper
        src={wallpaperMain}
        title="Endurance"
        slogan="Redefine Limits, Embrace Endurance!"
      />

      <Link href={"#merchant"}>
        <FaArrowDown />
      </Link>
    </main>
  );
}
