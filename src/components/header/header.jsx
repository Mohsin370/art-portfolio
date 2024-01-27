import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  let navigate = useNavigate();

  return (
    <Row>
      <Col style={{ backgroundColor: "grey" }}>
        <div className={styles.header}>
          <h3 role="button" onClick={()=> navigate("/")} >Art By Malika </h3>
        </div>
      </Col>
    </Row>
  );
}

export default Header;
