import styles from "@/styles/layout/workouts/Schedule.module.scss";

import Container from "@/app/components/layout/Container";
import LinkButton from "../../links/LinkButton";

export default function Schedule() {
  return (
    <section className={styles.schedule}>
      <Container>
        <div className={styles.schedule_container}>
          <div className={styles.schedule_title}>
            <h1>How to make a schedule?</h1>
          </div>

          <div className={styles.schedule_how}>
            <div className={styles.schedule_step}>
              <h2>
                <span>1</span>. Become a Membership
              </h2>
              <p>
                Firtly, you&apos;ll have to become a membership. Go make it now!
              </p>
            </div>
            <div className={styles.schedule_step}>
              <h2>
                <span>2</span>. Choose a plan
              </h2>
              <p>Choose a plan that includes what you want. This way!</p>
            </div>
            <div className={styles.schedule_step}>
              <h2>
                <span>3</span>. Make a schedule
              </h2>
              <p>Now, you&apos;ll just need to make your schedule.</p>
            </div>
          </div>

          <div className={styles.schedule_button}>
            <div className={styles.button_container}>
              <LinkButton text="MAKE A SCHEDULE?" to="/schedule"/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
