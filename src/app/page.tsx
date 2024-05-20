import styles from "./page.module.scss";

import Container from "@/app/components/layout/Container";
import WorkoutCard from "@/app/components/layout/WorkoutCard";
import Wallpaper from "@/app/components/layout/Wallpaper";
import LinkButton from "@/app/components/links/LinkButton";

import wallpaperMain from "@/assets/gym/bodybuilding/pexels-li-sun-2294361.jpg";
import yoga from "@/assets/home/pexels-elina-fairytale-3822455.jpg";
import body from "@/assets/home/pexels-ibrahim-hafedh-16709929.jpg";
import sports from "@/assets/home/pexels-cottonbro-studio-4753988.jpg";
import ballet from "@/assets/home/pexels-cottonbro-studio-10640395.jpg";

export default function Home() {
  const datas = [
    {
      title: "Yoga",
      slogan: "Strengthening Body, Mind, and Spirit.",
      src: yoga,
      link: "/workouts/yoga",
      alt: 'Link to yoga page'
    },
    {
      title: "Body",
      slogan: "Sculpting Strength, Shaping Stamina.",
      src: body,
      link: "/workouts/bodybuilding",
      alt: 'Link to bodybuiding page'
    },
    {
      title: "Sports",
      slogan: "Elevate Your Limits, Embrace the Challenge.",
      src: sports,
      link: "/workouts/sports",
      alt: 'Link to sport page'
    },
    {
      title: "Ballet",
      slogan: "Dance with Resilience, Shine with Grace.",
      src: ballet,
      link: "/workouts/ballet",
      alt: 'Link to ballet page'
    },
  ];

  return (
    <>
      <Wallpaper
        src={wallpaperMain}
        title="Endurance"
        slogan="Redefine Limits, Embrace Endurance!"
      />

      <section className={styles.about}>
        <Container>
          <div className={styles.about_container}>
            <p>
              Join Endurance Gym today and unleash your inner athlete. Your
              journey to a stronger, healthier you starts here.
            </p>
            <div className={styles.about_button}>
              <LinkButton text="MORE ABOUT" to="/about" />
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.workouts}>
        <Container>
          <div className={styles.workouts_container}>
            <h2>Choose your <span>workout!</span></h2>
            <div className={styles.workouts_wrapper}>
              {datas.map((data) => (
                <WorkoutCard data={data} key={data.title} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.about}>
        <Container>
          <div className={styles.about_container}>
            <p>
              What are you waiting for?
              <br />
              Make a schedule now!
            </p>
            <div className={styles.about_button}>
              <LinkButton text="SCHEDULE" to="/schedule" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
