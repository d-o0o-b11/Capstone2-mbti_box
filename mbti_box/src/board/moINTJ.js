import React from "react"
import {Link} from "react-router-dom";
import { FormOutlined } from '@ant-design/icons';
import img2 from "../images/blue.png"
import "../stitle.css";
import "./board.css";

import {Row, Col } from "react-bootstrap";

const moINTJ=()=>{


    return(
        <>
        {/* <Row>
            <Col xs={10}>
                <h2>INTJ게시판</h2>
            </Col>

            <Col xs={2}>
                <span>글작성</span>
                <Link to="/writeINTJ"><FormOutlined style={{ fontSize: '30px', marginLeft:'10px'}}></FormOutlined></Link>
            </Col>
        </Row> */}

                <Row>
                    <Col xs={9}>

                        <div style={{marginLeft:'0px', marginTop:'10px'}}>
                            <h2>INTJ</h2>
                        </div>
                    </Col>
            
                    <Col xs={3}>
                        <div style={{marginRight:'0px', marginBottom:'10px'}}>
                            <span>글작성</span>
                            <Link to="/writeINTJ"><FormOutlined style={{ fontSize: '30px', marginLeft:'10px'}}></FormOutlined></Link>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className=" column1">
                            
                                <img src={img2} />
                                <span style={{fontSize:"15px", color:"#000000", fontStyle:"blod"}}>이거 제목임</span>
                                <br></br>
                                <span style={{fontSize:"12px", color:"#000000"}}>작성자</span>
                        </div>
                        
                    </Col>


                    <Col>
                        <div className=" column1">
                            <div>
                                <img src={img2} />
                            </div>
                        </div>
                    </Col>
                    
                    

                </Row>
        
        </>
    );
}

export default moINTJ