import React from "react"
import {Link} from "react-router-dom";
import { FormOutlined } from '@ant-design/icons';

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
                    <h2>INTJ게시판</h2>
                </div>
        
                <div style={{marginRight:'0px'}}>
                    <span>글작성</span>
                    <Link to="/writeINTJ"><FormOutlined style={{ fontSize: '30px', marginLeft:'10px'}}></FormOutlined></Link>
                </div>
        </>
    );
}

export default INTJ