import React from "react"
import Stitle from "./stitle"
import Mostitle from "./mostitle"
import Footer from "./footer.js"
import Mofooter from "./mofooter.js"
import Logo from "./logo.js"
import Banner from "./banner.js"
import Mobanner from "./mobanner.js"
import Menu from "./menu.js"
import Momenu from "./momenu.js"
import Board from "./board.js" 
import Logincheck from "./logincheck.js" 
import "./Step.css"
import "./menu.css"
import Login from "./login/login.js"
import Logout from "./login/logout.js"
import Auth from "./login/Auth.js"
import INTJ from "./board/INTJ.js"
import Test from "./test"
import PWfind from "./login/PWfind.js";
import PWfind2 from "./login/PWfind2.js";
import Singup from "./login/Singup";
import PostEditor from "./write/PostEditor.js"
import WRITEINTJ from "./write/writeINTJ.js"
import Profile from "./login/Profile.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch,Link } from "react-router-dom"
import { Button, Card, Container, Row, Col, Image, ThemeProvider } from "react-bootstrap";
import {Grid,Text} from "./elements"
import { useMediaQuery } from "react-responsive"
import { CacheProvider } from "@emotion/react"



const App = (props) => {
console.log(props.check);
{/*console.log(props.name);*/}

const isMobile = useMediaQuery({
  query : "(max-width:767px)"
});

  return (
    <>

    <BrowserRouter>
      <div className="App"> {/*추가*/ }
      <Container> {/*추가*/ }  
      
      <React.Fragment>
      {isMobile?
        <Row>
            <Col xs={9}>
            <Link to="/" style={{ textDecoration: 'none', color:'black'}}>
              <h1 style={{marginTop:10 }}>
                  MBTI_BOX
              </h1>
            </Link>
            </Col>
          
            
            <Col xs={3}>
              <Momenu></Momenu>
            </Col>
            
        </Row>
      :
        <Row>
          <Grid is_flex padding="16px">
            <Col>
              <h1>
              <Link to="/" style={{ textDecoration: 'none', color:'black'}} className="slogo">
                  MBTI_BOX
              </Link>
              </h1>
            </Col>
          
            <Grid is_flex width="50%">
              <Menu></Menu>
            </Grid>
          <Col></Col>
            {/* <Col>
              <Logo/>
            </Col> */}
          </Grid>
          </Row>
        }
        
      </React.Fragment>

       

        <Switch>
          <Route exact path="/">
            {/*<div className="container">
              <Banner></Banner>
            </div>*/}

           
              {isMobile? 
              <Row>
                <Mobanner/> 
              </Row>
              :
              <Row>
                <Col xs={9}>
                  <Banner></Banner>
                </Col>
                <Col className="box7" xs={3} >
                  <Logo/>
                </Col>
               
              </Row>
              }
             
           


            <Row style={{ marginTop: 20 }}>
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

            {/* <Row>
              <Col className='box6' style={{ height: 350 }}>
                랭킹
              </Col>

            </Row> */}


            <Row style={{marginTop:50, height: 50}}>
              <Col>
                {isMobile? <Mofooter/> : <Footer></Footer>}
              </Col>
            </Row>

          </Route>

          <Route path="/login">
            <Login></Login>
            
          </Route>

          {/* <Route path="/oauth/kakao/callback">
            <Auth></Auth>
          </Route> */}
            
            
          <Route path="/ann" >
            <Profile></Profile>
          </Route>

          <Route path="/stitle">
            {isMobile? <Mostitle/> :<Stitle></Stitle>}
          </Route>

          <Route path="/INTJ">
            <INTJ></INTJ>
          </Route>

          <Route path="/writeINTJ">
            <WRITEINTJ></WRITEINTJ>
          </Route>

          <Route path="/PostEditor">
            <PostEditor/>
          </Route>

          <Route path="/PWfind">
            <PWfind></PWfind>
          </Route>

          <Route path="/PWfind2">
            <PWfind2></PWfind2>
          </Route>

          <Route path="/Singup">
            <Singup></Singup>
          </Route>


        </Switch>
      </Container>
      </div>
    </BrowserRouter>
    </>
  )
}
export default App
//CreateList