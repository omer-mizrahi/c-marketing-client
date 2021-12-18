import React from "react";
import styles from "./thankYouScreen.module.scss";

function ThankYouScreen() {
  return (
    <div className={styles.thankYouScreen}>
      <div className={styles.content}>
        <h1>תודה על הזמנתך!</h1>
        <p>מספר הזמנה: {78935789}</p>
      </div>
    </div>
  );
}

export default ThankYouScreen;
