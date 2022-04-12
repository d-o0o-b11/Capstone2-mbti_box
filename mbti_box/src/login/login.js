// import React from "react"
// import {Link, useHistory} from "react-router-dom";
// import { useEffect } from "react";
// import axios from "axios";
// import qs from "qs";
// import NaverLogin from "../login/naverlogin.js"
// import "../login/login.css"
// import kakaoimg from "../images/kakao.png"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const Login = () => {
  // const REST_API_KEY = "904930897775ba6799ec662e5a53d205";
  // const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  // const CLIENT_SECRET = "2rYlf0MWQZDwNHBN88GPGUvw5szohgSF";
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('userid'),
      password: data.get('password'),
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            <h3>로그인</h3>
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userid"
              label="ID"
              name="userid"
              autoComplete="current-userid"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/PWfind">
                  <h6>아이디/비밀번호 찾기</h6>
                </Link>
              </Grid>

              <Grid item>
                <Link to="/Singup">
                  <h6>회원가입</h6>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    


  
      {/* <div className="wrap">
        <div className="mytitle">
          <h3>안녕하세요</h3>
        </div>
        
      </div> */}
        
      
        
          {/* <a href={KAKAO_AUTH_URL}>
            <img src={kakaoimg} className="kast"/>
          </a>
        
      <NaverLogin></NaverLogin> */}

      

    </>

  );
};
export default Login