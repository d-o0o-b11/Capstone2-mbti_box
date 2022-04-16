import React from "react"
import { Route } from "react-router-dom";
import {Link} from "react-router-dom";
import "./Step.css"
import Profile from "./login/Profile";
import App from "./App.js"
import img1 from "./images/t.png"
import Button from '@mui/material/Button';



const Logo = (props) => {
  console.log(props.check)
 

  return (
    <>
    
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 10, mb: 2 }}>
              로그인
            </Button>
          
          {/* <div className="login">
              <h6>
                <Link to="/login" style={{ textDecoration: 'none' , color:'black'}} className="slogin">회원가입/로그인 </Link> 
              </h6>
          </div> */}
          
          
          
          
          

          
        
    </>      
  );
  };
export default Logo
