// Footer.js
import styles from './Footer.module.css'; // make sure to create a corresponding CSS module file

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contactInfo}>
          <p>248-524-3244</p>
          <p> info@twinpineslandscaping.com</p>
          <p> Cornerstone Village, Suite F<br/>
650 East Big Beaver Rd.<br/>
Troy, MI 48083</p>
        <div className={styles.socialLinks}>
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        </div>
        <div className={styles.imageContainer}>
  <img src="/services1.jpg" alt="Descriptive Text for Image"/>
</div>

      <div className={styles.copyRight}>
        <p>© [2023] Twin Pines Landscaping. All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
