import styles from "./about.module.scss";

import Container from "@/app/components/layout/Container";
import LinkButton from "@/app/components/links/LinkButton";
import Img from "@/app/components/utils/Img";

import { FaQuoteLeft } from "react-icons/fa6";
import ballet from "@/assets/gym/ballet/ballerina-6645970_1920.jpg";
import body from "@/assets/gym/bodybuilding/sushil-ghimire-5UbIqV58CW8-unsplash.jpg";

export default function About() {
  return (
    <main className={styles.about}>
      <Container>
        <div className={styles.about_container}>
          <div className={styles.about_info}>
            <h1>About Us</h1>
            <p>
              Welcome to Endurance Gym, where determination meets results and
              sweat transforms into strength. At Endurance, we&apos;re more than
              just a gym; we&apos;re a community of individuals committed to
              pushing boundaries, surpassing limits, and achieving our fitness
              goals together. We have a lot of activities here such as Ballet,
              Yoga, Bodybuilding, Swimming, Boxe and Running. So what are you
              waiting for?
            </p>

            <div className={styles.info_quotes}>
              <p>
                Embrace the challenges, ignite your passion, and let
                perseverance be your fuel on the journey to greatness. -{" "}
                <strong>Elysian Valecroft</strong>
              </p>
              <FaQuoteLeft />
            </div>

            <div className={styles.info_button}>
              <LinkButton text="JOIN US" to="/schedule" />
            </div>
          </div>

          <div className={styles.about_image}>
            <div className={styles.image}>
              <Img src={body} style={{ borderRadius: "0.5em" }} />
            </div>
            <div className={styles.image}>
              <Img src={ballet} style={{ borderRadius: "0.5em" }} />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
