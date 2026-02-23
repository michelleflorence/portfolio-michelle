import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["footer-section"]}>
      <div className={styles["footer-container"]}>
        <h5 className={styles["footer-brand"]}>Michelle Florence</h5>
        <p className={styles["footer-copyright"]}>
          Michelle’s Portfolio Web  |  ©  All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
