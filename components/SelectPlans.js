import React from "react";
import InfoTitle from "./InfoTitle";
import Button from "./Button";
import styles from "@/styles/SelectPlans.module.scss";

import card1 from "../public/Assets/card1.svg";
import card2 from "../public/Assets/card2.svg";
import card3 from "../public/Assets/card3.svg";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    img: card1,
    title: "Arcade",
    price: "$12/mo",
  },
  {
    id: 2,
    img: card2,
    title: "Advanced",
    price: "$20/mo",
  },
  {
    id: 3,
    img: card3,
    title: "Pro",
    price: "$22/mo",
  },
];
const SelectPlans = ({ activeIndex, setActiveIndex }) => {
  return (
    <div>
      <div className={styles.selectplans}>
        <InfoTitle
          title={"SelectPlans"}
          desc={"Please provide your name,email address,and phone number"}
        />

        <section className={styles.selectplans__cardSection}>
          {cardData.map((i,index) => (
            <>
              <input type="radio" id={`card-${index}`} name="cards"/>
              <label htmlFor={`card-${index}`} className={styles.selectplans__card}>
                <Image width={50} src={i.img} alt="card" />
                <div className={styles.selectplans__cardText}>
                  <p className={styles.selectplans__cardText__Top}>{i.title}</p>
                  <p>{i.price}</p>
                </div>
              </label>
            </>
          ))}
        </section>

        <section className={styles.selectplans__checkbox}>
          <label htmlFor="plan">Monthly</label>
          <input id="plan" name="plan" type="checkbox" />
          <label htmlFor="plan">Yearly</label>
        </section>

        <Button
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          text1={"Back"}
          text2={"Next Step"}
        />
      </div>
    </div>
  );
};

export default SelectPlans;
