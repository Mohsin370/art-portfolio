import styles from "./landing.module.css";
import landingPotrait from "../../assets/images/Malika.png";
import insta from "../../assets/icons/insta.png";
import arrow from "../../assets/icons/arrow.png";
import email from "../../assets/icons/email.png";
import { Row, Col } from "react-bootstrap";
import HomeCarousel from "../../components/carousel/carousel";
import _UJS0586 from "../../assets/images/_UJS0586.jpg";
import _UJS0592 from "../../assets/images/_UJS0592.jpg";
import _UJS0934 from "../../assets/images/_UJS0934.jpg";
import { Link } from "react-router-dom";

const caraselItems = [
  { name: "But I am still a child", image: _UJS0586 },
  { name: "My father’s coat", image: _UJS0592 },
  { name: "I wish you knew", image: _UJS0934 },
];

const leftSection = () => {
  return (
    <div className={styles.textContainer}>
      <h1 className="">Malika Riaz</h1>
      <h2>Visual Artist</h2>
      <h3>
        Malika Riaz is a graduate of the National College of Arts, Lahore
        (2024). She earned her bachelor’s degree in fine art, majoring in
        miniature painting. Her practice revolves around contemporizing the
        traditional miniature technique while incorporating the concept of
        memory, time, and belonging in her work. She has incorporated her
        knowledge of traditional miniature in different mediums, including
        wire-embedded paper, stippling, hand embroidery, and fabric layering, to
        create visuals from within her home. In her works there is an evident
        presence of the South Asian visual language which is blended with her
        approach towards her exposure to western art.
      </h3>
      <HomeCarousel items={caraselItems}></HomeCarousel>
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
      <Link
        className="d-flex justify-content-center align-items-center text-decoration-none color-black link-dark"
        type="button"
        to="/catalouge"
      >
        <p className="p-2">View Catalouge</p>
        <img src={arrow} alt="arrow" name="arrow"></img>
      </Link>
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
    <div className="overflow-hidden">
      <Row style={{ minHeight: "100vh" }}>
        <Col
          sm={12}
          lg={6}
          className="mh-100"
          style={{ backgroundColor: "#bbad9f" }}
        >
          {leftSection()}
        </Col>
        <Col
          lg={6}
          className="mh-100  p-5"
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
