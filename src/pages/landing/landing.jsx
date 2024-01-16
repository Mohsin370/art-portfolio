import styles from "./landing.module.css";
import landingPotrait from "../../assets/images/Malika.png";
import insta from "../../assets/icons/insta.png";
import arrow from "../../assets/icons/arrow.png";
import email from "../../assets/icons/email.png";
import { Row, Col, Container } from "react-bootstrap";

const leftSection = () => {
  return (
    <div className={styles.textContainer}>
      <h1 className="">Malika Riaz</h1>
      <h3>Visual Artist</h3>
      <h4>
        "Let your imagination be the canvas, dreams the paint, and courage the
        brush. In the gallery of life, create a masterpiece that reflects the
        vibrant hues of your passion and the bold strokes of your resilience.
        Every stroke tells a story, and every color whispers, You are an artist
        of your destiny."
      </h4>
      {bottomNav()}
    </div>
  );
};

const rightSection = () => {
  return (
    <div className={styles.selfArt}>
      <p>Self Portait</p>
      <img src={landingPotrait} alt="Self Potrait" name="Malika"></img>
      <Row>
        <a
          target="_blank"
          href="https://www.instagram.com/malikariaz_/"
          className={styles.contact}
        >
          <img src={insta} alt="Instagram" name="insta"></img>
          <p>malikariaz_</p>
        </a>
      </Row>
    </div>
  );
};

const bottomNav = () => {
  return (
    <div className="p-3">
      <div
        className="d-flex justify-content-center align-items-center "
        type="button"
      >
        <p>Catalouge</p>
        <img src={arrow} alt="arrow" name="arrow"></img>
      </div>
      <div className="d-flex mt-3 justify-content-center">
        <a
          target="_blank"
          href="https://www.instagram.com/malikariaz_/"
          className={styles.contact}
        >
          <img src={insta} alt="Instagram" name="insta"></img>
        </a>
        <div
          className={styles.contact}
          onClick={() => (window.location = "mailto:malikariaz99@gmail.com")}
        >
          <img src={email} alt="email" className="pl-1" name="email"></img>
        </div>
      </div>
    </div>
  );
};

function Landing() {
  return (
    <div>
      <Row style={{ minHeight: "100vh", overflow: "hidden" }}>

        <Col
          sm={12}
          lg={6}
          class="mh-100"
          style={{ backgroundColor: "#bbad9f" }}
        >
          {leftSection()}

        </Col>
        <Col
          lg={6}
          className=" mh-100  p-5"
          style={{ backgroundColor: "#dcd2c8" }}
        >
          <div className="h-100 d-flex justify-content-center align-items-center">
            {rightSection()}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Landing;
