import styles from "@/styles/pages/home/Workouts.module.scss";

import Container from "@/app/components/layout/Container";
import WorkoutCard from "@/app/components/layout/WorkoutCard";

import yoga from "@/assets/home/pexels-elina-fairytale-3822455.jpg";
import body from "@/assets/home/pexels-ibrahim-hafedh-16709929.jpg";
import sports from "@/assets/home/pexels-cottonbro-studio-4753988.jpg";
import ballet from "@/assets/home/pexels-cottonbro-studio-10640395.jpg";

export default function Workouts() {
  const workouts = [
    {
      title: "Yoga",
      slogan: "Strengthening Body, Mind, and Spirit.",
      src: yoga,
      link: "/workouts/yoga",
      alt: "Yoga page",
    },
    {
      title: "Body",
      slogan: "Sculpting Strength, Shaping Stamina.",
      src: body,
      link: "/workouts/bodybuilding",
      alt: "Bodybuiding page",
    },
    {
      title: "Sports",
      slogan: "Elevate Your Limits, Embrace the Challenge.",
      src: sports,
      link: "/workouts/sports",
      alt: "Sport page",
    },
    {
      title: "Ballet",
      slogan: "Dance with Resilience, Shine with Grace.",
      src: ballet,
      link: "/workouts/ballet",
      alt: "Ballet page",
    },
  ];

  return (
    <section className={styles.workouts}>
      <Container>
        <div className={styles.workouts_container}>
          <div className={styles.workouts_title}>
            <h2>
              Choose your <span>workout!</span>
            </h2>
          </div>
          
          <div className={styles.workouts_wrapper}>
            {workouts.map((workout) => (
              <WorkoutCard data={workout} key={workout.title} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
