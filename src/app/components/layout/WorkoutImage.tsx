import { StaticImageData } from "next/image";
import { CSSProperties } from "react";
import styles from "@/styles/layout/WorkoutImages.module.scss";

import Img from "../utils/Img";

interface PropsTypes {
  datas: {
    id: string;
    src: string | StaticImageData;
    styleImg?: CSSProperties;
  }[];
}

export default function WorkoutImages(props: PropsTypes) {
  const { datas } = props;

  return (
    <section className={styles.description}>
      <div className={styles.description_container}>
        {datas.map((data) => (
          <div className={styles.description_card} key={data.id}>
            <div className={styles.description_image}>
              <Img src={data.src} style={data.styleImg} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
