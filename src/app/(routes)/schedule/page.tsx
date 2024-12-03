"use client";

import { useEffect } from "react";
import styles from "./schedule.module.scss";
import { useRouter } from "next/navigation";
import Container from "@/app/components/layout/Container";

export default function Schedule() {
  const route = useRouter();
  
  useEffect(() => {
    route.push("/plans");
  }, []);

  return (
    <div className={styles.schedule}>
      <Container>
        <div className={styles.schedule_container}>
          <p>
            This route will be made soon! Actually, I&apos;m focused on another
            project.
          </p>
        </div>
      </Container>
    </div>
  );
}
