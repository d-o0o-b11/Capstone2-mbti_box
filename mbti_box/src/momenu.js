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
import img5 from "./images/face.jpg"

import { useSelector } from 'react-redux'

const Momenu = (props) => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleBar, setToggleBar] = useState(true)

  let nickname = localStorage.getItem("nickname")
  let token = localStorage.getItem("token")

  let mbti = localStorage.getItem("mbti")
    
  let [retoken, ReToken] = useState(token);

  const removeToken=()=>{
    //ReToken(0);
    localStorage.clear(); 
    console.log(token)
    window.location.reload();
  }


  const toggleChange = () => {
    setToggleMenu(!toggleMenu)
    setToggleBar(!toggleBar)
  }

  const onMenuClick = () => {
    setToggleMenu(!toggleMenu)
    setToggleBar(!toggleBar)
  }


  if(retoken){
  return (
    <>
        
        <img src={img2} onClick={toggleChange} style={{ width:80, height:50, marginTop:10}}/>
        
        { toggleMenu &&
        <>
        
          <div className="emphasized">
            
              <div className="label sidebar" >
                <Row>
                  <Col xs={3}>
                      <img src={img3} onClick={toggleChange} style={{ marginTop: 10, marginLeft:10, width:30, height:30}}/>
                  </Col>
      
                  <Col xs={9}style={{ marginTop: 10 }}>
                      <h3 style={{textAlign: "left"}}>Menu</h3>
                  </Col>
                  
                </Row> 


              <div className="menuborder">  
                <div style={{textAlign: "center"}}>
                    <div className="profile" style={{margin: "0 auto"}}>
                        <img src={img5}/>
                    </div>

                  <Row>
                    <Col>
                        <span style={{marginLeft:'5%'}}>{nickname} 님</span>
                        <span className="font-big2" style={{marginLeft:'2px'}}>[{mbti}]</span>
                        <span style={{marginLeft:'5%'}}><button onClick={removeToken} className="bb">로그아웃 </button></span>   
                    </Col>
                  </Row> 
                  </div>

                  </div>       


                    <Link to="/stitle" onClick={toggleChange} style={{ textDecoration: 'none', color:'black' }}>
                      <h5 className="st mm"><SnippetsOutlined style={{ fontSize: '30px', marginRight:'20px'}} />게시판</h5>
                    </Link>

          
                    <Link to="./chat" onClick={toggleChange} style={{ textDecoration: 'none', color:'black' }}>
                      <h5 className="st mm"><CommentOutlined style={{ fontSize: '30px', marginRight:'20px'}} />채팅</h5>
                    </Link>


                    <Link to="/Annview" onClick={toggleChange} style={{ textDecoration: 'none', color:'black' }}>
                      <h5 className="st mm"><NotificationOutlined style={{ fontSize: '30px', marginRight:'20px'}}/>공지사항</h5>
                    </Link>
              
                
                
            </div>
          </div>
        </>
        }
      

    
    
    </>
            
  );
      }
      else{
        return (
          <>
              
              <img src={img2} onClick={toggleChange} style={{ width:80, height:50, marginTop:10}}/>
              
              { toggleMenu &&
              <>
              
                <div className="emphasized">
                  
                    <div className="label sidebar" >
                      <Row>
                        <Col xs={3}>
                          <img src={img3} onClick={toggleChange} style={{ marginTop: 10, marginLeft:10, width:30, height:30}}/>
                        </Col>
      
                        <Col xs={9}style={{ marginTop: 10 }}>
                          <h3 style={{textAlign: "left"}}>Menu</h3>
                        </Col>
                      </Row> 
                      
                      <div className="menuborder">

                        <div style={{textAlign: "center"}}>
                          <div className="profile" style={{margin: "0 auto"}}>
                              <img src={img5}/>
                          </div>
        
                          <Row>
                            <Col>
                              <Link to="/login" onClick={toggleChange} style={{ textDecoration: 'none', color:'black', marginRight:20 }}>
                                <span className="st m1">로그인</span>
                              </Link>
                              |
                              <Link to="/Singup" onClick={toggleChange} style={{ textDecoration: 'none', color:'black', marginRight:20 }}>
                                <span className="st m1">회원가입</span>
                              </Link>   
                            </Col>
                          </Row> 
                          </div>

                        </div>
                        
      
                        
                          <Link to="/stitle" onClick={toggleChange} style={{ textDecoration: 'none', color:'black' }}>
                            <h5 className="st mm"><SnippetsOutlined style={{ fontSize: '30px', marginRight:'20px'}} />게시판</h5>
                          </Link>
      
                
                          <Link to="./chat" onClick={toggleChange} style={{ textDecoration: 'none', color:'black' }}>
                            <h5 className="st mm"><CommentOutlined style={{ fontSize: '30px', marginRight:'20px'}} />채팅</h5>
                          </Link>
      
      
                          <Link to="/Annview" onClick={toggleChange} style={{ textDecoration: 'none', color:'black' }}>
                            <h5 className="st mm"><NotificationOutlined style={{ fontSize: '30px', marginRight:'20px'}}/>공지사항</h5>
                          </Link>
                        
                        
                      
                      
                  </div>
                </div>
              </>
              }
            
      
          
          
          </>
                  
        );
      }
};

export default Momenu