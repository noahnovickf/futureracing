'use client';
import styles from './page.module.css';
import Welcome from './components/window/Welcome';
import DragWindow from './components/window/DragWindow';
import FutureHome from './components/window/FutureHome';
import IconContainer from './IconContainer';
import { useScreen } from './context/ScreenContext';
import { Fragment } from 'react';
import StaticWindow from './components/window/StaticWindow';

const Home = () => {
  const { isMobile } = useScreen();

  if (isMobile) {
    return (
      <Fragment>
        <StaticWindow
          header="futurecycling/landing-page"
          style={{
            position: 'absolute',
            width: 250,
            left: '30%',
            top: '10%',
          }}
        >
          <FutureHome width={150} height={150} />
        </StaticWindow>
        <StaticWindow
          header="futurecycling/welcome"
          style={{
            position: 'absolute',
            width: 250,
            left: '25%',
            top: '40%',
          }}
        >
          <Welcome height={200} />
        </StaticWindow>
        <IconContainer />
      </Fragment>
    );
  }

  return (
    <div className={styles.page}>
      <IconContainer />
      <main className={styles.main}>
        <DragWindow
          header="futurecycling/landing-page"
          coordinates={{ x: 800, y: 200 }}
        >
          <Welcome height={300} />
        </DragWindow>
        <DragWindow
          header="futurecycling/logo"
          coordinates={{ x: 200, y: 200 }}
        >
          <FutureHome width={400} height={400} />
        </DragWindow>
      </main>
    </div>
  );
};

export default Home;
