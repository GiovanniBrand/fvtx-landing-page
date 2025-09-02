import React from "react";
import styles from "./InitSection.module.css";
import { IoLocationSharp, IoGlobeOutline } from "react-icons/io5";
// import FvtxLogo from '../../assets/fvtx-logo.svg';
import { Navbar } from "../NavBar/NavBar";
import { AnimatedBackground } from "../AnimatedBackground/AnimatedBackground";

export const InitSection: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className={styles.pageGrid}>
        <aside className={styles.leftColumn}>
          {/* O conteúdo agora fluirá naturalmente do topo para baixo */}
          <div className={styles.nameSection}>
            <h1>AUGUSTO</h1>
            <h1>SCHRÖTER</h1>
          </div>
          <ul className={styles.services}>
            <li>Branding;</li>
            <li>Typography;</li>
            <li>Social Media;</li>
            <li>Clothing;</li>
            <li>Audiovisual;</li>
            <li>Etc.</li>
          </ul>
          <div className={styles.location}>
            <p><IoLocationSharp /> Curitiba-Brazil</p>
            <p><IoGlobeOutline /> Worldwide Available</p>
          </div>
        </aside>

        <main className={styles.rightColumn}>
          <AnimatedBackground />
            <div className={styles.overlayText}>
              {/* 2. Use o SVG importado como um componente */}
              {/* <FvtxLogo className={styles.fvtxLogo} /> */}
              <p>creating crative universes by scratch</p>
            </div>
        </main>
      </section>
    </>
  );
};
