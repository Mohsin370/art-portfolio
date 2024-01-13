import styles from "./landing.module.css";
import landingPotrait from "../../assets/images/Malika.png";
import insta from "../../assets/icons/insta.png";
import arrow from "../../assets/icons/arrow.png";
import email from "../../assets/icons/email.png";
import { motion } from "framer-motion";

const leftSection = () => {
  return (
    <div className={styles.leftContainer}>
      <div className={styles.textContainer}>
        <h1 className="">Malika Riaz</h1>
        <h3>Visual Artist</h3>
        <h2>
          "Let your imagination be the canvas, dreams the paint, and courage the
          brush. In the gallery of life, create a masterpiece that reflects the
          vibrant hues of your passion and the bold strokes of your resilience.
          Every stroke tells a story, and every color whispers, You are an
          artist of your destiny."
        </h2>
      </div>
      
      <div className={styles.catalougeText}>
        <p>Catalouge</p>
        <img src={arrow} alt="arrow" name="arrow"></img>
      </div>
      <div className={styles.socialLinks}>
        <a
          target="_blank"
          href="https://www.instagram.com/malikariaz_/"
          className={styles.contact}
        >
          <img src={insta} alt="Instagram" name="insta"></img>
        </a>
        <div className={styles.contact} onClick={() => window.location = 'mailto:malikariaz99@gmail.com'}>
          <img src={email} alt="email" name="email"></img>
        </div>
      </div>
    </div>
  );
};

const rightSection = () => {
  return (
    <div className={styles.rightContainer}>
      <div className={styles.selfArt}>
        <p>Malika's Selft Portait</p>
        <img src={landingPotrait} alt="Self Potrait" name="Malika"></img>
        <div className={styles.subContainer}>
          <a
            target="_blank"
            href="https://www.instagram.com/malikariaz_/"
            className={styles.contact}
          >
            <img src={insta} alt="Instagram" name="insta"></img>
            <p>malikariaz_</p>
          </a>
        </div>
      </div>
    </div>
  );
};

function Landing() {
  return (
    <>
      <div className={styles.container}>
        {leftSection()}
        {rightSection()}
      </div>
    </>
  );
}

export default Landing;
