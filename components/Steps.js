import React, { useState } from "react";
import styles from "@/styles/Steps.module.scss";

const Steps = ({ id, title, heading, activeIndex, setActiveIndex, index }) => {
  const [active, setActive] = useState(0);

  const handleChange = () => {
    setActiveIndex(index);
    setActive(!active); 
  };

  return (
    <section className={styles.steps} onClick={handleChange}>
      <div
        className={styles.steps__left}
        style={activeIndex == index ? { backgroundColor: "#C3E1FB", color: "black" } : null}
        onClick={() => {
          setActive(true);
        }}
      >
        {id}
      </div>
      <div className={styles.steps__right}>
        <span className={styles.steps__right__top}>{title}</span>
        <span className={styles.steps__right__bottom}>{heading}</span>
      </div>
    </section>
  );
};

export default Steps;
