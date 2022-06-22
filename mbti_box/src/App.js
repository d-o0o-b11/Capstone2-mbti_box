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
import INTP from "./board/INTP.js"
import ENTJ from "./board/ENTJ.js"
import ENTP from "./board/ENTP.js"

import INFJ from "./board/INFJ.js"
import INFP from "./board/INFP.js"
import ENFJ from "./board/ENFJ.js"
import ENFP from "./board/ENFP.js"

import ISTJ from "./board/ISTJ.js"
import ISFJ from "./board/ISFJ.js"
import ESTJ from "./board/ESTJ.js"
import ESFJ from "./board/ESFJ.js"

import ISTP from "./board/ISTP.js"
import ISFP from "./board/ISFP.js"
import ESTP from "./board/ESTP.js"
import ESFP from "./board/ESFP.js"

import MbtiNotice from "./board/MbtiNotice.js";
import PWfind from "./login/PWfind.js";
import Signup from "./login/Signup";
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

            {/* 분석형 */}

            <Route path="/INTJ" component={MbtiNotice}/>

            <Route path="/INTP" component={MbtiNotice}/>

            <Route path="/ENTJ" component={MbtiNotice}/>

            <Route path="/ENTP" component={MbtiNotice}/>

            <Route path="/INTJboard">
              <INTJ></INTJ>
            </Route>

            <Route path="/INTPboard">
              <INTP></INTP>
            </Route>

            <Route path="/ENTJboard">
              <ENTJ></ENTJ>
            </Route>

            <Route path="/ENTPboard">
              <ENTP></ENTP>
            </Route>


            {/* 외교형 */}

            <Route path="/INFJ" component={MbtiNotice}/>

            <Route path="/INFP" component={MbtiNotice}/>

            <Route path="/ENFJ" component={MbtiNotice}/>

            <Route path="/ENFP" component={MbtiNotice}/>

            <Route path="/INFJboard">
              <INFJ></INFJ>
            </Route>

            <Route path="/INFPboard">
              <INFP></INFP>
            </Route>

            <Route path="/ENFJboard">
              <ENFJ></ENFJ>
            </Route>

            <Route path="/ENFPboard">
              <ENFP></ENFP>
            </Route>


            {/* 관리자형 */}

            <Route path="/ISTJ" component={MbtiNotice}/>

            <Route path="/ISFJ" component={MbtiNotice}/>

            <Route path="/ESTJ" component={MbtiNotice}/>

            <Route path="/ESFJ" component={MbtiNotice}/>

            <Route path="/ISTJboard">
              <ISTJ></ISTJ>
            </Route>

            <Route path="/ISFJboard">
              <ISFJ></ISFJ>
            </Route>

            <Route path="/ESTJboard">
              <ESTJ></ESTJ>
            </Route>

            <Route path="/ESFJboard">
              <ESFJ></ESFJ>
            </Route>

            {/* 탐험가형 */}

            <Route path="/ISTP" component={MbtiNotice}/>

            <Route path="/ISFP" component={MbtiNotice}/>

            <Route path="/ESTP" component={MbtiNotice}/>

            <Route path="/ESFP" component={MbtiNotice}/>

            <Route path="/ISTPboard">
              <ISTP></ISTP>
            </Route>

            <Route path="/ISFPboard">
              <ISFP></ISFP>
            </Route>

            <Route path="/ESTPboard">
              <ESTP></ESTP>
            </Route>

            <Route path="/ESFPboard">
              <ESFP></ESFP>
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

            <Route path="/Signup">
              <Signup></Signup>
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