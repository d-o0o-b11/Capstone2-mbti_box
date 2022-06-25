// import * as React from 'react';
import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Axios from 'axios';
import "./login.css";


import img1 from '../images/sign.png'






const Signup = () => {
  const [value, SetValue] = useState("");  //mbti
  const [Id, SetId] = useState("");  //Id
  const [Pw, SetPw] = useState("");  //pw
  const [Email, SetEmail] = useState("");  //email
  const [Nickname, SetNickname] = useState("");  //nick

  const [usingid, Setusingid] =useState(true);
//중복아니면 false

  const history = useHistory();

  // 이메일
  const emailHandler = (e) => {
    e.preventDefault();
    SetEmail(e.target.value);
  };

  //비밀번호
  const passwordHandler = (e) => {
    e.preventDefault();
    SetPw(e.target.value);
  };

  //아이디
  const IDHandler = (e) => {
    e.preventDefault();
    SetId(e.target.value);
  };

  //닉네임
  const NicknameHandler = (e) => {
    e.preventDefault();
    SetNickname(e.target.value);
  };

  //mbti
  const mbtiHandler = (e)=>{
    e.preventDefault();
    SetValue(e.target.value);
  }



  //제출버튼
  const submitHandler = (e) => {
    e.preventDefault();


    if(Id===""){
      alert("아이디를 입력해주세요");
    }
    else if(Pw===""){
      alert("비밀번호를 입력해주세요");
    }
    else if(Email===""){
      alert("이메일을 입력해주세요");
    }
    else if(Nickname===""){
      alert("닉네임을 입력해주세요");
    }
    else if(value===""){
      alert("MBTI를 선택해주세요");
    }
    else{
    
          Axios({
            method: 'post',
            url: 'http://18.208.168.254:8080/api/user/signup',
            data: {
                email: Email,
                password: Pw,
                mbti:value,
                nickname:Nickname,
                username: Id,
                adminPassword:""
            },
          })
          .then((Response)=>{
              alert("환영합니다");
              history.replace("/login");    
          })
          .catch((error)=>{
              alert("회원가입 실패");
              // console.log(Id);
              // console.log(error);
              
          });
 

   }
  };





  return (
    
    <>


        {/* sm */}
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


          <Box component="form" onSubmit={submitHandler}>

          <Container maxWidth="xs">
            <div className='inputbox'>
              <input type="text" placeholder="아이디" id="userid" value={Id} onChange={IDHandler} name="userid"></input>
              <label for="userid">아이디</label>
            </div>

            <div className='inputbox'>
              <input type="password" placeholder="비밀번호" id="password" value={Pw} onChange={passwordHandler}></input>
              <label for="password">비밀번호</label>
            </div>

            <div className='inputbox'>
              <input type="email" placeholder="이메일" id="email" value={Email} onChange={emailHandler} ></input>
              <label for="email">이메일</label>
            </div>

            <div className='inputbox'>
              <input type="text" placeholder="아이디" id="nickname" value={Nickname} onChange={NicknameHandler} maxLength="10"></input>
              <label for="nickname">닉네임</label>
            </div>
          </Container>
            

    <div>

      <form value={value} onChange={mbtiHandler} style={{margin:"20px 0px 5px 5px"}}>
        
        <select id="mbti" name="mbti" className='selectmbti'>
          <option value="">-- 선택하세요 --</option>
          <optgroup label="IN♡♡">
            <option value="INTJ">INTJ</option>
            <option value="INTP">INTP</option>
            <option value="INFJ">INFJ</option>
            <option value="INFP">INFP</option>
          </optgroup>

          <optgroup label="IS♡♡">
            <option value="ISTJ">ISTJ</option>
            <option value="ISTP">ISTP</option>
            <option value="ISFJ">ISFJ</option>
            <option value="ISFP">ISFP</option>
          </optgroup>

          <optgroup label="EN♡♡">
            <option value="ENTJ">ENTJ</option>
            <option value="ENTP">ENTP</option>
            <option value="ENFJ">ENFJ</option>
            <option value="ENFP">ENFP</option>
          </optgroup>

          <optgroup label="ES♡♡">
            <option value="ESTJ">ESTJ</option>
            <option value="ESTP">ESTP</option>
            <option value="ESFJ">ESFJ</option>
            <option value="ESFP">ESFP</option>
          </optgroup>    
        </select>
      </form>

      <div>
        <span>본인 MBTI: {value}</span>
      </div>

    </div>
                


    <button class="w-btn w-btn-green" type="submit" style={{marginTop:20, marginBottom:20}}>
        회원가입
    </button>

    <div>
        <Link to="/AdminSignup2019">
          <span>관리자회원가입</span>
        </Link>
    </div>

            
            
          </Box>
        </Box>

        


        
      </Container>
            


    </>

  );
};
export default Signup