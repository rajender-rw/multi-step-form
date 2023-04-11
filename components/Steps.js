import React, { useState } from "react";
import styles from "@/styles/Steps.module.scss";

const Steps = ({ id, title, heading, comp ,index, active1 }) => {
  const [active, setActive] = useState(false);

  const handleChange = () => {

  }

  return (
      <section className={styles.steps} onClick={handleChange} >
      {console.log(active1)}

        <div className={styles.steps__left} style={active ?  {backgroundColor:'#C3E1FB' , color:'black'} : null} onClick={() => setActive(true) } >{id}</div>
        <div className={styles.steps__right}>
          <span className={styles.steps__right__top}>{title}</span>
          <span className={styles.steps__right__bottom}>{heading}</span>
        </div>
      </section>
  ); 
};

export default Steps;
