import React, { Component, useEffect, useState, useCallback, useRef } from "react";
import './Message.css';
import qs from 'qs';
import * as StompJs from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import { Container, Row, Col} from "react-bootstrap";
import "../chat.css"
import img5 from "../../images/chat.png"
import "../mochat.css"
import { useMediaQuery } from "react-responsive"





const Message = ({ location, history }) => { 

  const NICKNAME = localStorage.getItem("nickname"); //현재 로그인 된 사람 닉네임
  const ROOMID = localStorage.getItem("roomId"); //현재 방 아이디
  const MBTI = localStorage.getItem("mbti");
  const TOKEN = localStorage.getItem("token");

  const client = useRef({});
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");

  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  }); 

  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

  const connect = () => {
    client.current = new StompJs.Client({

      webSocketFactory: () => new SockJS("/ws/chat"), // proxy를 통한 접속 스탬프
      connectHeaders: {
        "auth-token": "spring-chat-auth-token",
        "X-AUTH-TOKEN" : TOKEN
      },
      debug: function (str) {
        // console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        subscribe();
      },
      onStompError: (frame) => {
        // console.error(frame);
      },
    });

    client.current.activate();
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  const subscribe = () => {
    client.current.subscribe(`/topic/chat/room/${ROOMID}`, ({ body }) => {
      setChatMessages((_chatMessages) => [..._chatMessages, JSON.parse(body)]);
      // console.log("body:"+ROOMID);
    });
  };

  const publish = (message) => {
    if (!client.current.connected) {
      return;
    }
    if(message===""){
      alert("내용을 입력해주세요")
    }
    else{
      client.current.publish({
        destination: "/app/chat/message",
        body: JSON.stringify({ roomId: ROOMID, message, sender:NICKNAME }),
      });

      setMessage("");
    }
  };

  return (
    <>
    {   (isMobile)?
        <Container>
          <div className="chatting backin">
              <div className="banner">
                  <img src={process.env.PUBLIC_URL+img5} height="150" />
              </div>
              <Row>
                <Col className="sickbang2">
                  
                    <div className="back2">
 
                            <div className="in3">
                              <div className="intext2">
                                <section className="list-wrapper">
                                  {chatMessages && chatMessages.length > 0 && (
                                    <ul>
                                      {chatMessages.map((_chatMessage, index) => (
                                        <li key={index} style={{margin:"10px 0px"}}>{NICKNAME}[{MBTI}]<br></br>{_chatMessage.message}</li>
                                      ))}
                                    </ul>
                                  )}
                                </section>
                              </div>  

                                <div style={{position:"absolute", bottom:"0"}}>
                                  
                                  <div class="input-group mb-3" style={{margin:"10px 18px"}}>
                                      <input 
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Message" 
                                        aria-describedby="button-addon2"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        onKeyPress={(e) => e.which === 13 && publish(message)}
                                        />
                                      <button class="btn btn-warning" type="button" onClick={() => publish(message)}>Button</button>
                                  </div>
                                
                                </div>

                            </div>
                    </div>
                    
                </Col>


            </Row>
          </div>
        </Container>
      :
      <Container>
            <div className="chatting backin">
                <div className="banner">
                    <img src={process.env.PUBLIC_URL+img5} height="150" />
                </div>
            <Row>
                <Col className="sickbang">
                  
                    <div className="back">
 
                            <div className="in">
                              <div className="intext">
                                <section className="list-wrapper">
                                  {chatMessages && chatMessages.length > 0 && (
                                    <ul>
                                      {chatMessages.map((_chatMessage, index) => (
                                        <li key={index} style={{margin:"10px 0px"}}>{NICKNAME}[{MBTI}]<br></br>{_chatMessage.message}</li>
                                      ))}
                                    </ul>
                                  )}
                                </section>
                              </div>  

                                <div style={{position:"absolute", bottom:"0"}}>
                                  
                                  <div class="input-group mb-3" style={{margin:"10px 10px 10px 50px"}}>
                                      <input 
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Message" 
                                        aria-describedby="button-addon2"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        onKeyPress={(e) => e.which === 13 && publish(message)}
                                        />
                                      <button class="btn btn-warning" type="button" onClick={() => publish(message)}>Button</button>
                                  </div>
                                
                                </div>

                            </div>
                    </div>
                    
                </Col>


            </Row>
            
            </div>
        </Container>
      }
    </>
  );
};

export default Message;