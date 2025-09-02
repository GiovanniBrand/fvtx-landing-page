import React from 'react';
import styles from './AnimatedBackground.module.css';
import backgroundGif from '../../assets/NOVA.gif';

export const AnimatedBackground: React.FC = () => {
  return (
     <div className={styles.gifContainer}>
      <img 
        src={backgroundGif} 
        alt="Animação de fundo abstrata com formas azuis e fundo vermelho" 
        className={styles.gif}
      />
    </div>
  );
};