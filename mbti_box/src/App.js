import React from "react"
import Stitle from "./stitle"
import Footer from "./footer.js"
import Logo from "./logo.js"
import Banner from "./banner.js"
import Menu from "./menu.js"
import Board from "./board.js" 
import Logincheck from "./logincheck.js" 
import "./Step.css"
import Login from "./login/login.js"
import Logout from "./login/logout.js"
import Auth from "./login/Auth.js"
import INTJ from "./board/INTJ.js"
import Test from "./test"
import PWfind from "./login/PWfind.js";
import Singup from "./login/Singup";
import PostEditor from "./write/PostEditor.js"
import WRITEINTJ from "./write/writeINTJ.js"
import Profile from "./login/Profile.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch,Link } from "react-router-dom"
import { Button, Card, Container, Row, Col, Image, ThemeProvider } from "react-bootstrap";

const Image0 = 'https://media.istockphoto.com/photos/growth-of-food-sales-or-growth-of-market-basket-or-consumer-price-picture-id1329491626?b=1&k=20&m=1329491626&s=170667a&w=0&h=3jSbXJTJaarZscy4Q0Un9Hw4r22gC68KI2dJTX8OneU='
const mbtiLogo = 'https://media.istockphoto.com/photos/word-on-wood-cubes-on-green-background-picture-id1339806856?b=1&k=20&m=1339806856&s=170667a&w=0&h=sb6WjZfri8NOTFk8UyD0Dzs7xrF-DHqCcw_4JBsNaA4='
const postImage = 'https://media.istockphoto.com/photos/friends-red-cat-and-corgi-dog-walking-in-a-summer-meadow-under-the-picture-id1324099927?b=1&k=20&m=1324099927&s=170667a&w=0&h=_jRsZpMNYr--izDfsMtCB7MV97R-yMphyDTjcav85xc='
const postImage2 = 'https://media.istockphoto.com/photos/funny-friends-cute-cat-and-corgi-dog-are-lying-on-a-white-bed-picture-id1347494018?b=1&k=20&m=1347494018&s=170667a&w=0&h=nYHDAKQ1IJYqW10KHy1wMjYbLmVHPqeRkf9rQ4hnMVI='




const App = (props) => {
console.log(props.check);
{/*console.log(props.name);*/}
  return (
    <>

    <BrowserRouter>
      <div className="App"> {/*추가*/ }
      <Container> {/*추가*/ }  
      
        <Row>
          <Col className='box1' style={{ height: 50}}>
            <h2>
            <Link to="/" style={{ textDecoration: 'none', color:'black'}}>
                MBTI_BOX
            </Link>
            </h2>
          </Col>
            
          <Col><div className="menu">
            <Menu></Menu>
          </div></Col>

          <Col>
            <Logincheck/>
            {/* {props.check===1 ? (<h6>true</h6>):(<Logo></Logo>)} */}
          </Col>
          
        </Row>


        <Row className='logoBox' style={{ marginTop: 5, height: 50 }}>
          <div className="menu">
            {/* <Menu></Menu> */}
          </div>
        </Row>

        <Switch>
          <Route exact path="/">
            {/*<div className="container">
              <Banner></Banner>
            </div>*/}

            <Row>
              <Col className='box2' style={{ height: 350}}>
                <Banner></Banner>
              </Col>
            </Row>


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

            <Row>
              <Col className='box6' style={{ height: 350 }}>
                랭킹
              </Col>

            </Row>


            <Row className='box1' style={{marginTop:50, height: 50}}>
              <Col><Footer></Footer></Col>
            </Row>

          </Route>

          <Route path="/login">
            <Login></Login>
            
          </Route>

          <Route path="/oauth/kakao/callback">
            <Auth></Auth>
          </Route>
            
            
          <Route path="/profile" >
            <Profile></Profile>
            <Logout></Logout>
          </Route>

          <Route path="/stitle">
            <Stitle></Stitle>
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