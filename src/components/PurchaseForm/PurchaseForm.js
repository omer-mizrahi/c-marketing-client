import React, { useState, useEffect } from "react";
import styles from "./purchaseForm.module.scss";
import { processPayment } from "../../actions/paymentActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

function PurchaseForm({ submitFunc, price, productName }) {
  const { currentPayment } = useSelector((state) => state.paymentState);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [must, setMust] = useState("");
  const [error, setError] = useState("");
  const [currentData, setCurrentData] = useState({});
  const [currentPageCode, setCurrentPageCode] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addOrder = async (e, paymentType) => {
    console.log("paymentType", paymentType);

    e.preventDefault();
    const pageCodeForBit = "dc92d4ae39e5";
    const pageCodeForCard = "b4e13ad16072";
    setCurrentPageCode(
      paymentType === "bit" ? pageCodeForBit : pageCodeForCard
    );

    if (!userName || !email || !phone || !price) {
      setError("יש למלא את כל השדות");
    } else {
      const bodyData = {
        pageCode: paymentType === "bit" ? pageCodeForBit : pageCodeForCard,
        fullName: userName,
        email,
        phone,
        sum: price,
      };
      dispatch(processPayment(bodyData));
    }
  };

  useEffect(() => {
    if (Object.keys(currentPayment).length) {
      navigate("payment");
    }
  }, [currentPayment]);

  /* start: approve */

  // useEffect(() => {
  //   if (Object.keys(currentData).length) {
  //     console.log("here");
  //     approvePaymentHandler();
  //   }
  // }, [currentData]);

  // const approvePaymentHandler = async () => {
  //   const result = await axios.post(`/api/approvePayment`, {
  //     pageCode: currentPageCode,
  //     processId: currentData.data.processId,
  //     processToken: currentData.data.processToken,
  //     paymentSum: price,
  //   });
  //   return result;
  // };

  /* end: approve */

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
      <form className={styles.formtenSteps}>
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
            <div onClick={(e) => addOrder(e, "bit")} className={styles.payBtn}>
              Bit
            </div>
            <div onClick={(e) => addOrder(e, "card")} className={styles.payBtn}>
              אשראי
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default PurchaseForm;
