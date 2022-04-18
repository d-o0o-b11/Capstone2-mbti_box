import "./Step.css"
import Button from '@mui/material/Button';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Row, Col} from "react-bootstrap";



const Logo = () => {

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

    <Box
      xs={{
        marginTop: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
    <Box component="form" onSubmit={handleSubmit} noValidate xs={{ mt: 1 }} style={{marginTop:20}}>
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
              sx={{ mt: 2, mb: 2 }}
            >
              로그인
            </Button>
    </Box>

    
  </Box>
            
            
                
                <Link to="/PWfind" style={{ textDecoration: 'none', color:'gray'}}>
                  <span style={{marginRight:"5px"}}>아이디</span>
                </Link>

                <span>|</span>

                <Link to="/PWfind2" style={{ textDecoration: 'none', color:'gray'}}>
                  <span style={{marginLeft:"5px"}}>비밀번호 찾기</span>
                </Link>
             
              

              
              
                <Link to="/Singup" style={{ textDecoration: 'none', color:'gray', marginLeft:100}}>
                  <span>회원가입</span>
                </Link>
              
  
  
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 10, mb: 2 }}>
              로그인
            </Button> */}
          
          {/* <div className="login">
              <h6>
                <Link to="/login" style={{ textDecoration: 'none' , color:'black'}} className="slogin">회원가입/로그인 </Link> 
              </h6>
          </div> */}
          
          
          
        
    </>      
  );
  };
export default Logo
