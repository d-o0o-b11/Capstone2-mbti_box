import React from "react"
import "./menu.css"
import "./Step.css";
import {Link} from "react-router-dom";
import "./fonts/font.css";
import {Grid, Text} from "./elements"
import lo from "./images/mm.png"

const Menu = () => {

    

  return (
    <>
    
      {/* <div className="menu-box">
        <ul className="menu">

          <li><Link to="/stitle" style={{ textDecoration: 'none', color:'black' }}className="menusize ss">게시판</Link></li>

          <li><Link to="./PostEditor"className="menusize ss">게임</Link> </li>
          <li><a href="javascript:;"className="menusize ss">채팅</a> </li>
          <li><Link to="./ann" style={{ textDecoration: 'none', color:'black' }}className="menusize ss">공지사항</Link></li>
          <li><Link to="./ann" style={{ textDecoration: 'none', color:'black' }}className="menusize ss">소개글</Link></li>

        </ul>
      </div> */}
        <div style={{marginLeft:'10%'}}>

          <span ><Link to="/"><img src={lo} style={{width:'13vw', display:"inline"}}/></Link></span>

          <span style={{marginLeft:'10%'}}><Link to="/stitle" style={{ textDecoration: 'none', color:'black' }}className="font-big">게시판</Link></span> 

         <span style={{marginLeft:'5%'}}><Link to="./PostEditor"className="font-big">게임</Link> </span>
         <span style={{marginLeft:'5%'}}><a href="javascript:;"className="font-big">채팅</a> </span> 
         <span style={{marginLeft:'5%'}}><Link to="./ann" style={{ textDecoration: 'none', color:'black' }}className="font-big">공지사항</Link></span> 
         <span style={{marginLeft:'5%'}}> <Link to="./ann" style={{ textDecoration: 'none', color:'black' }}className="font-big">소개글</Link></span> 

         <span style={{marginLeft:'10%'}}><Link to="/login" style={{ textDecoration: 'none' , color:'black'}} className="font-big">로그인 </Link></span> 
        </div>
    
    </>
            
  );
};

export default Menu