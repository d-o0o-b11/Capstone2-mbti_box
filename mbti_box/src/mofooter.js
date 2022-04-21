import React from "react";
import "./Step.css";
import Insta from "./images/insta.png"
import { Row, Col } from "react-bootstrap";
import "./fonts/font.css";

const Mofooter = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <div className="footer">
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <img src={Insta} className="pi picenter"/>
              <span>백앤드</span>
            </Col>
            <Col>
              <img src={Insta} className="pi picenter"/>
              <span>프론트앤드</span>
            </Col>
            <Col>
              <img src={Insta} className="pi picenter"/>
              <span >게임</span>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>

            <p>
                <span className="slogin">&copy; {thisYear()}</span>

            </p>
        
      
    </div>
  );
};

export default Mofooter;
