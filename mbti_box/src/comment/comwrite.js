import React, { useState } from "react";
import { Input,Row, Col  } from "antd"
import {Container} from "react-bootstrap";
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import "./comment.css"

const Comwrite = (props) =>{
    
    const MBTI = localStorage.getItem("mbti");
    const NICKNAME = localStorage.getItem("nickname");

    const [comment, SetComment] = useState("");

    const ComHandler = (e)=>{
        e.preventDefault();
        SetComment(e.target.value);
    };

    const submitHandler = (e)=>{
        e.preventDefault();

        Axios({
            method: 'post',
            url: `/api/comment/post/${props.id}/comment`,
            data: {
              content: comment,
              nickname: NICKNAME,
              mbti: MBTI,
            },
          })
          .then((Response)=>{
            console.log(Response.data);
            console.log(comment);
            window.location.reload();
              // alert("댓글 성공");
            //   history.replace("/");
  
          })
          .catch((error)=>{
              alert("실패");
              console.log(props.id);
          });
    }


    return(
        <>
            <div>
                <textarea type="text" placeholder="comment" value={comment} maxLength={100} rows={2} className="comment" onChange={ComHandler}/>
                <button className="comsend" onClick={submitHandler}>보내기</button>
            </div>
        </>
    )

}

export default Comwrite;