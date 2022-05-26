import React, {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Row, Col } from "react-bootstrap";
import "./login.css";
import Axios from "axios";

import img1 from "../images/idfind.jpg"

const PWfind =()=>{

  const [Email, SetEmail] = useState("");

  const emailHandler = (e) => {
    e.preventDefault();
    SetEmail(e.target.value);
  };

  const submitHandler = (e) => {
    if(Email===""){
      alert("이메일을 입력해주세요");
    }
    else{
    
          
      Axios({
        method: 'post',
        url: 'api/user/check/nickname', //수정하기
        data: {
          email: Email,
        },
      })    
      .then((Response)=>{
        console.log("성공");
        console.log(Response.data);
      })  
      .catch((error)=>{
        console.log(error);
      })
    }
  }

    return(
        <>

          <Container component="main" maxWidth="xs">
            
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              

              <img src={img1} style={{width:200}}/>


              <Box component="form" onSubmit={submitHandler}>
                
              <div className='inputbox'>
                <input type="email" placeholder="이메일" id="email" value={Email} onChange={emailHandler} ></input>
                <label for="email">이메일</label>
              </div>

              <button class="w-btn w-btn-green" type="submit" style={{marginTop:"20px"}}>
                ID 찾기
              </button>
                
              </Box>
            </Box>
          </Container>    
        

        
          
        </>
    );

}


export default PWfind