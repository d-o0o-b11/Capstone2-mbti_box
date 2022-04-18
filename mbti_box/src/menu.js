import React from "react"
import "./menu.css"
import "./Step.css";
import img1 from "./images/name.jpg"
import {Link} from "react-router-dom";
import "./fonts/font.css";
import {Grid, Text} from "./elements"

const Menu = () => {

    

  return (
    <>
    
      <div className="menu-box">
        <ul className="menu">
          {/* <li><Link to="/" style={{ textDecoration: 'none', color:'black'}}className="menusize ss">홈</Link> </li> */}

          <li><Link to="/stitle" style={{ textDecoration: 'none', color:'black' }}className="menusize ss">게시판</Link></li>

          <li><Link to="./PostEditor"className="menusize ss">게임</Link> </li>
          <li><a href="javascript:;"className="menusize ss">채팅</a> </li>
          <li><Link to="./ann" style={{ textDecoration: 'none', color:'black' }}className="menusize ss">공지사항</Link></li>

        </ul>
      </div>
    
    
    </>
            
  );
};

export default Menu