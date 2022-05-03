import "./menu.css"
import "./Step.css";
import {Link} from "react-router-dom";
import "./fonts/font.css";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {  CommentOutlined, NotificationOutlined, SnippetsOutlined, CloudOutlined } from '@ant-design/icons';
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
                  <h3><CloudOutlined /> menu <CloudOutlined /></h3>
                    
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
                      <h5 className="st mm"><SnippetsOutlined style={{ fontSize: '30px', marginRight:'20px'}} />게시판</h5>
                    </Link>

                    <h5 className="st mm"><CommentOutlined style={{ fontSize: '30px', marginRight:'20px'}} />채팅</h5>

                    <Link to="./ann" onClick={toggleChange} style={{ textDecoration: 'none', color:'black' }}>
                      <h5 className="st mm"><NotificationOutlined style={{ fontSize: '30px', marginRight:'20px'}}/>공지사항</h5>
                    </Link>
                  
                
                
            </div>
          </div>
        </>
        }
      

    
    
    </>
            
  );
};

export default Momenu