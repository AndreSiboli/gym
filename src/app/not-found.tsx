import styles from "./not-found.module.scss";

import Container from "./components/layout/Container";
import { FaDumbbell } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className={styles.notfound}>
      <Container>
        <div className={styles.notfound_container}>
          <div className={styles.notfound_err}>
            <p>
              404
              <FaDumbbell />
            </p>
          </div>
          <div className={styles.notfound_message}>
            <p>This page was not found. Go work out anywhere!</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
