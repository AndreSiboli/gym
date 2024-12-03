import styles from "./ballet.module.scss";

import Wallpaper from "@/app/components/layout/Wallpaper";
import WorkoutImages from "@/app/components/layout/WorkoutImage";
import Phrase from "@/app/components/layout/workouts/Phrase";
import Schedule from "@/app/components/layout/workouts/Schedule";

import img from "@/assets/gym/ballet/pexels-budgeron-bach-5154374.jpg";
import ballet1 from "@/assets/gym/ballet/pexels-anastasia-shuraeva-8935911.jpg";
import ballet2 from "@/assets/gym/ballet/pexels-cottonbro-studio-4324017.jpg";
import ballet3 from "@/assets/gym/ballet/pexels-cottonbro-studio-10640450.jpg";
import image from "@/assets/gym/ballet/ballet-dancing.png";

export default function Ballet() {
  const datas = [
    {
      id: "1",
      src: ballet1,
      text: "Embrace Each Posture as a Journey, Each Breath as a Guide, and",
      styleImg: { objectPosition: "50% 75%" },
    },
    {
      id: "2",
      src: ballet2,
      text: "Embrace Each Posture as a Journey, Each Breath as a Guide, and an",
      styleImg: { objectPosition: "50% 90%" },
    },
    {
      id: "3",
      src: ballet3,
      text: "Embrace Each Posture as a Journey, Each Breath as a Guide, and a",
      styleImg: { objectPosition: "50% 75%" },
      reverse: true,
    },
  ];

  return (
    <div className={styles.ballet}>
      <Wallpaper
        src={img}
        title="Ballet"
        slogan="Dance with Resilience, Shine with Grace."
        stylesImg={{ objectPosition: "50% 0%" }}
      />

      <Phrase
        text="From the Whisper of Pointe Shoes to the Soaring Heights of Grand
              Jetés, Ballet Transcends Time, Captivating Hearts and Minds Alike.
              Experience the Magic, Feel the Passion, and Let Ballet Transport
              You to a World of Dreams."
        src={image}
      />

      <WorkoutImages datas={datas} />
      <Schedule />
    </div>
  );
}
