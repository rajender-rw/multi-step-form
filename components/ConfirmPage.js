import React from "react";
import image from "../public/Assets/thankyou.svg";
import styles from "@/styles/ConfirmPage.module.scss";
import Image from "next/image";

const ConfirmPage = () => {
  return (
    <>
      <section className={styles.ConfirmPage}>
        <Image className={styles.ConfirmPage__image} src={image} width={100} height={100} alt="check" />
        <h1 className={styles.ConfirmPage__h1}>Thank You</h1>
        <p className={styles.ConfirmPage__p}>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </section>
    </>
  );
};

export default ConfirmPage;
