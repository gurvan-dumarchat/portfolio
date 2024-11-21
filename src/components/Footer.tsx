import Link from "next/link";
import styles from "./modules/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p>&copy; Copyright Gurvan DUMARCHAT EI 2024</p>
      <p>
        <Link href={"/pdf/CV_DUMARCHAT_Gurvan (2).pdf"} target="_blank">
          Accéder au CV
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
