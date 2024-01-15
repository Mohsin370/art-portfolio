import { Row, Col, Container } from "react-bootstrap";
import styles from "./catalouge.module.css";
import _UJS0586 from "../../assets/images/_UJS0586.jpg";
import _UJS0590 from "../../assets/images/_UJS0590.jpg";
import _UJS0592 from "../../assets/images/_UJS0592.jpg";
import _UJS0595 from "../../assets/images/_UJS0595.jpg";
import _UJS0597 from "../../assets/images/_UJS0597.jpg";
import _UJS0599 from "../../assets/images/_UJS0599.jpg";
import _UJS0602 from "../../assets/images/_UJS0602.jpg";
import _UJS0604 from "../../assets/images/_UJS0604.jpg";
import _UJS0606 from "../../assets/images/_UJS0606.jpg";
import _UJS0608 from "../../assets/images/_UJS0608.jpg";
import _UJS0609 from "../../assets/images/_UJS0609.jpg";
import _UJS0611 from "../../assets/images/_UJS0611.jpg";
import _UJS0618 from "../../assets/images/_UJS0618.jpg";
import _UJS0934 from "../../assets/images/_UJS0934.jpg";
import _UJS0936 from "../../assets/images/_UJS0936.jpg";
import _UJS0939 from "../../assets/images/_UJS0939.jpg";
import _UJS0950 from "../../assets/images/_UJS0950.jpg";
import _UJS0954 from "../../assets/images/_UJS0954.jpg";
import _UJS0956 from "../../assets/images/_UJS0956.jpg";
import _UJS0961 from "../../assets/images/_UJS0961.jpg";
import ArtWork from "../../components/artWork/artWork";

function Catalouge() {
  const artWorks = [
    { name: "But I am still a child", image: _UJS0586 },
    { name: "Maybe I can fix it", image: _UJS0590 },
    { name: "My father’s coat", image: _UJS0592 },
    { name: "Wallpaper coming off", image: _UJS0595 },
    { name: "Swing from my childhood", image: _UJS0597 },
    { name: "It could be that", image: _UJS0599 },
    { name: "I vaguely recall this setting", image: _UJS0602 },
    { name: "Dining Room - I", image: _UJS0604 },
    { name: "Self Portrait", image: _UJS0606 },
    { name: "Think, Think, Imagine", image: _UJS0608 },
    { name: "Self Portrait", image: _UJS0609 },
    { name: "Dining Room II", image: _UJS0611 },
    { name: "I think I remember", image: _UJS0618 },
    { name: "I wish you knew", image: _UJS0934 },
    { name: "There is a fan in my sister’s room", image: _UJS0936 },
    { name: "Flower pots in my backyard", image: _UJS0939 },
    { name: "Think, Think, Imagine", image: _UJS0950 },
    { name: "Self Portrait", image: _UJS0954 },
    { name: "My bedroom’s window", image: _UJS0956 },
    { name: "Self Portrait", image: _UJS0961 },
  ];

  const artRenderer = () => {
    return (
      <>
        {artWorks.map((item, key) => {
          return (
            <Col sm={3} className="p-4">
              <ArtWork key={key} name={item.name} image={item.image}></ArtWork>
            </Col>
          );
        })}
      </>
    );
  };

  return (
    <Container>
      <Row>{artRenderer()}</Row>
    </Container>
  );
}

export default Catalouge;
