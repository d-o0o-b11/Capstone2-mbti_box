import {Row, Col, Container} from "react-bootstrap";
import React, {Component} from "react";
import "./stitle.css";

import ENFPimg from "./images/ENFP.jpg"
import ESFPimg from "./images/ESFP.jpg"
import ENTPimg from "./images/ENTP.jpg"
import ESTJimg from "./images/ESTJ.jpg"
import ESFJimg from "./images/ESFJ.jpg"
import ESTPimg from "./images/ESTP.jpg"
import ENTJimg from "./images/ENTJ.png"
import ENFJimg from "./images/ENFJ.jpg"

import ISFPimg from "./images/ISFP.jpg"
import INFPimg from "./images/INFP.jpg"
import INTPimg from "./images/INTP.jpg"
import ISTJimg from "./images/ISTJ.jpg"
import ISFJimg from "./images/ISFJ.jpg"
import INFJimg from "./images/INFJ.jpg"
import INTJimg from "./images/INTJ.jpg"
import ISTPimg from "./images/ISTP.jpg"

import {Link} from "react-router-dom";


const stitle = () => {



  return (
    <>

    <Container>
      <Row>
      <React.Fragment>
        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJboard" style={{ textDecoration: 'none' }}><img src={process.env.PUBLIC_URL+INTJimg} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">INTJ</h6>
                </div>
            </div>
          </div>
        </Col>
        

        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={process.env.PUBLIC_URL+INTPimg} /></Link></figure>
                <div className="textpo">
                  <h6 className="sss">INTP</h6>
                </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={process.env.PUBLIC_URL+ENTJimg} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ENTJ</h6>
                </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ENTPimg} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ENTP</h6>
                </div>
            </div>
          </div>
        </Col>
        
        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={INFJimg} /></Link></figure>
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
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={INFPimg} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">INFP</h6>
                </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ENFJimg} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ENFJ</h6>
                </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ENFPimg} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ENFP</h6>
                </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ISTJimg} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ISTJ</h6>
                </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ISFJimg} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ISFJ</h6>
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
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ESTJimg} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ESTJ</h6>
                </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ESFJimg} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ESFJ</h6>
                </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ISTPimg} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ISTP</h6>
                </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ISFPimg} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ISFP</h6>
                </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="hover13 column">
            <div>
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ESTPimg} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ESTP</h6>
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
              <figure><Link to="/INTJ" style={{ textDecoration: 'none' }}><img src={ESFPimg} /></Link></figure>
                <div className="textpo">
                      <h6 className="sss">ESFP</h6>
                </div>
            </div>
          </div>
        </Col>

        <Col>
          
        </Col>

        
        
        <Col></Col><Col></Col><Col></Col>
        </React.Fragment>
      </Row>

      </Container>
    </>
  );
};

export default stitle;
