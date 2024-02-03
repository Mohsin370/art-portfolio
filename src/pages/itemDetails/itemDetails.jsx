import React from "react";
import artWorks from "../../helper/artWorkList";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import { useNavigate } from "react-router-dom";

export default function itemDetails() {
  let { id } = useParams();
  const itemData = artWorks.filter((el, index) => index == id);
  let navigate = useNavigate();

  return (
    <div className="pt-5 mt-5">
      <h3 className="ml-5" style={{marginLeft:"1rem"}} role="button" onClick={() => navigate(`/catalouge`)}>
        <img className="pb-1" src={arrowLeft} />
        Art Details
      </h3>
      <Container>
        <Row className="pb-5">
          <Col lg={8} xl={12} className="">
            <img
              className="w-100 object-fit-contain"
              style={{ maxHeight: "75vh" }}
              src={itemData[0].image}
            />
          </Col>
          <Col className="pt-3 text-center">
            <h3>{itemData[0].name}</h3>
            <p>{itemData[0].medium}</p>
            <p>{itemData[0].size}</p>
            <p>{itemData[0].year}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
