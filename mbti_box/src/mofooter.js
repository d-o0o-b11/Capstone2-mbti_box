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
              <span className="slogin">백앤드</span>
            </Col>
            <Col>
              <img src={Insta} className="pi picenter"/>
              <span className="slogin">프론트앤드</span>
            </Col>
            <Col>
              <img src={Insta} className="pi picenter"/>
              <span className="slogin">게임</span>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
{/* 
            <nav>
                <a href="https://www.naver.com/" target="_blank">Naver</a> |
                <a href="https://www.daum.net/" tager="_blank">Daum</a>
            </nav>
 */}
            <p>
                <span className="slogin">&copy; {thisYear()}</span>

            </p>
        
      
    </div>
  );
};

export default Mofooter;
