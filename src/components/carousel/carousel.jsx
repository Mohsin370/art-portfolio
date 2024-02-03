import Carousel from "react-bootstrap/Carousel";
function HomeCarousel(props) {

  return (
    <Carousel className="d-none d-md-block m-auto" style={{maxWidth:"500px", paddingTop:"5%"}} fade>
      {props.items.map((el, key) => {
        return (
          <Carousel.Item key={key} >
            <img style={{height:"500px"}} className="w-100" src={el.image} alt="item" name={el.name}></img>
            <Carousel.Caption className="d-none d-lg-block">
              <h3>{el.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default HomeCarousel;
