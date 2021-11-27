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
      <div className={styles.cardBrand}>
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
        <h3 className={styles.titleSocial}>Social Media</h3>
        <div className={styles.digitalLinks}>
          <a href="https://wa.me/972502300992" target="_blank" rel="noReferrer">
            <WhatsAppIcon className={styles.whatsAppIcon} />
          </a>
          <a
            href="https://www.instagram.com/srolikcohen/"
            target="_blank"
            rel="noReferrer"
          >
            <InstagramIcon className={styles.instagramIcon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
