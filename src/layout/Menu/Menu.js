import React, { useState } from "react";
import styles from "./menu.module.scss";
// import logo from "/assets/images/Logo C-marketing.png";
import logo from "../../assets/images/Logo C-marketing.png";
import blackLoco from "../../assets/images/blackLogo.png";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { data } from "../../data";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

function Menu() {
  const [active, setActive] = useState(data[0].name);

  return (
    <div className={styles.menu}>
      {/* <div className={styles.instagramTag}>Instagram</div>
      <div className={styles.whatsAppTag}>WhatsApp</div> */}
      <div className={styles.cardBrand}>
        {/* <div className={styles.digitalLinks_mobileState}>
          <WhatsAppIcon className={styles.whatsAppIcon} />
          <InstagramIcon className={styles.instagramIcon} />
        </div> */}
        <img src={logo} />
      </div>
      <div className={styles.menuCenter}>
        <ul>
          {data.map((product) => (
            <div
              className={`${styles.divLi}
               ${!product.isOpen ? styles.disabled : ""} ${
                active === product.name ? styles.active : ""
              }`}
              // onClick={() => setActive(product.name)}
            >
              {product.isOpen ? (
                <LockOpenIcon
                  className={active === product.name ? styles.active : ""}
                />
              ) : (
                <LockIcon />
              )}
              <li
                className={` ${!product.isOpen ? styles.disabled : ""} ${
                  active === product.name ? styles.active : ""
                }`}
              >
                {product.name}
              </li>
            </div>
          ))}
        </ul>
        <div className={styles.digitalLinks}>
          <WhatsAppIcon className={styles.whatsAppIcon} />
          <InstagramIcon className={styles.instagramIcon} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
