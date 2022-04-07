import React from "react"
import { Route } from "react-router-dom";
import {Link} from "react-router-dom";
import "./Step.css"
import Profile from "./login/Profile";
import App from "./App.js"



const Logo = (props) => {
  console.log(props.check)
 

  return (
    <>
    
            {/*<div className="hihi">
              <Link to="/">
                <img src={img1} className="sma"/>
              </Link>
            </div>*/}

          
          <div className="login">
              <h6>
                <Link to="/login" style={{ textDecoration: 'none' }} className="slogin">로그인/회원가입 </Link> 
              </h6>
          </div>
          
          
          
            {/* {props.check==1 ? (
            <div className="login">
              <h6>
                {props.name}
                {props.gender}
                뭐래
              </h6>
            </div>
          ) : (
            <div className="login">
              <h6>
                <Link to="/login" style={{ textDecoration: 'none' }}>로그인/회원가입 </Link> 
              </h6>
            </div>
          )} */}

          
        
    </>      
  );
  };
export default Logo
