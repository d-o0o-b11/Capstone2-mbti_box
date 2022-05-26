import React, { useEffect, useState } from "react";
import "./chat.css"
import { Container, Row, Col} from "react-bootstrap";
import img5 from "../images/chat.png"

const Chatmain = () => {

  return (
    <>
        <Container>
            <div className="chatting">
                <div className="banner">
                    <img src={img5} height="150" />
                </div>
            <Row>
                <Col className="sickbang">
                    <div className="back">
                        <h1 className="test11" src={img5} height="30" width="30">단체 채팅</h1>
                        <div className="in">

                        </div>
                    </div>
                </Col>

                <Col className="sickbang">
                    <div className="back">
                    <h1 className="test11" src={img5} height="30" width="30">개인 채팅</h1>
                        <div className="in">
                        <h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2>
                         </div>
                    </div>
                </Col>

            </Row>
            </div>
        </Container>
    </>
    
  );
};
export default Chatmain;