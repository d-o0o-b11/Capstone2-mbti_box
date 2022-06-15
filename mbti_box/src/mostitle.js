import {Row, Col, Container} from "react-bootstrap";
import React, {Component} from "react";
import "./stitle.css";
import img2 from "./images/blue.png"
import {Link} from "react-router-dom";
import {Grid, Text, Image} from "./elements"
import "./boardbackmo.css";

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

const mostitle = () => { 



  return (
    <>

{/* 분석형 */}
<div  className="analytic">
      <p className="title">분석형</p>
        <div className="abcc2">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJboard" style={{ textDecoration: 'none' }}><img src={process.env.PUBLIC_URL+INTJimg} className="analytic_imgback"/></Link></figure>
                <div className="textpo">
                      <p className="stitle">INTJ</p>
                </div>
            </div>
          </div>
        </div>
        

        <div className="abcc2">
          <div className="hover13 column">
              <div>
                <figure><Link to="/INTPboard" style={{ textDecoration: 'none' }}><img src={process.env.PUBLIC_URL+INTPimg} className="analytic_imgback"  /></Link></figure>
                  <div className="textpo">
                  <p className="stitle">INTP</p>
                  </div>
              </div>
            </div>
        </div>

        <div className="abcc2">
          <div className="hover13 column">
              <div>
                <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={process.env.PUBLIC_URL+ENTJimg} className="analytic_imgback" /></Link></figure>
                  <div className="textpo">
                    <p className="stitle">ENTJ</p>
                  </div>
              </div>
          </div>
        </div>

        <div className="abcc2">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ENTPimg} className="analytic_imgback" /></Link></figure>
                <div className="textpo">
                  <p className="stitle">ENTP</p>
                </div>
            </div>
          </div>
        </div>
        
     
      </div>

     {/* 여기까지 */}
      
      {/* 외교형 */}

      <div className="diplomatic">
      <p className="title">외교형</p>
        <div className="abcc2">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={INFJimg} className="diplomatic_imgback" /></Link></figure>
                <div className="textpo">
                  <p className="stitle">INFJ</p>
                </div>
            </div>
          </div>
        </div>
        

        <div className="abcc2">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={INFPimg} className="diplomatic_imgback" /></Link></figure>
                <div className="textpo">
                <p className="stitle">INFP</p>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc2">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ENFJimg} className="diplomatic_imgback" /></Link></figure>
                <div className="textpo">
                <p className="stitle">ENFJ</p>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc2">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ENFPimg} className="diplomatic_imgback" /></Link></figure>
                <div className="textpo">
                <p className="stitle">ENFP</p>
                </div>
            </div>
          </div>
        </div>
        
    
      </div>

      
        {/* 관리자형 */}

        <div className="manager">
        <p className="title">관리자형</p>
        <div className="abcc2">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ISTJimg} className="manager_imgback"/></Link></figure>
                <div className="textpo">
                <p className="stitle">ISTJ</p>
                </div>
            </div>
          </div>
        </div>
        

        <div className="abcc2">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ISFJimg} className="manager_imgback"/></Link></figure>
                <div className="textpo">
                <p className="stitle">ISFJ</p>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc2">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ESTJimg} className="manager_imgback"/></Link></figure>
                <div className="textpo">
                <p className="stitle">ESTJ</p>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc2">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ESFJimg} className="manager_imgback"/></Link></figure>
                <div className="textpo">
                <p className="stitle">ESFJ</p>
                </div>
            </div>
          </div>
        </div>

      </div>
      
  
    {/* 탐험가형         */}
    <div className="explorer">
    <p className="title">탐험가형</p>
        <div className="abcc2">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ISTPimg} className="explorer_imgback" /></Link></figure>
                <div className="textpo">
                <p className="stitle">ISTP</p>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc2">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ISFPimg} className="explorer_imgback"/></Link></figure>
                <div className="textpo">
                <p className="stitle">ISFP</p>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc2">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ESTPimg} className="explorer_imgback"/></Link></figure>
                <div className="textpo">
                <p className="stitle">ESTP</p>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc2">
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ESFPimg} className="explorer_imgback"/></Link></figure>
                <div className="textpo">
                <p className="stitle">ESFP</p>
                </div>
            </div>
          </div>
        </div>
      
        </div>


    </>
  );
};

export default mostitle;
