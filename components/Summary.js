import React from "react";
import styles from "@/styles/Summary.module.scss";
import Button from "./Button";
import InfoTitle from "./InfoTitle";

const Summary = ({  activeIndex , setActiveIndex }) => {
  return (
    <div className={styles.Summary}>
      <InfoTitle
        title={"Finishing Up"}
        desc={"Double-check everything looks OK before confirming."}
      />

      <section className={styles.Summary__cont}>
        <div className={styles.Summary__top}>
        
          <div className={styles.Summary__top__arcade}>
            <div>
              <h2>Arcade (Monthly)</h2>
              <span>Change</span>
            </div>
            <h1 className={styles.Summary__top__price}>$9/mo</h1>
          </div>

          <hr />

          <div className={styles.Summary__top__online}>
            <h3>Online service</h3>
            <p className={styles.Summary__top__price}>+ $2/mo</p>
          </div>

          <div className={styles.Summary__top__large}>
            <h3>Larger storage</h3>
            <p className={styles.Summary__top__price}>+ $2/mo</p>
          </div>
        </div>

        <div className={styles.Summary__bottom}>
          <h3>Total (per month)</h3>
          <p className={styles.Summary__price}>+$13/mo</p>
        </div>
      </section>

      <Button activeIndex={activeIndex} setActiveIndex={setActiveIndex} text1={"Back"} text2={"Confirm"} />
    </div>
  );
};

export default Summary;
