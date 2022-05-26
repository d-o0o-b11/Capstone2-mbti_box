import React, {useEffect, useState} from 'react';
import "./menu.css"
import "./Step.css";
import {Link} from "react-router-dom";
import "./fonts/font.css";
import {Grid, Text} from "./elements"
import lo from "./images/mm.png"
import { useHistory } from 'react-router-dom';

const Menu = (props) => {
  // const is_login = useSelector((store)=> store.user.is_login);
  // const user = useSelector((store)=> store.user.user)
  // const dispatch = useDispatch();
  // const cookie = getCookie("is_login")
  let nickname = localStorage.getItem("nickname")
  let mbti = localStorage.getItem("mbti");
  let token = localStorage.getItem("token")
    
  let [retoken, ReToken] = useState(token);

  const history = useHistory();


const removeToken=()=>{
  //ReToken(0);
  
  localStorage.clear(); 
  console.log(token)
  history.replace("/");
  window.location.reload();
}
 


   if(retoken){ 
  return (
    <>
        <div style={{marginLeft:'10%'}}>

          <span ><Link to="/"><img src={lo} style={{width:'13vw', display:"inline"}}/></Link></span>

          <span style={{marginLeft:'15%'}}><Link to="/stitle" style={{ textDecoration: 'none', color:'black' }}className="font-big">게시판</Link></span> 

         <span style={{marginLeft:'5%'}}><Link to="./PostEditor"className="font-big">게임</Link> </span>
         <span style={{marginLeft:'5%'}}><Link to="/chat" style={{ textDecoration: 'none', color:'black' }}className="font-big">채팅</Link> </span> 
         <span style={{marginLeft:'5%'}}><Link to="/Annview" style={{ textDecoration: 'none', color:'black' }}className="font-big">공지사항</Link></span> 

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
          <div style={{marginLeft:'10%'}}>
  
            <span ><Link to="/"><img src={lo} style={{width:'13vw', display:"inline"}}/></Link></span>
  
            <span style={{marginLeft:'15%'}}><Link to="/stitle" style={{ textDecoration: 'none', color:'black' }}className="font-big">게시판</Link></span> 
  
           <span style={{marginLeft:'5%'}}><Link to="./PostEditor"className="font-big">게임</Link> </span>
           <span style={{marginLeft:'5%'}}><Link to="/chat" style={{ textDecoration: 'none', color:'black' }}className="font-big">채팅</Link> </span> 
           <span style={{marginLeft:'5%'}}><Link to="/Annview" style={{ textDecoration: 'none', color:'black' }}className="font-big">공지사항</Link></span> 
  
           {/* <span style={{marginLeft:'5%'}}>{nickname}님</span> */}
           <span style={{marginLeft:'10%'}}><Link to="/login" style={{ textDecoration: 'none' , color:'black'}} className="font-big">로그인 </Link></span> 
          </div>
      
      </>
              
    );
   }
};

export default Menu