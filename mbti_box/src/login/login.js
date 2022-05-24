import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Axios from 'axios';

import "./login.css";
import img1 from "../images/login.png"


const Login = (props) => {
  const [Id, SetId] = useState("");  //Id
  const [Pw, SetPw] = useState("");  //pw
  
  const history = useHistory();

 

  //비밀번호
  const passwordHandler = (e) => {
    e.preventDefault();
    SetPw(e.target.value);
  };

  //아이디
  const IDHandler = (e) => {
    e.preventDefault();
    SetId(e.target.value);
  };


  //제출버튼
  const submitHandler = (e) => {
    e.preventDefault();
    // state에 저장한 값을 가져옵니다.
    console.log(Id);
    console.log(Pw);

    let body = {
          username: Id,
          password: Pw,  
    };

    Axios({
      method: 'post',
      url: 'api/user/login',
      data: {
          username: Id,
          password: Pw,
      },
  })
  .then((Response)=>{
      alert("로그인 성공");
      localStorage.setItem("token",Response.data.token)
      const TOKEN = localStorage.getItem("token");
      console.log(TOKEN);

      localStorage.setItem("mbti",Response.data.mbti)

      const users = Response.data;
      localStorage.setItem("nickname", users.nickname);
      const NICKNAME = localStorage.getItem("nickname");
      window.alert(`${users.nickname}님 환영합니다.`);
      history.replace("/");
      window.location.reload();
      //console.log(users.nickname);
  })
  .catch((error)=>{
      alert("로그인 실패");
      console.log(error);
  });
  };



  return (
    
    <>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={img1} style={{width:200}}/>



          {/* 입력값 */}

          <Box component="form" onSubmit={submitHandler}>
            <Container maxWidth="xs">

              <div className='inputbox'>
                <input type="text" placeholder="아이디" id="userid" value={Id} onChange={IDHandler} name="userid"></input>
                <label for="userid"><span>아이디</span></label>
              </div>

              <div className='inputbox'>
                <input type="password" placeholder="비밀번호" id="password" value={Pw} onChange={passwordHandler}></input>
                <label for="password">비밀번호</label>
              </div>

            </Container>
            
            <button class="w-btn w-btn-green" type="submit" style={{marginTop:20, marginBottom:20}}>
                로그인
            </button>
            <Grid container>
              
              
              <Grid item xs>
                
                <Link to="/PWfind">
                  <span style={{marginRight:"5px"}}>아이디</span>
                </Link>

                <span>|</span>

                <Link to="/PWfind2">
                  <span style={{marginLeft:"5px"}}>비밀번호 찾기</span>
                </Link>
              </Grid>
              

              
              <Grid item>
                <Link to="/Singup">
                  <span>회원가입</span>
                </Link>
              </Grid>
              
            </Grid>
          </Box>
        </Box>
      </Container>
    


  
      

      

    </>

  );
};
export default Login