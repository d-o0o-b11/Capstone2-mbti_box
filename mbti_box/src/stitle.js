import {Row, Col, Container} from "react-bootstrap";
import React, {Component} from "react";
import "./stitle.css";
import "./boardback.css";

import ENFPimg from "./images/ENFP.png"
import ESFPimg from "./images/ESFP.png"
import ENTPimg from "./images/ENTP.png"
import ESTJimg from "./images/ESTJ.png"
import ESFJimg from "./images/ESFJ.png"
import ESTPimg from "./images/ESTP.png"
import ENTJimg from "./images/ENTJ.png"
import ENFJimg from "./images/ENFJ.png"

import ISFPimg from "./images/ISFP.png"
import INFPimg from "./images/INFP.png"
import INTPimg from "./images/INTP.png"
import ISTJimg from "./images/ISTJ.png"
import ISFJimg from "./images/ISFJ.png"
import INFJimg from "./images/INFJ.png"
import INTJimg from "./images/INTJ.png"
import ISTPimg from "./images/ISTP.png"

import {Link} from "react-router-dom";


const stitle = () => {



  return (
    <> 
 
 
      
      {/* 분석형 */}
      <div  className="analytic">
      <p className="title">분석형</p>
        <div className="abcc">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJboard" style={{ textDecoration: 'none' }}><img src={process.env.PUBLIC_URL+INTJimg} className="analytic_imgback" /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">INTJ</h6>
                </div>
            </div>
          </div>
        </div>
        

        <div className="abcc">
          <div className="hover13 column">
              <div>
                <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={process.env.PUBLIC_URL+INTPimg} className="analytic_imgback"  /></Link></figure>
                  <div className="textpo">
                    <h6 className="sss">INTP</h6>
                  </div>
              </div>
            </div>
        </div>

        <div className="abcc">
          <div className="hover13 column">
              <div>
                <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={process.env.PUBLIC_URL+ENTJimg} className="analytic_imgback" /></Link></figure>
                  <div className="textpo">
                        <h6 className="sss">ENTJ</h6>
                  </div>
              </div>
          </div>
        </div>

        <div className="abcc">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ENTPimg} className="analytic_imgback" /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ENTP</h6>
                </div>
            </div>
          </div>
        </div>
        
     
      </div>

     {/* 여기까지 */}
      
      {/* 외교형 */}

      <div className="diplomatic">
      <p className="title">외교형</p>
        <div className="abcc">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={INFJimg} className="diplomatic_imgback" /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">INFJ</h6>
                </div>
            </div>
          </div>
        </div>
        

        <div className="abcc">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={INFPimg} className="diplomatic_imgback" /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">INFP</h6>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ENFJimg} className="diplomatic_imgback" /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ENFJ</h6>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ENFPimg} className="diplomatic_imgback" /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ENFP</h6>
                </div>
            </div>
          </div>
        </div>
        
    
      </div>

      
        {/* 관리자형 */}

        <div className="manager">
        <p className="title">관리자형</p>
        <div className="abcc">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ISTJimg} className="manager_imgback"/></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ISTJ</h6>
                </div>
            </div>
          </div>
        </div>
        

        <div className="abcc">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ISFJimg} className="manager_imgback"/></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ISFJ</h6>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ESTJimg} className="manager_imgback"/></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ESTJ</h6>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ESFJimg} className="manager_imgback"/></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ESFJ</h6>
                </div>
            </div>
          </div>
        </div>

      </div>
      
  
    {/* 탐험가형         */}
    <div className="explorer">
    <p className="title">탐험가형</p>
        <div className="abcc">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ISTPimg} className="explorer_imgback" /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ISTP</h6>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ISFPimg} className="explorer_imgback"/></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ISFP</h6>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ESTPimg} className="explorer_imgback"/></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ESTP</h6>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ESFPimg} className="explorer_imgback"/></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ESFP</h6>
                </div>
            </div>
          </div>
        </div>
      
        </div>
      

      

      {/* </Container> */}
    </>
  );
};

export default stitle;
