
import {Container } from "react-bootstrap";
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
      <div className=" d-flex flex-wrap gap-3 justify-content-center  p-2 ">
        {artRenderer()}
      </div>
    </Container>
  );
}

export default Catalouge;
