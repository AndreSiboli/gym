import styles from "@/styles/pages/home/Contact.module.scss";

import Container from "@/app/components/layout/Container";
import Form from "@/app/components/form/Form";
import Img from "@/app/components/utils/Img";

import messageImage from "@/assets/home/girl-standing.png";

export default function Contact() {
  return (
    <main className={styles.contact} id="contact">
      <Container>
        <div className={styles.contact_container}>
          <section className={styles.contact_info}>
            <div className={styles.info_title}>
              <h1>Get in touch</h1>
            </div>
            <Form />
          </section>

          <section className={styles.contact_overflow}>
            <figure className={styles.contact_image}>
              <Img
                src={messageImage}
                style={{ objectFit: "contain", objectPosition: "50% 50%" }}
              />
            </figure>
          </section>
        </div>
      </Container>
    </main>
  );
}
