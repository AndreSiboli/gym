import styles from "@/styles/layout/CardShop.module.scss";
import { CartProductsType } from "@/@types/products";

import Link from "next/link";
import Img from "@/app/components/utils/Img";
import CartButton from "@/app/components/buttons/CartButton";
import Rating from "@/app/components/layout/Rating";

interface PropsType {
  data: CartProductsType;
}
export default function CardShop(props: PropsType) {
  const { id, title, price, image, rating, category } = props.data;

  function decimal(num: number) {
    return num.toFixed(2);
  }

  return (
    <div className={styles.card}>
      <Link href={`/shop/${category}/${id}`} className={styles.card_wrapper}>
        <div className={styles.card_img}>
          <Img src={image} style={{ objectFit: "contain" }} />
        </div>

        <div className={styles.card_infos}>
          <div className={styles.infos_title}>
            <h2>{title}</h2>
          </div>
          <div className={styles.infos_price}>
            <span>${decimal(price)}</span>
          </div>
        </div>
        <Rating rating={{ score: rating.rate, votes: rating.count }} />
      </Link>

      <div className={styles.card_button}>
        <CartButton data={props.data} />
      </div>
    </div>
  );
}
