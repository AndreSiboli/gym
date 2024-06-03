import styles from "./yoga.module.scss";

import Container from "@/app/components/layout/Container";
import Wallpaper from "@/app/components/layout/Wallpaper";
import Button from "@/app/components/buttons/Button";
import WorkoutImages from "@/app/components/layout/WorkoutImage";

import img from "@/assets/gym/yoga/pexels-elina-fairytale-3823076.jpg";
import yoga1 from "@/assets/gym/yoga/pexels-elina-fairytale-3822719.jpg";
import yoga2 from "@/assets/gym/yoga/pexels-elina-fairytale-3823184.jpg";
import yoga3 from "@/assets/gym/yoga/pexels-elina-fairytale-3822727.jpg";
import Schedule from "@/app/components/layout/workouts/Schedule";
import Phrase from "@/app/components/layout/workouts/Phrase";

export default function Yoga() {
  const datas = [
    {
      id: "1",
      src: yoga1,
      text: "Embrace Each Posture as a Journey, Each Breath as a Guide, and",
      styleImg: { objectPosition: "50% 100%" },
    },
    {
      id: "2",
      src: yoga2,
      text: "Embrace Each Posture as a Journey, Each Breath as a Guide, and an",
      styleImg: { objectPosition: "50% 100%" },
    },
    {
      id: "3",
      src: yoga3,
      text: "Embrace Each Posture as a Journey, Each Breath as a Guide, and a",
      styleImg: { objectPosition: "50% 90%" },
      reverse: true,
    },
  ];

  return (
    <>
      <Wallpaper
        src={img}
        title="Yoga"
        slogan="Strengthening Body, Mind, and Spirit."
        stylesImg={{ objectPosition: "50% 80%" }}
      />

      <Phrase
        text="Embrace Each Posture as a Journey, Each Breath as a Guide, and Each
            Moment as an Opportunity to Connect Deeper with Yourself and the
            World Around You."
      />

      <WorkoutImages datas={datas} />

      <Schedule />
    </>
  );
}
