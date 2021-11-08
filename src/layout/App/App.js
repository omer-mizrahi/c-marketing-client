import TenStepsScreen from "../../screens/TenStepsScreen/TenStepsScreen";
import Menu from "../Menu/Menu";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <main>
        <Menu />
        <TenStepsScreen />
      </main>
    </div>
  );
}

export default App;
