import { Row, Col, Container } from "react-bootstrap";

import ArtWork from "../../components/artWork/artWork";
import { useNavigate } from "react-router-dom";
import artWorks from "../../helper/artWorkList";

function Catalouge() {
  let navigate = useNavigate();

  const artRenderer = () => {
    return (
      <>
        {artWorks.map((item, key) => {
          return (
            <Col
              key={key}
              md={6}
              lg={4}
              xl={3}
              className="p-4 mt-5"
              onClick={() => navigate(`/item/${key}`)}
            >
              <ArtWork name={item.name} image={item.image}></ArtWork>
            </Col>
          );
        })}
      </>
    );
  };

  return (
    <Container className="pt-5">
      <Row>{artRenderer()}</Row>
    </Container>
  );
}

export default Catalouge;
