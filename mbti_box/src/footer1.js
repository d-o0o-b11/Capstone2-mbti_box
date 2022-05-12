import React from "react"
import Mofooter from "./mofooter.js"
import Footer from "./footer.js"
import "./Step.css"
import "./menu.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col} from "react-bootstrap";
import { useMediaQuery } from "react-responsive"



const Footer1 = () => {

const isMobile = useMediaQuery({
  query : "(max-width:767px)"
});

const isTablet = useMediaQuery({
  query : "(max-width:1100px)"
});

  return (
    <>

            <Row style={{marginTop:50, height: 50}}>
              <Col>
                {isMobile? <Mofooter/> : <Footer></Footer>}
              </Col>
            </Row>

    </>
  )
}
export default Footer1
//CreateList