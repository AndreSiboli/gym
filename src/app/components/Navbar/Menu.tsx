"use client";

import { MouseEvent } from "react";
import styles from "@/styles/Navbar/Menu.module.scss";

import Link from "next/link";
import Dropdown from "../buttons/Dropdown";
import LinkButton from "../links/LinkButton";

import { FaXTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";
import { useParams } from "next/navigation";

interface PropsType {
  isActive: boolean;
  handleOutClick: () => void;
}

export default function Menu(props: PropsType) {
  const { isActive, handleOutClick } = props;
  const params = useParams();

  const domains = [
    { to: "/", text: "Home" },
    { to: "/#merchant", text: "About" },
    { to: "/#contact", text: "Contact" },
    { to: "/location", text: "Location" },
    { to: "/plans", text: "Plans" },
    { to: "/shop", text: "Shop" },
  ];

  function checkClose(e: MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;
    if (target.id === "menu") handleOutClick();
  }

  function closeWhenClicked() {
    handleOutClick();
  }

  return (
    <div
      className={`${styles.menu} ${isActive && styles.active}`}
      onClick={(e) => checkClose(e)}
      id="menu"
    >
      <div className={styles.menu_bar}>
        <div className={styles.menu_wrapper}>
          <nav className={styles.menu_navigation}>
            {domains.map((domain) => (
              <Link href={domain.to} key={domain.to} onClick={closeWhenClicked}>
                {domain.text}
              </Link>
            ))}
            <Dropdown />
            <div className={styles.navigation_button}>
              <LinkButton text="SCHEDULE" href="/schedule" variant="v1" />
            </div>
          </nav>

          <div className={styles.menu_bottom}>
            <nav className={styles.menu_social}>
              <Link href="https://www.x.com" target="_blank">
                <FaXTwitter />
              </Link>
              <Link href="https://www.tiktok.com" target="_blank">
                <FaTiktok />
              </Link>
              <Link href="https://www.instagram.com" target="_blank">
                <FaInstagram />
              </Link>
              <Link href="https://www.youtube.com" target="_blank">
                <FaYoutube />
              </Link>
            </nav>

            <div className={styles.menu_copy}>
              <p>Copyright &copy; {new Date().getFullYear()} Endurance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
