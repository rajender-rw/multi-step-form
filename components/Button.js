import React from "react";
import styles from "@/styles/Button.module.scss";

const Button = ({ text1, text2, activeIndex, setActiveIndex }) => {
  return (
    <div className={styles.button}>
      <button
        type="button"
        className={styles.button__btn1}
        disabled={activeIndex == 0}
        onClick={() => {
          setActiveIndex(activeIndex - 1);
        }}
      >
        {text1}
      </button>

      <button
        type="button"
        className={styles.button__btn2}
        disabled={activeIndex == 4}
        onClick={() => {
          setActiveIndex(activeIndex + 1);
        }}
      >
        {text2}
      </button>
    </div>
  );
};

export default Button;
