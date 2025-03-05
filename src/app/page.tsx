"use client"
import styles from "./page.module.css";
import Header from "./components/header/Header";
import HomeWindow from "./components/header/home-window/HomeWindow";
import original from 'react95/dist/themes/original';
import { ThemeProvider } from "styled-components";

const Home = () => {
  return (
    <ThemeProvider theme={original}>
      <div className={styles.page}>
        <Header />
        <main className={styles.main}>
          <HomeWindow />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default Home