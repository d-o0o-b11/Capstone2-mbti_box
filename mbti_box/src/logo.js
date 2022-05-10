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

          
          {/* <div className="login">
              <h6>
                <Link to="/login" style={{ textDecoration: 'none' , color:'black'}} className="slogin">로그인 </Link> 
              </h6>
          </div> */}
          
          {/* 안써요 */}
          
          
        
    </>      
  );
  };
export default Logo
