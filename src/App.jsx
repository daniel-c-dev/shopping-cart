import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import styles from "./styles/App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
