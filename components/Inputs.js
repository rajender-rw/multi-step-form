import React, { useState } from "react";
import styles from "@/styles/InfoInputs.module.scss";

const Inputs = ({ label, type, placeholder, required }) => {
  const [user, setUser] = useState("");

  const handlChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className={styles.input} onSubmit={handleSubmit}>
        {type == "textarea" ? (
          <textarea name="" id="" cols="30" rows="10"></textarea>
        ) : (
          <>
            <label className={styles.input__label} htmlFor="">
              {label}
            </label>
            <input
              className={styles.input__type}
              type={type}
              placeholder={placeholder}
              value={user}
              onChange={handlChange}
              required={required}
            />
          </>
        )}
      </form>
    </>
  );
};

export default Inputs;
