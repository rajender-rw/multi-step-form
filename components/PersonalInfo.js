import React from "react";
import styles from "@/styles/PersonalInfo.module.scss";
import InfoTitle from "./InfoTitle";
import Button from "./Button";
import Inputs from "./Inputs";

const inputData = [
  {
    id: 1,
    label: "Name",
    type: "text",
    placeholder: "eg. Stephen King",
    required: true,
  },
  {
    id: 2,
    label: "Email Address",
    type: "email",
    placeholder: "mailto:e.g.Stephenking@lorem.com",
    required: true,
  },
  {
    id: 3,
    label: "Phone",
    type: "text",
    placeholder: "e.g + 1234 567 890",
    required: true,
  },
];

const PersonalInfo = ({ activeIndex, setActiveIndex }) => {
  return (
    <div className={styles.personalInfo}>
      <InfoTitle
        title={"Personal Info"}
        desc={"Please provide your name,email address,and phone number"}
      />

      {inputData.map((i) => (
        <Inputs
          key={i.id}
          label={i.label}
          type={i.type}
          placeholder={i.placeholder}
          required={true}
        />
      ))}

      <Button
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        text1={"Back"}
        text2={"Next Step"}
      />
    </div>
  );
};

export default PersonalInfo;
