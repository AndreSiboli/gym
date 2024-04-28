import styles from "./plans.module.scss";

import Container from "@/app/components/layout/Container";
import PlansCard from "@/app/components/layout/PlansCard";

export default function Plans() {
  const plans = [
    {
      name: "Construction",
      price: "49.50",
      colorPlan: "#000",
      benefits: [
        {
          isBenefit: true,
          text: "Bodybuilding Classes",
        },
        {
          isBenefit: true,
          text: "Access to all equipments",
        },
        {
          isBenefit: true,
          text: "Personal Trainer",
        },
        {
          isBenefit: true,
          text: "Shower",
        },
      ],
    },
    {
      name: "Elegance",
      price: "49.50",
      colorPlan: "#894261",
      benefits: [
        {
          isBenefit: true,
          text: "Ballet Classes",
        },
        {
          isBenefit: true,
          text: "Barre Exercises",
        },
        {
          isBenefit: true,
          text: "Center Work",
        },
        {
          isBenefit: true,
          text: "Stretching",
        },
        {
          isBenefit: false,
          text: "Classes on Sunday",
        },
      ],
    },
    {
      name: "Mind",
      price: "49.50",
      colorPlan: "#576BF5",
      benefits: [
        {
          isBenefit: true,
          text: "Yoga Classes",
        },
        {
          isBenefit: true,
          text: "Meditation",
        },
        {
          isBenefit: true,
          text: "Standing Poses",
        },
        {
          isBenefit: true,
          text: "Balancing Poses",
        },
        {
          isBenefit: false,
          text: "Classes on Monday",
        },
      ],
    },
    {
      name: "Combat",
      price: "79.90",
      colorPlan: "#DE4846",
      benefits: [
        {
          isBenefit: true,
          text: "Boxe Classes",
        },
        { isBenefit: true, text: "Boxing Trainer" },
        {
          isBenefit: true,
          text: "Shower",
        },
      ],
    },
    {
      name: "Immersive",
      price: "79.90",
      colorPlan: "#2C34E0",
      benefits: [
        {
          isBenefit: true,
          text: "Swimmig Classes",
        },
        { isBenefit: true, text: "Swimming Trainer" },
        {
          isBenefit: false,
          text: "Classes on Sunday",
        },
      ],
    },
    {
      name: "Rigorous",
      price: "99.90",
      colorPlan: "#00320C",
      benefits: [
        {
          isBenefit: true,
          text: "Running Classes",
        },
        {
          isBenefit: true,
          text: "Bodybuilding Classes",
        },
        {
          isBenefit: true,
          text: "Includes all bodybuilding benefits.",
        },
      ],
    },
  ];

  return (
    <div className={styles.plans}>
      <Container>
        <div className={styles.plans_container}>
          <div className={styles.plans_description}>
            <h1>PLANS</h1>
            <p>
              What are you waiting for? Choose a plan and become part of it!
            </p>
          </div>

          <div className={styles.plans_wrapper}>
            {plans.map((plan) => (
              <PlansCard plan={plan} key={plan.name} />
            ))}
          </div>

          <div className={styles.plans_advertising}>
            <p>All the prices and benefits are subject to chance.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
