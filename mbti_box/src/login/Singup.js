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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import { Row, Col } from "react-bootstrap";




const Login = () => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('MBTI를 선택해주세요');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const radioSubmit = (event) => {
    event.preventDefault();

    if (value === 'best') {
      setHelperText('You got it!');
      setError(false);
    } else if (value === 'worst') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      userid: data.get('userid'),
      password: data.get('password'),
      email: data.get('email'),
      nickname: data.get('nickname'),
    });
    console.log({value});
    if(value===''){
      setHelperText('Please select an option.');
      setError(true);
    }

  };


  return (
    
    <>
        {/* sm */}
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
            <h3>회원가입</h3>
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
            <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                  autoComplete="email"
            />
            <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="nickname"
                  label="nickname"
                  name="nickname"
                  autoComplete="nickname"
            />

            {/* <form onSubmit={radioSubmit}> */}
              <FormControl sx={{ m: 1 }} error={error} variant="standard">
                <FormLabel id="demo-error-radios">본인 MBTI</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-error-radios"
                  name="quiz"
                  value={value}
                  onChange={handleRadioChange}
                >
                  <Row>
                    <Col>
                      <FormControlLabel value="INTJ" control={<Radio size='small'/>} label="INTJ" />
                    </Col>
                    <Col>
                      <FormControlLabel value="INTP" control={<Radio size='small'/>} label="INTP" />
                    </Col>
                    <Col>
                      <FormControlLabel value="ENTJ" control={<Radio size='small'/>} label="ENTJ" />
                    </Col>
                    <Col>
                      <FormControlLabel value="ENTP" control={<Radio size='small'/>} label="ENTP" />
                    </Col>
                    <Col>
                      <FormControlLabel value="INFJ" control={<Radio />} label="INFJ" />
                    </Col>
                    <Col>
                      <FormControlLabel value="INFP" control={<Radio />} label="INFP" />
                    </Col>
                    <Col>
                      <FormControlLabel value="ENFJ" control={<Radio />} label="ENFJ" />
                    </Col>
                    <Col>
                      <FormControlLabel value="ENFP" control={<Radio />} label="ENFP" />
                    </Col>
                    <Col>
                      <FormControlLabel value="ISTJ" control={<Radio />} label="ISTJ" />
                    </Col>
                    <Col>
                      <FormControlLabel value="ISFJ" control={<Radio />} label="ISFJ" />
                    </Col>
                    <Col>
                      <FormControlLabel value="ESTJ" control={<Radio />} label="ESTJ" />
                    </Col>
                    <Col>
                      <FormControlLabel value="ESFJ" control={<Radio />} label="ESFJ" />
                    </Col>
                    <Col>
                      <FormControlLabel value="ISTP" control={<Radio />} label="ISTP" />
                    </Col>
                    <Col>
                      <FormControlLabel value="ISFP" control={<Radio />} label="ISFP" />
                    </Col>
                    <Col>
                      <FormControlLabel value="ESTP" control={<Radio />} label="ESTP" />
                    </Col>
                    <Col>
                      <FormControlLabel value="ESFP" control={<Radio />} label="ESFP" />
                    </Col>
                  </Row>
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                
              </FormControl>
            {/* </form> */}





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

              {/* <Grid item>
                <Link href="#">
                  <h6>회원가입</h6>
                </Link>
              </Grid> */}
            </Grid>
          </Box>
        </Box>

        


        
      </Container>
            


    </>

  );
};
export default Login