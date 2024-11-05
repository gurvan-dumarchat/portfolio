import Link from "next/link";
import styles from "./modules/HomeContainer.module.css";
type HomeContainerProps = {
  children: React.ReactNode;
};
const HomeContainer = ({ children }: HomeContainerProps) => {
  return <section className={`${styles.container}`}>{children}</section>;
};

import React from "react";

export const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="#about">À propos</Link>
          </li>
          <li>
            <Link href="#technical">Compétences</Link>
          </li>
          <li>
            <Link href="#projects">Projets</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomeContainer;
