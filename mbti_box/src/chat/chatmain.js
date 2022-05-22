import React, { useEffect, useState } from "react";
import "./chat.css"
import img1 from "../images/cc3.png"
import { Container, Row, Col} from "react-bootstrap";

const Chatmain = () => {
  


  return (
    <>
        <img src={img1} style={{width:'100%', height:'100%'}}/>
        
        <Container>

            <Row>
                <Col style={{height:'600px', marginTop:30, marginRight:30}}>
                    <div className="back">
                        <div className="in">

                        </div>
                    </div>
                </Col>

                <Col style={{height:'600px', marginTop:30, marginLeft:30}}>
                    <div className="back">
                        <div className="in">
                            
                        </div>
                    </div>
                </Col>

            </Row>

        </Container>
    </>
    
  );
};
export default Chatmain;