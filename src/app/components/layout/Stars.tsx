import styles from "@/styles/layout/Stars.module.scss";

interface PropsType {
  rate: number;
  count: number;
}

export default function Stars(props: PropsType) {
  const { rate, count } = props;

  function makeStar() {
    const stars = [
      {
        id: "star1",
        percent: 0,
      },
      {
        id: "star2",
        percent: 0,
      },
      {
        id: "star3",
        percent: 0,
      },
      {
        id: "star4",
        percent: 0,
      },
      {
        id: "star5",
        percent: 0,
      },
    ];

    const floor = Math.floor(rate);
    const decimal = rate - floor;

    for (let i = 0; i < floor; i++) {
      stars[i].percent = 100;
    }

    if (decimal > 0 && decimal < 1) {
      stars[floor].percent = 50;
    }

    return stars;
  }

  return (
    <div className={styles.card_rate}>
      {makeStar().map((star) => (
        <div className={styles.star} key={star.id}>
          <div
            className={styles.star_in}
            style={{ width: `${star.percent}%` }}
          ></div>
        </div>
      ))}
      <p>{`(${count})`}</p>
    </div>
  );
}
