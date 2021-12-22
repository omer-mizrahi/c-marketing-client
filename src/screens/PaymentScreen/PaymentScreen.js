import React from "react";
import styles from "./paymentScreen.module.scss";
import Iframe from "react-iframe";
import { useSelector } from "react-redux";

function PaymentScreen() {
  const { product } = useSelector((state) => state.productState);
  const { currentPayment } = useSelector((state) => state.paymentState);

  console.log("currentPayment", currentPayment);

  return (
    <div className={styles.paymentScreen}>
      <div className={styles.content}>
        {currentPayment?.data?.url ? (
          <>
            <div className={styles.title}>
              <h4>תשלום עבור:</h4>
              <h2>{product.productName}</h2>
            </div>
            <h5>סה״כ לתשלום ₪{product.price}</h5>
            <Iframe url={currentPayment?.data?.url} className={styles.iframe} />
          </>
        ) : (
          <h2>loading..</h2>
        )}
      </div>
    </div>
  );
}

export default PaymentScreen;
