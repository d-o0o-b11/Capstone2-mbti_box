import * as React from 'react';
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