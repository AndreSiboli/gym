"use client";

import styles from "@/styles/layout/PlansCard.module.scss";

import Button from "../buttons/Button";

import { GoVerified } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";

interface PropsType {
  plan: {
    name: string;
    price: string;
    colorPlan: string;
    benefits: {
      isBenefit: boolean;
      text: string;
    }[];
  };
}

export default function PlansCard(props: PropsType) {
  const { plan } = props;
  const { name, price, colorPlan, benefits } = plan;

  function click() {
    alert("If it were a real site, this action would work.");
  }

  return (
    <div className={styles.card} style={{ borderColor: `${colorPlan}` }}>
      <h2>{name}</h2>
      <div className={styles.card_price}>
        <span>Price Per Month</span>
        <span>${price}</span>
      </div>
      <div className={styles.card_benefits}>
        <span>Benefits</span>
        <div className={styles.card_benefits_list}>
          {benefits.map((benefit) => (
            <p
              className={`${
                benefit.isBenefit ? styles.benefit : styles.no_benefit
              }`}
              key={benefit.text}
            >
              <span>
                {benefit.isBenefit ? <GoVerified /> : <MdOutlineCancel />}
              </span>
              {benefit.text}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.card_button}>
        <Button text="JOIN US" handleClick={click} />
      </div>
    </div>
  );
}
