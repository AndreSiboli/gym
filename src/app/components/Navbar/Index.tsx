"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "@/styles/Navbar/Index.module.scss";

import Link from "next/link";
import Container from "@/app/components/layout/Container";
import Menu from "@/app/components/Navbar/Menu";
import Logo from "@/app/components/layout/Logo";
import LinkButton from "../links/LinkButton";

import { HiOutlineShoppingCart } from "react-icons/hi2";

export default function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isOnTop, setIsOnTop] = useState(false);
  const [isBase, setIsBase] = useState(false);
  const router = usePathname();

  function scrolling() {
    const scroll = window.scrollY;

    if (scroll === 0) setIsOnTop(true);
    else setIsOnTop(false);
  }

  useEffect(() => {
    const body = document.body.style;
    body.overflow = "auto";
    setIsMenuActive(false);
  }, [router]);

  useEffect(() => {
    const bases = [
      "/",
      "/workouts/yoga",
      "/workouts/ballet",
      "/workouts/bodybuilding",
      "/workouts/sports",
      "/shop",
    ];

    const checkup = bases.filter((base) => base === router);

    setIsBase(checkup.length === 1 ? true : false);
  }, [router]);

  useEffect(() => {
    scrolling();
  }, []);

  useEffect(() => {
    window.onscroll = scrolling;

    return () => {
      window.onscroll = null;
    };
  }, [isOnTop]);

  function openClose() {
    const body = document.body.style;
    if (!isMenuActive) body.overflow = "hidden";
    else body.overflow = "auto";
    defineMenuActive();
  }

  function defineMenuActive() {
    setIsMenuActive((prevState) => !prevState);
  }

  return (
    <header
      className={`${styles.header} ${isOnTop && styles.ontop} ${
        isMenuActive && styles.active
      } ${isBase && styles.base}`}
    >
      <Container>
        <div className={styles.header_container}>
          <div className={styles.header_start}>
            <div
              className={`${styles.start_hamburger} ${
                isMenuActive && styles.active
              }`}
              onClick={openClose}
            >
              <div className={styles.trace}></div>
              <div className={styles.trace}></div>
              <div className={styles.trace}></div>
            </div>
            <div className={styles.start_logo}>
              <Logo />
            </div>
          </div>

          <div className={styles.header_end}>
            <div className={styles.end_cart}>
              <Link href="/shop/cart" aria-label="Cart">
                <HiOutlineShoppingCart />
              </Link>
            </div>
            <div className={styles.end_button}>
              <LinkButton
                text="SCHEDULE"
                href="/schedule"
                variant={isOnTop && isBase ? "v1" : "v2"}
                style={{ fontSize: ".95em" }}
              />
            </div>
          </div>
        </div>
      </Container>

      <Menu isActive={isMenuActive} handleOutClick={openClose} />
    </header>
  );
}
