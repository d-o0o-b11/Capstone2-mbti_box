import {Row, Col} from "react-bootstrap";
import React, {Component} from "react";
import "./stitle.css";
import img1 from "./images/test.png"
import img2 from "./images/blue.png"
import {Link} from "react-router-dom";
import {Grid, Text, Image} from "./elements"
import { View, ImageBackground, } from 'react-native';
import { height, width } from "@mui/system";


const stitle = () => {



  return (
    <>
    
      <Row>
      <React.Fragment>
        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={img2} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">INTJ</h6>
                </div>
            </div>
          </div>
        </Col>
        

        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={img2} /></Link></figure>
                <div className="textpo">
                  <h6 className="sss">INTP</h6>
                </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={img2} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ENTJ</h6>
                </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={img2} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ENTP</h6>
                </div>
            </div>
          </div>
        </Col>
        
        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={img2} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">INFJ</h6>
                </div>
            </div>
          </div>
        </Col>
        </React.Fragment>
        
      </Row>
      
      
      
      <Row>
      <React.Fragment>
        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={img2} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">INFP</h6>
                </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={img2} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ENFJ</h6>
                </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={img2} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ENFP</h6>
                </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={img2} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ISTJ</h6>
                </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={img2} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ISFJ</h6>
                </div>
            </div>
          </div>
        </Col>
        </React.Fragment>
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
