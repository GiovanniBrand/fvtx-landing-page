import React from "react";
import styles from "./NavBar.module.css";

export const NavBar: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.mainNav}>
          <a href="#home">home</a>
          <a href="#work">work</a>
          <a href="#about">about me</a>
          <a href="#contact">contact</a>
        </nav>
      </div>
    </header>
  );
};
