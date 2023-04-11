import React from "react";
import styles from "@/styles/Button.module.scss";

const Button = ({ text1, text2, onShow }) => {
  return (
    <div className={styles.button}>
      <button type="button" className={styles.button__btn1} onClick={onShow}> {text1} </button>
      <button type="button" className={styles.button__btn2} onClick={onShow}> {text2} </button>
    </div>
  );
};

export default Button;
