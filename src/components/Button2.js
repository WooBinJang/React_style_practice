import React from "react";
import styles from "./Button2.module.css";

const Button2 = () => {
  return (
    <div>
      <h1 className={styles.title}>css 모듈연습</h1>
      <button className={styles.btn}>버튼1</button>
    </div>
  );
};

export default Button2;
