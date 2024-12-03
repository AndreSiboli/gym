import styles from "@/styles/pages/home/Merchant.module.scss";

import Container from "@/app/components/layout/Container";
import Img from "@/app/components/utils/Img";
import LinkButton from "@/app/components/links/LinkButton";

import merchantImage from "@/assets/home/girl-fitness.png";

export default function Merchant() {
  return (
    <section className={styles.merchant} id="merchant">
      <Container>
        <div className={styles.merchant_container}>
          <figure className={styles.merchant_image}>
            <Img src={merchantImage} style={{ objectFit: "contain" }} />
          </figure>

          <div className={styles.merchant_info}>
            <h1>Start the evolution now!</h1>
            <p>
              We believe in pushing limits and achieving greatness. Our
              state-of-the-art facilities are designed to cater to all fitness
              levels, offering a diverse range of equipment and classes. Whether
              you&apos;re looking to build strength, improve your endurance, or find
              a supportive community, our expert trainers are here to guide you
              every step of the way. Join us and transform your fitness routine
              into a lifestyle.
            </p>

            <div className={styles.info_button}>
              <LinkButton text="JOIN US" href="/schedule" variant="v2"/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
