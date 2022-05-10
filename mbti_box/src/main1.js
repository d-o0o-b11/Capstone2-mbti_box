import React from "react"
import Banner from "./banner.js"
import Mobanner from "./mobanner.js"
import Menu from "./menu.js"
import Momenu from "./momenu.js"
import Board from "./board.js" 
import "./Step.css"
import "./menu.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch,Link } from "react-router-dom"
import { Container, Row, Col} from "react-bootstrap";
import {Grid,Text} from "./elements"
import { useMediaQuery } from "react-responsive"

import lo from "./images/mm.png"



const App = (props) => {
console.log(props.check);
{/*console.log(props.name);*/}

const isMobile = useMediaQuery({
  query : "(max-width:767px)"
});

const isTablet = useMediaQuery({
  query : "(max-width:1100px)"
});

  return (
    <>

    <BrowserRouter>
      {/* <Container>  */}
      
      <React.Fragment>
      {(isMobile||isTablet)?
        <Row>
            <Col xs={10}>
              <Link to="/"><img src={lo} style={{width:200, marginTop:10, marginBottom:10 }}/></Link>
            </Col>
          
            
            <Col xs={2}>
              <Momenu></Momenu>
            </Col>
            
        </Row>
      :
        <Row  className="aaa"  style={{ paddingTop: 30, paddingBottom:10}}>

            <Col>
              <Menu></Menu>
            </Col>
       
          </Row>
        }
        
      </React.Fragment>
      {/* </Container> */}
       

        <Switch>
          <Route exact path="/">
           
              {isMobile? 
              <Row>
                <Mobanner/> 
              </Row>
              :
              <Row>
                <Banner></Banner>
               
              </Row>
              }
             
           

      
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


          </Route>


        </Switch>
      
    </BrowserRouter>
    </>
  )
}
export default App
//CreateList