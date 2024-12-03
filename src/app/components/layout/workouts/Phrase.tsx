import { StaticImageData } from "next/image";
import styles from "@/styles/layout/workouts/Phrase.module.scss";

import Container from "@/app/components/layout/Container";
import LinkButton from "@/app/components/links/LinkButton";
import Img from "@/app/components/utils/Img";

interface PropsType {
  text: string;
  src: StaticImageData;
}

export default function Phrase(props: PropsType) {
  const { text, src } = props;

  return (
    <section className={styles.merchant} id="merchant">
      <Container>
        <div className={styles.merchant_container}>
          <div className={styles.merchant_image_con}>
            <figure className={styles.merchant_image}>
              <Img src={src} style={{ objectFit: "contain" }} />
            </figure>
          </div>

          <div className={styles.merchant_info}>
            <h1>Start the evolution now!</h1>
            <p>{text}</p>

            <div className={styles.info_button}>
              <LinkButton text="JOIN US" href="/schedule" variant="v2" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
