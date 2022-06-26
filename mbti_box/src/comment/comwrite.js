import React, { useState } from "react";
import { Input,Row, Col  } from "antd"
import {Container} from "react-bootstrap";
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import "./comment.css"

const Comwrite = (props) =>{
    
    
    const NICKNAME = localStorage.getItem("nickname");
    const TOKEN = localStorage.getItem("token");

    const [comment, SetComment] = useState("");

    const ComHandler = (e)=>{
        e.preventDefault();
        SetComment(e.target.value);
    };

    const submitHandler = (e)=>{
        e.preventDefault();

        Axios({
            method: 'post',
            url: "http://18.208.168.254:8080/api/comment/save",
            headers:{
                "X-AUTH-TOKEN" : TOKEN,
            },
            data: {
              content: comment,
              nickname: NICKNAME,
              post_id: props.id
            },
          })
          .then((Response)=>{
            // console.log(Response.data);
            // console.log(comment);
            // window.location.reload();
  
          })
          .catch((error)=>{
              alert("실패");
            //   console.log(error);
          });
    }


    return(
        <>
            <div >
                <textarea type="text" placeholder="comment" value={comment} maxLength={100} rows={2} className="comment" onChange={ComHandler}/>
                <button className="comsend" onClick={submitHandler}>보내기</button>
            </div>
        </>
    )

}

export default Comwrite;