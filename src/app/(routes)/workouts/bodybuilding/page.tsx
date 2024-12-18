import styles from "./bodybuilding.module.scss";

import Wallpaper from "@/app/components/layout/Wallpaper";
import WorkoutImages from "@/app/components/layout/WorkoutImage";
import Schedule from "@/app/components/layout/workouts/Schedule";
import Phrase from "@/app/components/layout/workouts/Phrase";

import img from "@/assets/gym/bodybuilding/pexels-victor-freitas-2261477.jpg";
import body1 from "@/assets/gym/bodybuilding/pexels-marcus-chan-17898141.jpg";
import body2 from "@/assets/gym/bodybuilding/pexels-morpheus-11319087.jpg";
import body3 from "@/assets/gym/bodybuilding/pexels-tima-miroshnichenko-6389075.jpg";
import image from "@/assets/gym/bodybuilding/body-lifting.png";

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

      <Phrase
        text="Beyond the Gym, Bodybuilding Becomes a Lifestyle of Discipline,
              Focus, and Self-Discovery. It's Not Just About Building Muscles; It's About
              Building Character, Confidence, and a Legacy of Endurance."
        src={image}
      />

      <WorkoutImages datas={datas} />
      <Schedule />
    </>
  );
}
