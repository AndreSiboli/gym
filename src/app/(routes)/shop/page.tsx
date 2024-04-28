import styles from "./shop.module.scss";

import Container from "@/app/components/layout/Container";
import Carousel from "@/app/components/carousel/Index";

import { getFemaleClothes, getMaleClothes } from "@/utils/requests/shop";

async function getProducts() {
  const res = await getMaleClothes();
  return res;
}

async function getProducts2() {
  const res = await getFemaleClothes();
  return res;
}

export default async function Shop() {
  const maleData = await getProducts();
  const femaleData = await getProducts2();

  return (
    <div className={styles.shop}>
      <Container>
        <div className={styles.shop_container}>
          <div className={styles.shop_items}>
            <div className={styles.shop_title}>
              <h1>Men&apos;s Clothing</h1>
            </div>
            <Carousel datas={maleData} />
          </div>
          <div className={styles.shop_items}>
            <div className={styles.shop_title}>
              <h1>Women&apos;s Clothing</h1>
            </div>
            <Carousel datas={femaleData} />
          </div>
        </div>
      </Container>
    </div>
  );
}
