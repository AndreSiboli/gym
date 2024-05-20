import styles from "./contact.module.scss";

import Container from "@/app/components/layout/Container";
import Form from "./component/Form";
import Img from "@/app/components/utils/Img";

import Image from "@/assets/gym/yoga/sonnie-hiles-mubVauq1Esg-unsplash.jpg";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  return (
    <main className={styles.contact}>
      <Container>
        <div className={styles.contact_container}>
          <div className={styles.contact_info}>
            <h1>Get in <span>touch</span></h1>

            <Form />

            <div className={styles.contact_break}>
              <span>or</span>
            </div>

            <div className={styles.contact_phone}>
              <span>
                <FaPhone /> {`(${555})`} 123-4567
              </span>
            </div>
          </div>
          <div className={styles.contact_image}>
            <Img src={Image} />
          </div>
        </div>
      </Container>
    </main>
  );
}
