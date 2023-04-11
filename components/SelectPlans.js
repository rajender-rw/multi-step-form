import React from "react";
import InfoTitle from "./InfoTitle";
import Button from "./Button";
import styles from "@/styles/SelectPlans.module.scss";

import card1 from "../public/Assets/card1.svg";
import card2 from "../public/Assets/card2.svg";
import card3 from "../public/Assets/card3.svg";
import Image from "next/image";

const SelectPlans = ({ onShow }) => {
  return (
    <div>
      <div className={styles.selectplans}>
        <InfoTitle
          title={"SelectPlans"}
          desc={"Please provide your name,email address,and phone number"}
        />

        <section className={styles.selectplans__cardSection}>
          <div className={styles.selectplans__card}>
            <Image width={50} src={card1} alt="card" />
            <div className={styles.selectplans__cardText}>
              <p className={styles.selectplans__cardText__Top}>Arcade</p>
              <p>$9/mo</p>
            </div>
          </div>

          <div className={styles.selectplans__card}>
            <Image width={50} src={card2} alt="card" />
            <div className={styles.selectplans__cardText}>
              <p className={styles.selectplans__cardText__Top}>Advanced</p>
              <p>$12/mo</p>
            </div>
          </div>

          <div className={styles.selectplans__card}>
            <Image width={50} src={card3} alt="card" />
            <div className={styles.selectplans__cardText}>
              <p className={styles.selectplans__cardText__Top}>Pro</p>
              <p>$15/mo</p>
            </div>
          </div>
        </section>

        <section className={styles.selectplans__checkbox}>
          <span>Monthly</span>
          <input type="checkbox" />
          <span>Yearly</span>
        </section>

        <Button onShow={onShow} text1={"Back"} text2={"Next Step"} />
      </div>
    </div>
  );
};

export default SelectPlans;
