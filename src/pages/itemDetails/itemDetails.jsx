import artWorks from "../../helper/artWorkList.js";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import ImageMagnifier from "../../components/imageMagnifier/imageMagnifier.jsx";

const ItemDetails = () => {
  let { id } = useParams();
  const itemData = artWorks.filter((el, index) => index == id);
  let navigate = useNavigate();

  return (
    <div className="pt-3 mt-5">
      <Container>
        <h3
          className="pt-3"
          role="button"
          onClick={() => navigate(`/catalouge`)}
        >
          <img className="pb-1" src={arrowLeft} />
          Art Details
        </h3>
        <Row className="w-75 m-auto justify-content-center">
          <Col xs={12} lg={10}>
            <ImageMagnifier
              src={itemData[0].image}
              className="object-fit-contain w-100"
              magnifierHeight="200"
              magnifieWidth="200"
              zoomLevel="2"
            />

            <div className="py-3 text-center">
              <h3>{itemData[0].name}</h3>
              <p>{itemData[0].medium}</p>
              <p>{itemData[0].size}</p>
              <p>{itemData[0].year}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemDetails;
