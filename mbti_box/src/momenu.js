import "./menu.css"
import "./Step.css";
import img1 from "./images/name.jpg"
import {Link} from "react-router-dom";
import "./fonts/font.css";
import React, { useState, useEffect } from 'react';
import { Menu, Button } from 'antd';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';
import { HeartOutlined, CommentOutlined, NotificationOutlined, SnippetsOutlined } from '@ant-design/icons';
import {Row, Col} from "react-bootstrap";
import img2 from "./images/me.png"
import img3 from "./images/xx.png"
import Grid from '@mui/material/Grid';


const MenuList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavTop = styled.div`
  display: flex;
  justify-content: flex-end;
  
  
`;

const Momenu = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleBar, setToggleBar] = useState(true)

  const toggleChange = () => {
    setToggleMenu(!toggleMenu)
    setToggleBar(!toggleBar)
  }

  const onMenuClick = () => {
    setToggleMenu(!toggleMenu)
    setToggleBar(!toggleBar)
  }

  return (
    <>
        
          <img src={img2} onClick={toggleChange} style={{ width:50, height:50, marginLeft:20}}/>
        
        {/* <NavTop>
          <MenuUnfoldOutlined src={img2} type="primary" onClick={toggleChange} style={{ marginBottom: 10, width:20 }}>
            { toggleBar ? <MenuOutlined /> : <MenuFoldOutlined /> }
          </MenuUnfoldOutlined>
        </NavTop> */}
        { toggleMenu &&
        <>
        
          <div className="emphasized">
            
              <div className="label sidebar">
                <Row>
                  <Col xs={3}>
                    <img src={img3} onClick={toggleChange} style={{ marginTop: 10, marginLeft:10, width:30, height:30}}/>
                  </Col>

                  <Col xs={9}style={{ marginTop: 10 }}>
                  <h3><HeartOutlined /> menu <HeartOutlined /></h3>
                    
                  </Col>
                  <hr></hr>
                </Row> 
                
                  <Row>
                    <Col>
                      <Link to="/login" onClick={toggleChange} style={{ textDecoration: 'none', color:'black' }}>
                        <span className="st m1">로그인</span>
                      </Link>
                      <Link to="/Singup" onClick={toggleChange} style={{ textDecoration: 'none', color:'black' }}>
                        <span className="st m1">회원가입</span>
                      </Link>   
                    </Col>
                  </Row>

                  


                    <Link to="/stitle" onClick={toggleChange} style={{ textDecoration: 'none', color:'black' }}>
                      <h5 className="st mm"><SnippetsOutlined />게시판</h5>
                    </Link>

                    <h5 className="st mm"><CommentOutlined />채팅</h5>

                    <Link to="./ann" onClick={toggleChange} style={{ textDecoration: 'none', color:'black' }}>
                      <h5 className="st mm"><NotificationOutlined style={{marginBottom:10}}/>공지사항</h5>
                    </Link>
                  
                
                
            </div>
          </div>
        </>
        }
      

    
    
    </>
            
  );
};

export default Momenu