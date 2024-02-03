import { Container } from "react-bootstrap";
import ArtWork from "../../components/artWork/artWork";
import { useNavigate } from "react-router-dom";
import artWorks from "../../helper/artWorkList";
import arrowLeft from "../../assets/icons/arrow-left.svg";

function Catalouge() {
  let navigate = useNavigate();

  const artRenderer = () => {
    return (
      <>
        {artWorks.map((item, key) => {
          return (
            <div key={key} onClick={() => navigate(`/item/${key}`)}>
              <ArtWork name={item.name} image={item.image}></ArtWork>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <Container className="pb-5  mt-5 pt-5">
      <div>
        <h3 className="p-3" role="button" onClick={() => navigate(`/`)}>
          <img className="pb-1" src={arrowLeft} />
          Catalouge
        </h3>
      </div>
      <div className=" d-flex flex-wrap gap-3 justify-content-center  p-2 ">
        {artRenderer()}
      </div>
    </Container>
  );
}

export default Catalouge;
