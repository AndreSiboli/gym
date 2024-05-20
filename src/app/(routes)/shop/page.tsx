import styles from "./shop.module.scss";

import Container from "@/app/components/layout/Container";
import Carousel from "@/app/components/carousel/Index";

import { getFemaleClothes, getMaleClothes } from "@/utils/requests/shop";

export default async function Shop() {
  const maleData = await getMaleClothes();
  const femaleData = await getFemaleClothes();

  return (
    <div className={styles.shop}>
      <Container>
        <div className={styles.shop_container}>
          <div className={styles.shop_items}>
            <div className={styles.shop_title}>
              <h1>Men&apos;s Clothing</h1>
            </div>
            {maleData ? (
              <Carousel datas={maleData} />
            ) : (
              <p className={styles.err}>An error has ocurred.</p>
            )}
          </div>
          <div className={styles.shop_items}>
            <div className={styles.shop_title}>
              <h1>Women&apos;s Clothing</h1>
            </div>
            {femaleData ? (
              <Carousel datas={femaleData} />
            ) : (
              <p className={styles.err}>An error has ocurred.</p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
