import {Row, Col} from "react-bootstrap";
import React, {Component} from "react";
import "./stitle.css";
import img1 from "./images/test.png"
import {Link} from "react-router-dom";
import {Grid, Text, Image} from "./elements"


const stitle = () => {



  return (
    <>
    
      <Row>
        <Col>
          <div className="img-wrapper">
            <img src={img1} className="size"/>
              <div className="textpo">
                <h6>INTJ</h6>
              </div>
                <div className="darkness"></div>
                <div className="btn-plus" ><span draggable="false"><Link to="/INTJ" style={{ textDecoration: 'none' }}>+</Link></span></div>
          </div>
        </Col>

        <Col>
          <div className="img-wrapper">
            <img src={img1} className="size"/>
              <div className="textpo">
                <h6>INTP</h6>
              </div>
                <div className="darkness"></div>
                <div className="btn-plus"><span draggable="false">+</span></div>
          </div>
        </Col>

        <Col>
          <div className="img-wrapper">
            <img src={img1} className="size"/>
              <div className="textpo">
                <h6>ENTJ</h6>
              </div>
                <div className="darkness"></div>
                <div className="btn-plus"><span draggable="false">+</span></div>
          </div>
        </Col>

        <Col>
          <div className="img-wrapper">
            <img src={img1} className="size"/>
              <div className="textpo">
                <h6>ENTP</h6>
              </div>
                <div className="darkness"></div>
                <div className="btn-plus"><span draggable="false">+</span></div>
          </div>
        </Col>
        
        <Col>
          <div className="img-wrapper">
            <img src={img1} className="size"/>
              <div className="textpo">
                <h6>INFJ</h6>
              </div>
                <div className="darkness"></div>
                <div className="btn-plus"><span draggable="false">+</span></div>
          </div>
        </Col>
        
      </Row>
      
      
      
      <Row>
        <Col>
          <div className="img-wrapper">
            <img src={img1} className="size"/>
              <div className="textpo">
                <h6>INFP</h6>
              </div>
                <div className="darkness"></div>
                <div className="btn-plus"><span draggable="false">+</span></div>
          </div>
        </Col>

        <Col>
          <div className="img-wrapper">
            <img src={img1} className="size"/>
              <div className="textpo">
                <h6>ENFJ</h6>
              </div>
                <div className="darkness"></div>
                <div className="btn-plus"><span draggable="false">+</span></div>
          </div>
        </Col>

        <Col>
          <div className="img-wrapper">
            <img src={img1} className="size"/>
              <div className="textpo">
                <h6>ENFP</h6>
              </div>
                <div className="darkness"></div>
                <div className="btn-plus"><span draggable="false">+</span></div>
          </div>
        </Col>

        <Col>
          <div className="img-wrapper">
            <img src={img1} className="size"/>
              <div className="textpo">
                <h6>ISTJ</h6>
              </div>
                <div className="darkness"></div>
                <div className="btn-plus"><span draggable="false">+</span></div>
          </div>
        </Col>
        
        <Col>
          <div className="img-wrapper">
            <img src={img1} className="size"/>
              <div className="textpo">
                <h6>ISFJ</h6>
              </div>
                <div className="darkness"></div>
                <div className="btn-plus"><span draggable="false">+</span></div>
          </div>
        </Col>
        
      </Row>
      

      
      <Row>
        <Col>
          <div className="img-wrapper">
            <img src={img1} className="size"/>
              <div className="textpo">
                <h6>ESTJ</h6>
              </div>
                <div className="darkness"></div>
                <div className="btn-plus"><span draggable="false">+</span></div>
          </div>
        </Col>

        <Col>
          <div className="img-wrapper">
            <img src={img1} className="size"/>
              <div className="textpo">
                <h6>ESFJ</h6>
              </div>
                <div className="darkness"></div>
                <div className="btn-plus"><span draggable="false">+</span></div>
          </div>
        </Col>

        <Col>
          <div className="img-wrapper">
            <img src={img1} className="size"/>
              <div className="textpo">
                <h6>ISTP</h6>
              </div>
                <div className="darkness"></div>
                <div className="btn-plus"><span draggable="false">+</span></div>
          </div>
        </Col>

        <Col>
          <div className="img-wrapper">
            <img src={img1} className="size"/>
              <div className="textpo">
                <h6>ISFP</h6>
              </div>
                <div className="darkness"></div>
                <div className="btn-plus"><span draggable="false">+</span></div>
          </div>
        </Col>
        
        <Col>
          <div className="img-wrapper">
            <img src={img1} className="size"/>
              <div className="textpo">
                <h6>ESTP</h6>
              </div>
                <div className="darkness"></div>
                <div className="btn-plus"><span draggable="false">+</span></div>
          </div>
        </Col>
        
      </Row>
      

      <Row>

        <Col>
          <div className="img-wrapper">
            <img src={img1} className="size"/>
              <div className="textpo">
                <h6>ESFP</h6>
              </div>
                <div className="darkness"></div>
                <div className="btn-plus"><span draggable="false">+</span></div>
          </div>
        </Col>

        <Col>
          <div className="img-wrapper">
            <img src={img1} className="size"/>
              <div className="textpo">
                <h6>자유</h6>
              </div>
                <div className="darkness"></div>
                <div className="btn-plus"><span draggable="false">+</span></div>
          </div>
        </Col>
        <Col></Col><Col></Col><Col></Col>
      </Row>


    </>
  );
};

export default stitle;
