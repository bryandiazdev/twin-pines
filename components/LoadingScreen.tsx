import React from 'react';
import styles from './LoadingScreen.module.css'; // Import the CSS module

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingScreen;
