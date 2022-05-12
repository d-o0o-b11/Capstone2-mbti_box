import React from "react"
import Stitle from "./stitle"
import Mostitle from "./mostitle"
import Footer from "./footer.js"
import Mofooter from "./mofooter.js"
import Logo from "./logo.js"
import Banner from "./banner.js"
import Mobanner from "./mobanner.js"
import Menu from "./menu.js"
import MAIN1 from "./main1.js"
import Footer1 from "./footer1.js"
import Header1 from "./header1.js"
import Momenu from "./momenu.js"
import Board from "./board.js" 
import "./Step.css"
import "./menu.css"
import Login from "./login/login.js"
import INTJ from "./board/INTJ.js"
import MOINTJ from "./board/moINTJ.js"
import PWfind from "./login/PWfind.js";
import PWfind2 from "./login/PWfind2.js";
import Singup from "./login/Singup";
import WRITEINTJ from "./write/writeINTJ.js"
import Profile from "./login/Profile.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch,Link } from "react-router-dom"
import { Container, Row, Col} from "react-bootstrap";
import {Grid,Text} from "./elements"
import { useMediaQuery } from "react-responsive"

import lo from "./images/mm.png"



const App = () => {

const isMobile = useMediaQuery({
  query : "(max-width:767px)"
});

const isTablet = useMediaQuery({
  query : "(max-width:1100px)"
});

  return (
    <>

    <BrowserRouter>
      <div className="App body"> {/*추가*/ }
      {/* <Container>  */}
      
        {/* 메뉴 */}
        <Header1/>
       

        <Switch>
          <Route exact path="/">

           {/* 메인페이지 */}
              <MAIN1/>  
            
            {/* 바닥글 */}
              <Footer1/>

          </Route>




          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/ann" >
            <Profile></Profile>
          </Route>

          <Route path="/stitle">
            {isMobile? <Mostitle/> :<Stitle></Stitle>}
          </Route>

          <Route path="/INTJ">
            {isMobile? <MOINTJ/> :<INTJ></INTJ>}
          </Route>

          <Route path="/writeINTJ">
            <WRITEINTJ></WRITEINTJ>
          </Route>

          {/* <Route path="/PostEditor">
            <PostEditor/>
          </Route> */}

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
      
      </div>
    </BrowserRouter>
    </>
  )
}
export default App
//CreateList