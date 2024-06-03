import styles from "@/styles/layout/workouts/Phrase.module.scss";

import Container from "../Container";

interface PropsType {
  text: string;
}

export default function Phrase(props: PropsType) {
  const { text } = props;
  
  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.about_container}>
          <p>{text}</p>
        </div>
      </Container>
    </section>
  );
}
