import React from "react"
import "./menu.css"
import "./Step.css";
import img1 from "./images/name.jpg"
import {Link} from "react-router-dom";
import "./fonts/font.css";

const Menu = () => {

    

  return (
    <>
      <div className="menu-box">
        <ul className="menu">
          <li><Link to="/" style={{ textDecoration: 'none' }}className="menusize">홈</Link> </li>

          <li><Link to="/stitle" style={{ textDecoration: 'none' }}className="menusize">게시판</Link></li>

          <li><Link to="./PostEditor"className="menusize">게임</Link> </li>
          <li><a href="javascript:;"className="menusize">채팅</a> </li>
          <li><Link to="./Profile" style={{ textDecoration: 'none' }}className="menusize">문의</Link></li>

        </ul>
      </div>
    
    </>
            
  );
};

export default Menu