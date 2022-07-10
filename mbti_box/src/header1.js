import React from "react"
import Menu from "./menu/menu.js"
import Momenu from "./menu/momenu.js"
import "./Step.css"
import "./menu/menu.css"
import {Link } from "react-router-dom"
import { Row, Col} from "react-bootstrap";
import { useMediaQuery } from "react-responsive"

import lo from "./images/mm.png"



const Header = () => {

const isMobile = useMediaQuery({
  query : "(max-width:767px)"
});

const isTablet = useMediaQuery({
  query : "(max-width:1100px)"
});

  return (
    <>

    
      {(isMobile)?
        <Row>
            <Col xs={10}>
              <Link to="/"><img src={process.env.PUBLIC_URL+lo} style={{width:200, marginTop:10, marginBottom:10, marginLeft:20 }}/></Link>
            </Col>
          
            
            <Col xs={2}>
              <Momenu></Momenu>
            </Col>
            
        </Row>
      :
        <Row  className="aaa"  style={{ paddingTop: 20, paddingBottom:10}}>

            <Col>
              <Menu></Menu>
            </Col>
       
          </Row>
        }
        
        
      
    </>
  )
}
export default Header
//CreateList