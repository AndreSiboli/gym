import Img from "@/app/components/utils/Img";
import styles from "./sports.module.scss";

import img from "@/assets/gym/sports/pexels-cottonbro-studio-4753923.jpg";
import Wallpaper from "@/app/components/layout/Wallpaper";
import Container from "@/app/components/layout/Container";
import WorkoutImages from "@/app/components/layout/WorkoutImage";
import Schedule from "@/app/components/layout/workouts/Schedule";

import sports1 from "@/assets/gym/sports/pexels-cottonbro-studio-4761795.jpg";
import sports2 from "@/assets/gym/sports/pexels-edward-eyer-13947313.jpg";
import sports3 from "@/assets/gym/sports/pexels-chiara-caldarola-1257245.jpg";

export default function Sports() {
  const datas = [
    {
      id: "1",
      src: sports1,
      text: "Embrace Each Posture as a Journey, Each Breath as a Guide, and",
      styleImg: { objectPosition: "50% 50%" },
    },
    {
      id: "2",
      src: sports2,
      text: "Embrace Each Posture as a Journey, Each Breath as a Guide, and an",
      styleImg: { objectPosition: "50% 40%" },
    },
    {
      id: "3",
      src: sports3,
      text: "Embrace Each Posture as a Journey, Each Breath as a Guide, and a",
      styleImg: { objectPosition: "50% 0%" },
      reverse: true,
    },
  ];
  
  return (
    <>
      <Wallpaper
        src={img}
        title="Sports"
        slogan="Elevate Your Limits, Embrace the Challenge."
        stylesImg={{ objectPosition: "50% 50%" }}
      />

      <section className={styles.about}>
        <Container>
          <div className={styles.about_container}>
            <p>
              It&apos;s More Than Just Physical Activity; It&apos;s a Universal Language
              That Unites Cultures and Transcends Boundaries. It&apos;s Where Dreams
              Take Flight, Legends Are Born, and the Essence of Excellence
              Endures.
            </p>
          </div>
        </Container>
      </section>

      <WorkoutImages datas={datas} />
      <Schedule />
    </>
  );
}
