import React, { useEffect, useState } from 'react';
import Stitle from "./stitle"
import Mostitle from "./mostitle"
import MAIN1 from "./main1.js"
import Footer1 from "./footer1.js"
import Header1 from "./header1.js"
import Chatmain from "./chat/chatmain.js"
import "./Step.css"
import "./menu.css"
import Login from "./login/login.js"
import INTJ from "./board/INTJ.js"
import MbtiNotice from "./board/MbtiNotice.js";
import PWfind from "./login/PWfind.js";
import Singup from "./login/Singup";
import WRITEMBTI from "./write/writeMBTI.js"
import UPDATEMBTI from "./write/updateMBTI.js"
import Notice from "./Noticeboard/Notice.js";
import Annwrite from "./Noticeboard/annwrite.js";
import Annview from "./Noticeboard/annview.js";
import Game from "./game/Game.js";
import AdminSignup from "./login/adminSignup";
import Message from "./chat/innerchat/Message.js"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive"




const App = () => {

  const isMobile = useMediaQuery({
    query: "(max-width:767px)"
  });

  const isTablet = useMediaQuery({
    query: "(max-width:1100px)"
  });




  return (
    <>
      <BrowserRouter>
        <div className="App body"> {/*추가*/}
          {/* <Container>  */}

          {/* 메뉴 */}
          <Header1 />




          <Switch>
            <Route exact path="/">

              {/* 메인페이지 */}
              <MAIN1 />

              {/* 바닥글 */}
              <Footer1 />

            </Route>



            <Route path="/login">
              <Login></Login>
            </Route>

            {/* 이전 게시판 지워도될듯? */}
            <Route path="/detail" component={Notice} />

            <Route path="/chatting" component={Message}/>

            <Route path="/chat" >
              <Chatmain></Chatmain>
            </Route>

            <Route path="/stitle">
              {isMobile ? <Mostitle /> :
                <Stitle></Stitle>
                }
            </Route>

            <Route path="/INTJ" component={MbtiNotice}/>

            <Route path="/INTJboard">
              <INTJ></INTJ>
            </Route>

            <Route path="/writeMBTI">
              <WRITEMBTI></WRITEMBTI>
            </Route>

            <Route path="/updateMBTI" component={UPDATEMBTI}/>
            {/* <Route path="/PostEditor">
            <PostEditor/>
          </Route> */}

            <Route path="/PWfind">
              <PWfind></PWfind>
            </Route>

            <Route path="/Singup">
              <Singup></Singup>
            </Route>

            <Route path="/Annwrite">
              <Annwrite></Annwrite>
            </Route>

            <Route path="/Annview">
              <Annview></Annview>
            </Route>

            <Route path="/Game">
              <Game></Game>
            </Route>

            {/* 관리자 로그인 */}
            <Route path="/AdminSignup2019">
              <AdminSignup></AdminSignup>
            </Route>


          </Switch>


        </div>

        
      </BrowserRouter>
    </>
  )
}
export default App
//CreateList