import TenStepsScreen from "../../screens/TenStepsScreen/TenStepsScreen";
import Menu from "../Menu/Menu";
import styles from "./app.module.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import ThankYouScreen from "../../screens/ThankYouScreen/ThankYouScreen";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PaymentScreen from "../../screens/PaymentScreen/PaymentScreen";

function App() {
  return (
    <>
      <div className={styles.app}>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/thankYou" />} /> */}
          <Route path="/thankYou" element={<ThankYouScreen />} />
          <Route
            path="/"
            element={
              <main>
                <Menu />
                <TenStepsScreen />
              </main>
            }
          />
          <Route path="/payment" element={<PaymentScreen />} />
        </Routes>

        <div className={styles.app_digitalLinks}>
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
        {/* <ThankYouScreen /> */}
      </div>
    </>
  );
}

export default App;
