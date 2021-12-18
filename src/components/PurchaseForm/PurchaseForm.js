import React, { useState } from "react";
import styles from "./purchaseForm.module.scss";
import axios from "axios";
import { processPayment } from "../../actions/paymentActions";
import { useDispatch } from "react-redux";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

function PurchaseForm({ submitFunc, price, productName }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [must, setMust] = useState("");
  const dispatch = useDispatch();
  // const [iframePayment, setIframePayment] = useState();

  // const window = new JSDOM("").window;
  // const DOMPurify = createDOMPurify(window);

  // const rawHTML = `
  // <div class="dropdown">
  // <h1>Test omer</h1>
  // </div>
  // `;

  const addOrder = async (e) => {
    e.preventDefault();
    const data = await axios.post(`/api/createPayment`);

    console.log("data", data);
    console.log("done!");
    return data;
  };

  // const addOrder = async (e) => {
  //   e.preventDefault();
  //   if (!userName || !email) {
  //     setMust(true);
  //     return;
  //   } else {
  //     setMust(false);

  //     const newOrder = {
  //       userName: userName,
  //       email: email,
  //       productName: productName,
  //       price: price,
  //     };

  //     // const { data } = await axios.post(`/api/orders`, newOrder);

  //     // dispatch(processPayment());

  //     // const data = await processPayment();

  //     // setIframePayment(data);
  //     // console.log("data >> html", data);

  //     // window.open(data);
  //     // console.log("data R", data);
  //   }
  // };

  return (
    <>
      <form className={styles.formtenSteps} onSubmit={(e) => addOrder(e)}>
        <h5>מלא פרטים לרכישת המדריך</h5>
        {must && (
          <h5 className={styles.must}>
            *עלייך למלא את השדות שמסומנים בכוכבית*
          </h5>
        )}
        <h6 className={styles.priceNote}>המדריך הינו בתשלום של: ₪{price}</h6>
        <div className={styles.formContent}>
          <div className={styles.fields}>
            <div className={styles.divFiled}>
              <label>*שם</label>
              <input
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
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                value={email}
                placeholder="מייל"
              />
            </div>
            <div className={styles.divFiled}>
              <label>*טלפון</label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                name="phone"
                value={phone}
                placeholder="מספר טלפון"
              />
            </div>
          </div>

          <div className={styles.payButtons}>
            <button type="submit" className={styles.payBtn}>
              Bit
            </button>
            <button type="submit" className={styles.payBtn}>
              אשראי
            </button>
          </div>
        </div>
      </form>
      {/* <div>
        {
          <div
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }}
          />
        }
      </div> */}
    </>
  );
}

export default PurchaseForm;
