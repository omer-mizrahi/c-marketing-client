import React from "react";
import styles from "./menu.module.scss";
// import logo from "/assets/images/Logo C-marketing.png";
import logo from "../../assets/images/Logo C-marketing.png";

function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.cardBrand}>
        <img src={logo} />
      </div>
      <div className={styles.menuCenter}>
        <ul>
          <li>מוצר 1</li>
          <li>מוצר 2</li>
          <li>מוצר 3</li>
          <li>מוצר 4</li>
          <li>מוצר 5</li>
        </ul>
        <div className={styles.digitalLinks}>
          <h5>Links for digital</h5>
        </div>
      </div>
    </div>
  );
}

export default Menu;
