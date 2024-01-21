import React from 'react';
import artWorks from '../../helper/artWorkList';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export default function itemDetails() {
    let { id } = useParams();
    const itemData = artWorks.filter((el,index)=>index==id);


  return (
    <Container>
        <Row className="pt-5">
            <Col lg={8} xl={9} className='pt-5'>
                <img className='w-100 object-fit-contain' style={{maxHeight:'900px'}} src={itemData[0].image} />
            </Col>
            <Col className='pt-5'>
                <h3>{itemData[0].name}</h3>
                <p>{itemData[0].medium}</p>
                <p>{itemData[0].size}</p>
                <p>{itemData[0].year}</p>
            </Col>
        </Row>
    </Container>
  )
}
