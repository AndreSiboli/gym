import { CSSProperties } from "react";
import { StaticImageData } from "next/image";
import styles from "@/styles/layout/Wallpaper.module.scss";

import Img from "../utils/Img";
import Container from "./Container";

interface PropsType {
  src: string | StaticImageData;
  title: string;
  slogan: string;
  stylesImg?: CSSProperties;
}

export default function Wallpaper(props: PropsType) {
  const { src, title, slogan, stylesImg } = props;

  return (
    <main className={styles.main}>
      <div className={styles.main_wallpaper}>
        <Img src={src} style={stylesImg} />
      </div>
      <Container>
        <div className={styles.main_container}>
          <div className={styles.main_merchant}>
            <h1>{title}</h1>
            <p>{slogan}</p>
          </div>
        </div>
      </Container>
    </main>
  );
}
