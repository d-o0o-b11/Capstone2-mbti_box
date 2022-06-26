import React, { useState } from "react";
import { Input,Row, Col  } from "antd"
import {Container} from "react-bootstrap";
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import "../write/writes.css"

 
const { TextArea } = Input

const Annwrite=()=>{

  const TOKEN = localStorage.getItem("token");

    const [post,setPost] = useState({
        title:'',
        content:''
      });
    
      const {title, content}=post;
    
      const handlechange = e =>{
        setPost({
          ...post,
          [e.target.name]: e.target.value
        })
      }
      const NICKNAME = localStorage.getItem("nickname"); //로그인된 사람
    

      const history = useHistory();
    
      const submitHandler=(e)=>{
        e.preventDefault();
     
        Axios({
              method: 'post',
              url: 'http://18.208.168.254:8080/api/post/save', 
              headers:{
                "X-AUTH-TOKEN" : TOKEN
              },
              data: {
                title: title,
                content: content,
                nickname:NICKNAME,
                category: "NOTICE"
              }, 
            })
            .then((Response)=>{
    
              // console.log(title);
              // console.log(content);
                alert("글이 성공적으로 올라갔습니다.");
                history.replace("/Annview");
    
            })
            .catch((error)=>{
                alert("글 작성에 오류가 발생했습니다. \n 다시 실행해주시길 바랍니다.");
            });

      }
    
      
      return (
        <Container>
              <div style={{margin:"auto"}}>
            <div className="file-upload" style={{marginTop:30}}>
            {/* Image Drag & Drop & Preview */}
            <h2>공지사항 작성</h2>
            
                <div className="custom-form-group" >
                    <input type="text" name="title" placeholder="Title" maxLength={40} value={title} onChange={handlechange}/>
                </div>
                  
                  
                
                <TextArea
                  type="text"
                  placeholder="1000자 내외"
                  name="content"
                  value={content}
                  onChange={
                    handlechange}
                  maxLength={999}
                  className='custom-form-group inputh'
                    autoSize={{ minRows: 6, maxRows: 6 }}
                  />
                  <span style={{marginLeft:"auto", marginBottom:20}}>{content.length}/1,000자</span>
    
                <button type="submit" className="btn-submit" onClick={submitHandler}>Submit</button>
            
            </div>
            </div>
            </Container>
    
      );
    };

export default Annwrite