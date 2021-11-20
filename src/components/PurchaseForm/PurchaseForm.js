import React, { useState } from "react";
import styles from "./purchaseForm.module.scss";
import axios from "axios";

function PurchaseForm({ submitFunc, price, productName }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [must, setMust] = useState("");

  const addOrder = async (e) => {
    e.preventDefault();
    if (!userName || !email) {
      setMust(true);
      console.log("need");
    } else {
      const newOrder = {
        userName: userName,
        email: email,
        productName: productName,
        price: price,
      };

      const { data } = await axios.post(
        `http://localhost:5000/api/orders`,
        newOrder
      );
      console.log("data R", data);
      setMust(false);
    }
  };

  return (
    <form className={styles.formtenSteps} onSubmit={(e) => addOrder(e)}>
      <h5>כמה פרטים אחרונים והמדריך אצלך</h5>
      {must && <h5>*עלייך למלא את השדות שמסומנים בכוכבית*</h5>}
      <div className={styles.formContent}>
        <div className={styles.divFiled}>
          <label>*שם</label>
          <input
            className={must ? styles.must : ""}
            onChange={(e) => setUserName(e.target.value)}
            type="string"
            name="userName"
            value={userName}
            placeholder="שם"
          />
        </div>
        <div className={styles.divFiled}>
          <label>*מייל</label>
          <input
            className={must ? styles.must : ""}
            onChange={(e) => setEmail(e.target.value)}
            type="string"
            name="email"
            value={email}
            placeholder="מייל"
          />
        </div>
        <button type="submit" className={styles.payBtn}>
          לחץ לרכישה
        </button>
      </div>
    </form>
  );
}

export default PurchaseForm;
