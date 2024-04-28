import Img from "@/app/components/utils/Img";
import styles from "./bodybuilding.module.scss";

import img from "@/assets/gym/bodybuilding/pexels-victor-freitas-2261477.jpg";
import Wallpaper from "@/app/components/layout/Wallpaper";
import WorkoutImages from "@/app/components/layout/WorkoutImage";
import Schedule from "@/app/components/layout/workouts/Schedule";
import Container from "@/app/components/layout/Container";

import body1 from "@/assets/gym/bodybuilding/pexels-marcus-chan-17898141.jpg";
import body2 from "@/assets/gym/bodybuilding/pexels-morpheus-11319087.jpg";
import body3 from "@/assets/gym/bodybuilding/pexels-tima-miroshnichenko-6389075.jpg";

export default function BodyBuilding() {
  const datas = [
    {
      id: "1",
      src: body1,
      text: "Embrace Each Posture as a Journey, Each Breath as a Guide, and",
      styleImg: { objectPosition: "50% 50%" },
    },
    {
      id: "2",
      src: body2,
      text: "Embrace Each Posture as a Journey, Each Breath as a Guide, and an",
      styleImg: { objectPosition: "50% 75%" },
    },
    {
      id: "3",
      src: body3,
      text: "Embrace Each Posture as a Journey, Each Breath as a Guide, and a",
      styleImg: { objectPosition: "50% 60%" },
      reverse: true,
    },
  ];

  return (
    <>
      <Wallpaper
        src={img}
        title="Bodybuilding"
        slogan="Sculpting Strength, Shaping Stamina."
        stylesImg={{ objectPosition: "50% 50%" }}
      />

      <section className={styles.about}>
        <Container>
          <div className={styles.about_container}>
            <p>
              Beyond the Gym, Bodybuilding Becomes a Lifestyle of Discipline,
              Focus, and Self-Discovery, Fostering Resilience and Unveiling
              Potential. It&apos;s Not Just About Building Muscles; It&apos;s About
              Building Character, Confidence, and a Legacy of Endurance.
            </p>
          </div>
        </Container>
      </section>

      <WorkoutImages datas={datas} />
      <Schedule />
    </>
  );
}
