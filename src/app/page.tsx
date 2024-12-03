import styles from "@/styles/pages/home/page.module.scss";

import Contact from "./components/pages/home/Contact";
import Hero from "./components/pages/home/Hero";
import Merchant from "./components/pages/home/Merchant";
import Workouts from "./components/pages/home/Workouts";

export default function Home() {
  return (
    <>
      <Hero />
      <Merchant />
      <Workouts />
      <Contact />
    </>
  );
}
