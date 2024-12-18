import styles from "@/styles/layout/Footer.module.scss";

import Container from "./Container";
import Logo from "@/app/components/layout/Logo";
import Link from "next/link";
import {
  FaEnvelope,
  FaInstagram,
  FaMapPin,
  FaPhone,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  const social = [
    {
      logo: <FaXTwitter />,
      href: "https://www.x.com",
      alt: "X(Twitter)",
    },
    {
      logo: <FaTiktok />,
      href: "https://www.tiktok.com",
      alt: "Tik Tok",
    },
    {
      logo: <FaInstagram />,
      href: "https://www.instagram.com",
      alt: "Instagram",
    },
    {
      logo: <FaYoutube />,
      href: "https://www.youtube.com",
      alt: "Youtube",
    },
  ];

  const mentions = [
    { link: "https://www.pexels.com/pt-br/@cottonbro/", mention: "Cottonbro" },
    {
      link: "https://www.pexels.com/pt-br/@elly-fairytale/",
      mention: "Elina Fairytale",
    },
    {
      link: "https://www.pexels.com/pt-br/@morpheus-187261141/",
      mention: "Morpheus",
    },
    {
      link: "https://www.pexels.com/pt-br/@anastasia-shuraeva/",
      mention: "Anastasia Shuraeva",
    },
    {
      link: "https://www.pexels.com/",
      mention: "Pexels",
    },
  ];

  const contacts = [
    {
      svg: <FaPhone />,
      info: "(555) 123-4567",
    },
    {
      svg: <FaEnvelope />,
      info: "endurance.fic@outlook.com",
    },
    {
      svg: <FaMapPin />,
      info: "Crimson Crest Avenue",
    },
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_container}>
          <div className={styles.footer_top}>
            <nav className={styles.footer_social}>
              {social.map((item) => (
                <Link
                  href={item.href}
                  target="_blank"
                  aria-label={item.alt}
                  key={item.href}
                >
                  {item.logo}
                </Link>
              ))}
            </nav>
            <Logo />
          </div>

          <div className={styles.footer_infos}>
            <div className={styles.footer_infos_wrapper}>
              <div className={styles.footer_find}>
                <div className={styles.footer_find_title}>
                  <span>Find us</span>
                </div>
                <div className={styles.footer_find_links}>
                  {contacts.map((contact) => (
                    <span key={contact.info}>
                      {contact.svg}
                      {contact.info}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.footer_metions}>
                <div className={styles.footer_metions_title}>
                  <span>Mentions</span>
                </div>
                <nav className={styles.footer_metions_links}>
                  {mentions.map((mention) => (
                    <Link href={mention.link} key={mention.mention}>
                      {mention.mention}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            <div className={styles.footer_links}>
              <Link href="/">Terms and Conditions</Link>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Work With Us</Link>
              <Link href="#contact">Contact Us</Link>
            </div>
          </div>

          <div className={styles.footer_copyright}>
            <p>Copyrght &copy; {new Date().getFullYear()} Endurance</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
