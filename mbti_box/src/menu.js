import React from "react"
import "./menu.css"
import "./Step.css";
import img1 from "./images/name.jpg"
import {Link} from "react-router-dom";

const Menu = () => {

    

  return (
    <>
      <div class="menu-box">
        <ul class="menu">
          <li><Link to="/" style={{ textDecoration: 'none' }}>홈</Link> </li>

          <li><Link to="/stitle" style={{ textDecoration: 'none' }}>게시판</Link></li>

          <li><Link to="./PostEditor">게임</Link> </li>
          <li><a href="javascript:;">채팅</a> </li>
          <li><Link to="./Profile" style={{ textDecoration: 'none' }}>문의</Link></li>

        </ul>
      </div>
    
    </>
            
  );
};

export default Menu