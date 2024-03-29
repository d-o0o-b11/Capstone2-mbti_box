import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "./login.css";
import Axios from "axios";

import img1 from "../images/idfind.jpg"

const IDfind =()=>{

  const [Email, SetEmail] = useState("");

  const emailHandler = (e) => {
    e.preventDefault();
    SetEmail(e.target.value);
  };

  const submitHandler = (e) => {
    if(Email===""){
      alert("이메일을 입력해주세요");
    }
    else{
    
          
      Axios({
        method: 'post',
        url: `/api/user/idFind/${Email}`, //수정하기 
        
      })    
      .then((Response)=>{
        SetEmail("");
        alert("사용자의 아이디는 "+Response.data+" 입니다")
      })  
      .catch((error)=>{
        alert("존재하지 않은 이메일 정보입니다.");
      })
    }
  }

    return(
        <>

          <Container component="main" maxWidth="xs">
            
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              

              <img src={process.env.PUBLIC_URL+img1} style={{width:200}}/>


            
              <Box>
              <div className='inputbox'>
                <input type="email" placeholder="이메일" id="email" value={Email} onChange={emailHandler} ></input>
                <label for="email">이메일</label>
              </div>

              <button class="btn btn-color" type="submit" style={{marginTop:"20px"}} onClick={submitHandler}>
                ID 찾기
              </button>
              </Box>
                
              
            </Box>
          </Container>    
        

        
          
        </>
    );

}


export default IDfind