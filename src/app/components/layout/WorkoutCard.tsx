import styles from "@/styles/layout/WorkoutCard.module.scss";
import Img from "../utils/Img";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface PropsType {
  data: {
    title: string;
    slogan: string;
    src: string | StaticImageData;
    link: string;
    alt: string;
  };
}

export default function WorkoutCard(props: PropsType) {
  const { data } = props;
  const { title, slogan, src, link, alt } = data;

  return (
    <Link href={link} className={styles.card} aria-label={alt}>
      <div className={styles.card_image}>
        <Img src={src} />
      </div>

      <div className={styles.card_title}>
        <div className={styles.card_title_wrapper}>
          <h3>{title}</h3>
          <p>{slogan}</p>
        </div>
      </div>
    </Link>
  );
}
