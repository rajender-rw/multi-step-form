import React from "react";
import InfoTitle from "./InfoTitle";
import styles from "@/styles/AddOns.module.scss";
import Button from "./Button";

const addOnData = [
  {
    id: 1,
    heading: "Online Service",
    para: "Access to multiplayer games",
    price: "+$ 10/yr",
  },
  {
    id: 2,
    heading: "Large Storage",
    para: "Extra 1TB of Cloud",
    price: "+$ 20/yr",
  },
  {
    id: 3,
    heading: "Customizable Profile",
    para: "Custom theme on your Profile",
    price: "+$ 30/yr",
  },
];

const AddOns = ({ activeIndex , setActiveIndex  }) => {
  return (
    <div className={styles.AddOns}>
      <InfoTitle
        title={"Add Ons"}
        desc={"Add-ons help enhance your gaming experience"}
      />

      {addOnData.map((i) => (
        <label htmlFor="Online Service" className={styles.AddOns__label}>
          <div className={styles.AddOns__label__left}>
            <input type="checkbox" />
            <div className={styles.AddOns__label__text}>
              <h2>{i.heading}</h2>
              <p>{i.para}</p>
            </div>
          </div>
          <p className={styles.AddOns__label__price}>{i.price}</p>
        </label>
      ))}

      <Button activeIndex={activeIndex} setActiveIndex={setActiveIndex} text1={"Back"} text2={"Next Step"} />
    </div>
  );
};

export default AddOns;
