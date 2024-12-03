import styles from "./shop.module.scss";

import Container from "@/app/components/layout/Container";

import { getFemaleClothes, getMaleClothes } from "@/utils/requests/shop";
import CardShop from "@/app/components/layout/CardShop";
import Wallpaper from "@/app/components/layout/Wallpaper";

import heroImage from "@/assets/shop.jpg";

export default async function Shop() {
  const maleData = await getMaleClothes();
  const femaleData = await getFemaleClothes();

  return (
    <>
      <Wallpaper
        src={heroImage}
        title="Clothing"
        slogan="Gear Up. Sweat Hard. Look Good"
      />

      <div className={styles.shop}>
        <Container>
          <div className={styles.shop_container}>
            <div className={styles.shop_items}>
              <div className={styles.shop_title}>
                <h1>Men&apos;s Clothing</h1>
              </div>

              <div className={styles.items_container}>
                {maleData ? (
                  maleData.map((data) => <CardShop data={data} key={data.id} />)
                ) : (
                  <p className={styles.err}>An error has ocurred.</p>
                )}
              </div>
            </div>

            <div className={styles.shop_items}>
              <div className={styles.shop_title}>
                <h1>Women&apos;s Clothing</h1>
              </div>
              <div className={styles.items_container}>
                {femaleData ? (
                  femaleData.map((data) => (
                    <CardShop data={data} key={data.id} />
                  ))
                ) : (
                  <p className={styles.err}>An error has ocurred.</p>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
