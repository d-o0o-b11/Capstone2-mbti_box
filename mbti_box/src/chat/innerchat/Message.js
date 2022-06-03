import React, { Component, useEffect, useState } from "react";
import ScrollToBottom from 'react-scroll-to-bottom';
import './Message.css';
import Message_sendme from './message_sendme';
import Message_sendfrom from './message_sendfrom';
import qs from 'qs';
import io from 'socket.io-client';
import { NearbyError } from "@mui/icons-material";
//ListItem


function useFetch(url, id) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    
    
    function fetchUrl() {
          axios.get(`${url}`).then(response => {
            setData(response.data);
            console.log("확인함");
            console.log(response.data);
            //name(방이름), roomId(순번)
        });
        setLoading(false);
    }
    useEffect(() => {
        if (id) {
            fetchUrl();
            console.log("gd");
        } else {
            setData(null);
            setLoading(false);
            console.log("no");
        }
    }, []);
    return [data, loading];
}

//상대방 닉네임, 숫자1 받기 axios
const socket = io.connect("http://localhost:3001");
//io.connect

export default class Message extends Component{

  constructor(props){
      super(props);
      this.state = {
        //   premessages:[],
        //   userid:'jybin96',
        //   messages:[],
        //   message:''
        type:'ENTER',
        name: data.name,
        sender: NICKNAME,
        premessages:[],
        messages:[],
        message:''

      }
  }
  recievemessage=(messageobject)=>{
      this.setState({
          messages:[...this.state.messages,messageobject]
      })
  }
  componentWillMount(){
      const post = {
        //   userid:this.state.userid,
        //   touser:'snsk3779'
        type:'ENTER',
        name: data.name,
        sender: NICKNAME,
      }
    //   fetch('ws://localhost:8081/ws/chat',{
    //       method:"post",
    //       headers : {
    //           'content-type':'application/json'
    //       },
    //       body:JSON.stringify(post)
    //   }).then(res => res.json())
    //   .then(json =>{
    //       this.setState({
    //           premessages:json
    //       })
    //       console.log(this.state.premessages);
    //   })
      socket.on('send message',(messageobject)=>{
          this.recievemessage(messageobject);
      })
      console.log(this.state.messageobject);
  }
  
  onChange=(e)=>{
      this.setState({
          message:e.target.value
      })
      console.log(this.state.message);
  }
  onKeyDown=(e)=>{
      if(e.keyCode == 13){
          console.log("엔터키누름");
      }
  }
  onClick=()=>{
      this.setState({
          message:''
      })
      const messageobject = {
          body : this.state.message,
          userid:this.state.userid
      }
      fetch('http://localhost:3001/message',{
          method:"post",
          headers : {
              'content-type':'application/json'
          },
          body:JSON.stringify(messageobject)
      }).then(socket.emit('message',messageobject))
      
     
  }
  render(){

    const NICKNAME = localStorage.getItem("nickname"); //로그인된 사람

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });

    console.log(query);

    const [data, loading] = useFetch("/chat");
    
      return(
          <div className="message_main">
              <div className="message_title">
                  <div className="message_title_name">
                      <p>채팅방</p>
                  </div>
              </div>
              <div className="message_scroll">
              <ScrollToBottom className="chat_scroll">
                  {this.state.premessages.map((message,index)=>{
                      if(this.state.userid === message.message_user){
                          return(//내 아이디랑 == 메시지 아이디랑 같으면은 나한테 뜨는것
                              <Message_sendme message={message.message_body}/>
                          )
                      }else{
                          return(
                              <Message_sendfrom message={message.message_body}/>
                          )
                      }
                                     
                                  })
                      }
                  {this.state.messages.map((message,index)=>{
                      if(this.state.userid === message.userid){
                          return(
                              <Message_sendme message={message.body}/>
                          )
                      }else{
                          return(
                              <Message_sendfrom message={message.body}/>
                          )
                      }
                                     
                                  })
                      }
              </ScrollToBottom>
              </div>
              <div className="message_input">
                  <div className="message_inputbox">
                      <textarea onChange={this.onChange} value={this.state.message} onKeyDown={this.onKeyDown}/>
                  </div>
                  <div className="message_button">
                      <button onClick={this.onClick}>보내기</button>
                  </div>
                 
              </div>
          </div>
      )
  }
}