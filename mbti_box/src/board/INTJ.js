import React from "react"
import {Link} from "react-router-dom";
import { FormOutlined } from '@ant-design/icons';
import img2 from "../images/blue.png"
import "../stitle.css";

import {Row, Col } from "react-bootstrap";

const INTJ=()=>{


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


                <div style={{marginLeft:'0px'}}>
                    <h2>INTJ</h2>
                </div>
        
                <div style={{marginRight:'0px', marginBottom:'10px'}}>
                    <span>글작성</span>
                    <Link to="/writeINTJ"><FormOutlined style={{ fontSize: '30px', marginLeft:'10px'}}></FormOutlined></Link>
                </div>

                <Row>
                    <Col><div className="hover13 column">
                        <div>
                        <figure><img src={img2} /></figure>
                            <div className="textpo">
                                <h6 className="sss">INTJ</h6>
                            </div>
                        </div>
                        </div>
                    </Col>


                    <Col><img src={img2} style={{width:'300px', height:'300px'}}/></Col>
                    <Col><img src={img2} style={{width:'300px', height:'300px'}}/></Col>
                    <Col><img src={img2} style={{width:'300px', height:'300px'}}/></Col>
                </Row>
        
        </>
    );
}

export default INTJ