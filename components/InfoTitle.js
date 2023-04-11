import React from "react";
import styles from "@/styles/InfoTitle.module.scss";

const InfoTitle = ({ title, desc }) => {
  return (
    <div className={styles.title}>
      <h1 className={styles.title__heading}>{title}</h1>
      <p className={styles.title__description}>{desc}</p>
    </div>
  );
};

export default InfoTitle;
