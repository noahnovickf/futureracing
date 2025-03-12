'use client';

import styles from './LoadingBar.module.css';

const LoadingBar = () => {
  return (
    <div className={styles.progressIndicator}>
      <span className={styles.progressIndicatorBar} />
    </div>
  );
};

export default LoadingBar;
