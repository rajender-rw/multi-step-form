import React from "react";
import styles from "@/styles/Sidebar.module.scss";
import Image from "next/image";
import vector1 from "../public/Assets/Vector1.png";
import vector2 from "../public/Assets/Vector2.png";
import vector3 from "../public/Assets/Vector3.png";
import Steps from "./Steps";

import PersonalInfo from "@/components/PersonalInfo";
import Address from "@/components/SelectPlans";
import AddOns from "@/components/AddOns";
import Summary from "@/components/Summary";

const Sidebar = ({ activeIndex, setActiveIndex }) => {
  const stepsData = [
    {
      id: 0,
      title: "Step 1",
      heading: "your info",
      comp: PersonalInfo,
    },
    {
      id: 1,
      title: "Step 2",
      heading: "select plan",
      comp: Address,
    },
    {
      id: 2,
      title: "Step 3",
      heading: "add ons",
      comp: AddOns,
    },
    {
      id: 3,
      title: "Step 4",
      heading: "summary",
      comp: Summary,
    },
  ];

  return (
    <div className={styles.sidebar}>
      {stepsData.map((i, index) => (
        <Steps
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          key={i.id + 1}
          id={i.id + 1}
          title={i.title}
          heading={i.heading}
          comp={i.comp}
          index={index}
        />
      ))}

      <Image className={styles.sidebar__vectorblue} src={vector1} alt="vector1" />

      <Image className={styles.sidebar__vectorpink} src={vector2} alt="vector2" />

      <Image className={styles.sidebar__vectororange} src={vector3} alt="vector3" />
    </div>
  );
};

export default Sidebar;
