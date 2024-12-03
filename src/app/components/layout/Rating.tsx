import styles from "@/styles/layout/Rating.module.scss";

import { PiStar, PiStarFill, PiStarHalfFill } from "react-icons/pi";

interface PropsType {
  rating: { score: number; votes: number };
}

export default function Rating(props: PropsType) {
  const { rating } = props;

  function makeStar() {
    const stars = [
      {
        id: "star1",
        icon: <PiStar />,
      },
      {
        id: "star2",
        icon: <PiStar />,
      },
      {
        id: "star3",
        icon: <PiStar />,
      },
      {
        id: "star4",
        icon: <PiStar />,
      },
      {
        id: "star5",
        icon: <PiStar />,
      },
    ];

    const floor = Math.floor(rating.score);
    const decimal = rating.score - floor;

    for (let i = 0; i < floor; i++) {
      stars[i].icon = <PiStarFill />;
    }

    if (decimal > 0 && decimal < 1) {
      stars[floor].icon = <PiStarHalfFill />;
    }

    return stars;
  }

  return (
    <div className={styles.card_rate}>
      {makeStar().map((star) => (
        <div className={styles.star} key={star.id}>
          {star.icon}
        </div>
      ))}
      <p>{`(${rating.votes})`}</p>
    </div>
  );
}
