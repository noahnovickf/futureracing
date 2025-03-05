"use client"
import styles from "./page.module.css";
import Welcome from "./components/window/Welcome";
import DragWindow from "./components/window/DragWindow";
import FutureHome from "./components/window/FutureHome";
import IconContainer from "./IconContainer";

const Home = () => {
  return (
      <div className={styles.page}>
      <main className={styles.main}>
        <IconContainer />
        <DragWindow header='futurecycling/landing-page' coordinates={{x:200, y:200 }} >
          <Welcome />
        </DragWindow>
        <DragWindow header="futurecycling/logo" coordinates={{x:500, y:500 }} >
          <FutureHome />
        </DragWindow>
        </main>
      </div>
  );
}

export default Home