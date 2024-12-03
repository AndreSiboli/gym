import styles from "./yoga.module.scss";

import Wallpaper from "@/app/components/layout/Wallpaper";
import WorkoutImages from "@/app/components/layout/WorkoutImage";
import Schedule from "@/app/components/layout/workouts/Schedule";
import Phrase from "@/app/components/layout/workouts/Phrase";

import img from "@/assets/gym/yoga/woman-stratching-isolated.jpg";
import yoga1 from "@/assets/gym/yoga/pexels-elina-fairytale-3822719.jpg";
import yoga2 from "@/assets/gym/yoga/pexels-elina-fairytale-3823184.jpg";
import yoga3 from "@/assets/gym/yoga/pexels-elina-fairytale-3822727.jpg";
import image from "@/assets/gym/yoga/yoga-exercising.png";

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
        text="Our gym offers a variety of workouts to suit every fitness level, from high-intensity training to peaceful yoga sessions. Join our yoga classes to improve flexibility, reduce stress, and rejuvenate your mind and body. With certified instructors and a welcoming environment, we&apos;re here to help you achieve balance and strength."
        src={image}
      />

      <WorkoutImages datas={datas} />
      <Schedule />
    </>
  );
}
