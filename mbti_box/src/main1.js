import React from "react"
import Banner from "./banner.js"
import Mobanner from "./mobanner.js"
import Board from "./board.js" 
import "./Step.css"
import "./menu.css"
import "./fonts.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col} from "react-bootstrap";
import { useMediaQuery } from "react-responsive"

import img1 from "./images/cc3.png"



const MAIN1 = () => {

const isMobile = useMediaQuery({
  query : "(max-width:767px)"
});

const isTablet = useMediaQuery({
  query : "(max-width:1100px)"
});

  return (
    <>

            {isMobile? 
              <Row>
                <Mobanner/> 
              </Row>
              :
              <Row>
                <Banner></Banner>
               
              </Row>
              }
             
           

      <Container style={{marginBottom:60}}>
            <Row style={{ marginTop: 50}}> 
              
                <h4 data-v-42081291 class="c-biz-tit">
                  <span data-v-42081291>인기게시글</span>
                </h4>

              {/* <Divider horizontal>Or</Divider> */}
              <Col>
                <Board></Board>
              </Col>
              <Col>
                <Board></Board>
              </Col>
              <Col>
                <Board></Board>
              </Col>
              <Col>
                <Board></Board>
              </Col>
            </Row>
        </Container>

          
          
        {/* <div className="to">
              <span>m</span>
              <span>b</span>
              <span>t</span>
              <span>i</span>
        </div>   */}


        <img src={img1} style={{width:"100%",height:"100%"}}/>

    </>
  )
}
export default MAIN1
//CreateList