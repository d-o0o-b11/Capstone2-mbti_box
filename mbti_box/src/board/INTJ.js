import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { FormOutlined } from '@ant-design/icons';
import img2 from "../images/blue.png"
import {HeartOutlined, HeartFilled} from '@ant-design/icons';
import "../stitle.css";
import "./board.css";
import {Container,Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive"


function useFetch(url) {

    const [data, setData] = useState([]);
    
    async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();
        
        setData(json);
    }
    
    useEffect(() => {
        fetchUrl();
    }, []);
    return data;
  }


function INTJ (){
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
      });

    // const MBTI = this.props.location.state.mbti;
    const MBTI = localStorage.getItem("mbti");
    const data = useFetch("/api/announcement/announcements");
  

    return(
        <>
            {(isMobile)?
            <>
                <h4 data-v-42081291 class="c-biz-tit" style={{marginTop:20}}>
                    <span data-v-42081291>INTJ</span>
                </h4>

                <Row>
                {
                    {
                        INTJ :
                        <div style={{marginRight:'0px', marginBottom:'10px'}}>
                            <Link to="/writeMBTI"><FormOutlined style={{ fontSize: '30px', marginLeft:'10px'}}></FormOutlined></Link>
                            <span>글작성</span>
                        </div>
                    }[MBTI]
                }
                    
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
                :<Container>
                
                <h4 data-v-42081291 class="c-biz-tit" style={{marginTop:20}}>
                    <span data-v-42081291>INTJ</span>
                </h4>

                <Row>
                {
                    {
                        INTJ :
                        <div style={{marginRight:'0px', marginBottom:'10px'}}>
                            <Link to="/writeMBTI"><FormOutlined style={{ fontSize: '30px', marginRight:'10px'}}></FormOutlined></Link>
                            <span>글작성</span>
                        </div>
                    }[MBTI]
                }
                    
                </Row>
                
                
                <Row>
                    <Col>
                        <div className=" column">
                            
                                <img src={img2} />
                                <span style={{fontSize:"20px", color:"#000000", fontStyle:"blod"}}>이거 제목임</span>
                                <br></br>
                                <span style={{fontSize:"14px", color:"#000000"}}>작성자</span>

                        </div>
                        
                    </Col>



                    <Col>
                        <div className=" column">
                            <div>
                                <img src={img2} />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className=" column">
                            <div>
                                <img src={img2} />
                            </div>
                        </div>
                    </Col>
                    
                </Row>
                
                </Container>
            }
        </>
    );
    
    
}


export default INTJ