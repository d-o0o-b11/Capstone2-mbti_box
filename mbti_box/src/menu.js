import React, {useEffect, useState} from 'react';
import "./menu.css"
import "./Step.css";
import {Link} from "react-router-dom";
import "./fonts/font.css";
import {Grid, Text} from "./elements"
import lo from "./images/mm.png"
import { useHistory } from 'react-router-dom';

const Menu = () => {
  let nickname = localStorage.getItem("nickname")
  let mbti = localStorage.getItem("mbti");
  let token = localStorage.getItem("token")
    
  let [retoken, ReToken] = useState(token);

  const history = useHistory();

const removeToken=()=>{
  
  localStorage.clear(); 
  // console.log(token)
  history.replace("/");
  window.location.reload();
}


const loginChat = () =>{
  
    alert("로그인 후 사용가능합니다");
    history.replace("/login");
  
}
 


   if(retoken){ 
  return (
    <>
        <div style={{marginLeft:'10%'}} className="menucolor">

          {/* span */}
         <Link to="/"><img src={process.env.PUBLIC_URL+lo} style={{width:'13vw', display:"inline"}}/></Link>

         <span style={{marginLeft:'10%'}}><Link to="/stitle" style={{ textDecoration: 'none', color:'black' }}className="font-big">게시판</Link></span> 

         <span style={{marginLeft:'3%'}}><Link to="/Game" style={{ textDecoration: 'none', color:'black' }}className="font-big">게임</Link> </span>
         <span style={{marginLeft:'3%'}}><Link to="/chat" style={{ textDecoration: 'none', color:'black' }}className="font-big">채팅</Link></span> 
         <span style={{marginLeft:'3%'}}><Link to="/Annview" style={{ textDecoration: 'none', color:'black' }}className="font-big">공지사항</Link></span> 

         <span style={{marginLeft:'5%'}} className="font-big">{nickname} 님</span>
         <span className="font-big2" style={{marginLeft:'2px'}}>[{mbti}]</span>
         <span style={{marginLeft:'1%'}} className="font-big"><button onClick={removeToken} className="bb">로그아웃 </button></span> 
        </div>
    
    </>
            
  );
   }
   else{
    return (
      <>
          <div style={{marginLeft:'10%'}} className="menucolor">
  
            <Link to="/"><img src={process.env.PUBLIC_URL+lo} style={{width:'13vw', display:"inline"}}/></Link>
  
            <span style={{marginLeft:'15%'}}><Link to="/stitle" style={{ textDecoration: 'none', color:'black' }}className="font-big">게시판</Link></span> 
  
           <span style={{marginLeft:'5%'}}><Link to="/Game" style={{ textDecoration: 'none', color:'black' }}className="font-big">게임</Link> </span>
           <span style={{marginLeft:'5%', cursor:"pointer"}} className="font-big" onClick={loginChat}><a>채팅</a></span> 
           <span style={{marginLeft:'5%'}}><Link to="/Annview" style={{ textDecoration: 'none', color:'black' }}className="font-big">공지사항</Link></span> 

           <span style={{marginLeft:'10%'}}><Link to="/login" style={{ textDecoration: 'none' , color:'black'}} className="font-big">로그인 </Link></span> 
          </div>
      
      </>
              
    );
   }
};

export default Menu