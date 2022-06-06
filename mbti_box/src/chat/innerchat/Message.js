import React, { Component, useEffect, useState, useCallback, useRef } from "react";
import './Message.css';
import qs from 'qs';
import * as StompJS from '@stomp/stompjs';
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import Container from './Container.js';
import axios from "axios";




const Message = ({ location, history }) => {
    const [ms, setMs] = useState("");
    const [content, setContent] = useState([]);
    

    const NICKNAME = localStorage.getItem("nickname"); //현재 로그인 된 사람 닉네임
    const ROOMID = localStorage.getItem("roomId"); //현재 방 아이디

    useEffect(() => {
        wsSubscribe();
     return () => wsDisconnect();
    }, []);

    var sock = new SockJS("/ws/chat");
    var ws = Stomp.over(sock);

    const client = new StompJS.Client({
        brokerURL: ws, // 왜 websocket을 붙여줘야하는거지..?
        data: {
            roomId: '',
            room: {},
            sender: '',
            message: '',
            messages: []
          },
        
        recvMessage: function(recv){
            if (recv.type === "ENTER") {
                console.log("Eif문 ENTER");
                
                this.messages.unshift({"message":recv.message});

            }
        }, 
        sendMessage: function() {
            ws.send("/app/chat/message", {}, JSON.stringify({type:'TALK', roomId:ROOMID, sender:NICKNAME, message:this.message}));
                
        }, 
        
        debug: function (str) {
            console.log(str);
        },
    });

    client.activate();

    const onClick = (message) => {
        console.log(ws.connected);
        if (!ws.connected)
            return;

        ws.send("/app/chat/message", {}, JSON.stringify({type:'TALK', roomId:ROOMID, sender:NICKNAME, message:message}));
        console.log(message);
        
    }

    function User({ user }) {
        return (
              <div>
                 <b>{user.sender}</b> <span>{user.message}</span>
              </div>
        );
     }


    const wsSubscribe = () => {
        ws.connect({}, function(frame) {
            ws.subscribe("/topic/chat/room/"+ROOMID, function(message) {
              var recv = JSON.parse(message.body);
              console.log("메시지 체크"+recv.type);
              client.recvMessage(recv);
            });
            ws.send("/app/chat/message", {}, JSON.stringify({type:'ENTER', roomId:ROOMID, sender:NICKNAME}));
            console.log("얀결됨");
            console.log("연결확인"+ws.connected);
            console.log("주소확인"+"/topic/chat/room/"+ROOMID);
        }, function(error) {
            
                console.log("connection reconnect");
                
          });
    }

    const wsDisconnect = () => {
        client.deactivate();
    }


    return (
        <>
            <div>
                <div id="menu">
                    <p>Welcome,
                    </p>
                </div>
                {
                    client.messages.map(user => (<User user={user} />)) 
                }
                <Container sendMessage={onClick}/>
            </div>
        </>
    )
}

export default Message;