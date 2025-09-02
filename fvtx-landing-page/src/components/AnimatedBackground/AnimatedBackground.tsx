import React from 'react';
import styles from './AnimatedBackground.module.css';

export const AnimatedBackground: React.FC = () => {
  return (
    <>
      <svg className={styles.svgFilter}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={styles.animationContainer}>
        <div className={`${styles.ball} ${styles.ball1}`}></div>
        <div className={`${styles.ball} ${styles.ball2}`}></div>
        <div className={`${styles.ball} ${styles.ball3}`}></div>
        <div className={`${styles.ball} ${styles.ball4}`}></div>
        <div className={`${styles.ball} ${styles.ball5}`}></div>
      </div>
    </>
  );
};