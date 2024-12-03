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

  function isBenefit() {
    return benefits.map((benefit) => (
      <p
        className={`${benefit.isBenefit ? styles.benefit : styles.no_benefit}`}
        key={benefit.text}
      >
        <span>{benefit.isBenefit ? <GoVerified /> : <MdOutlineCancel />}</span>
        {benefit.text}
      </p>
    ));
  }

  return (
    <div className={styles.card}>
      <div className={styles.retangle} style={{ background: colorPlan }} />
      <div className={styles.card_wrapper}>
        <div className={styles.card_title}>
          <h2>{name}</h2>
        </div>
        <div className={styles.card_price}>
          <span>Price Per Month</span>
          <span>${price}</span>
        </div>
        <div className={styles.card_benefits}>
          <span>Benefits</span>
          <div className={styles.card_benefits_list}>{isBenefit()}</div>
        </div>
      </div>

      <div className={styles.card_button}>
        <Button
          text="JOIN US"
          handleClick={click}
          style={{ background: colorPlan }}
        />
      </div>
    </div>
  );
}
