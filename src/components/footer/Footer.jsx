import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Pixy</div>
      <div className={styles.text}>
        Pixy creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;