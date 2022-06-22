// import * as React from 'react';
import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";


import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import OptionGroupUnstyled from '@mui/base/OptionGroupUnstyled';
import { styled } from '@mui/system';

import Axios from 'axios';
import "./login.css";


import img1 from '../images/sign.png'



const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 320px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 0.75em;
  margin-top: 0.5em;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `,
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 320px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 0.75em;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;
  `,
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;





function CustomSelect(props) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };
  return <SelectUnstyled {...props} components={components} />;
}

CustomSelect.propTypes = {
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Listbox: PropTypes.elementType,
    Popper: PropTypes.func,
    Root: PropTypes.elementType,
  }),
};



const AdminSignup = () => {
  const [value, SetValue] = useState("");  //mbti
  const [Id, SetId] = useState("");  //Id
  const [Pw, SetPw] = useState("");  //pw
  const [Email, SetEmail] = useState("");  //email
  const [Nickname, SetNickname] = useState("");  //nick
  const [Adminpassword, SetAdminpassword] = useState(""); //adminpassword



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

  //관리자비밀번호
  const AdminpasswordHandler =(e)=>{
    e.preventDefault();
    SetAdminpassword(e.target.value);
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
    else if(Adminpassword===""){
      alert("관리자 비밀번호를 입력해주세요");
    }
    else if(Adminpassword!=="001116"){
      alert("관리자 비밀번호가 일치하지 않습니다.")
    }
    else{
          
      Axios({
        method: 'post',
        url: '/api/user/signup',
        data: {
            email: Email,
            password: Pw,
            mbti:value,
            nickname:Nickname,
            username: Id,
        },
      })
      .then((Response)=>{
          alert("환영합니다");
          history.replace("/login");    
      })
      .catch((error)=>{
          alert("회원가입 실패");
          console.log(Id);
          console.log(error);
          
      });

  }
  };



  return (
    
    <>


        {/* sm */}
      <Container component="main" maxWidth="xs"> 
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >


          <img src={img1} style={{width:200}}/>


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
            <div className='inputbox'>
              <input type="password" placeholder="관리자비밀번호" id="adminpassword" value={Adminpassword} onChange={AdminpasswordHandler}></input>
              <label for="nickname">관리자비밀번호</label>
            </div>
          </Container>
            

    <div>
      <CustomSelect value={value} onChange={SetValue}>
        
      <OptionGroupUnstyled label="IN♡♡">
        <StyledOption value="INTJ">INTJ</StyledOption>
        <StyledOption value="INTP">INTP</StyledOption>
        <StyledOption value="INFJ">INFJ</StyledOption>
        <StyledOption value="INFP">INFP</StyledOption>
      </OptionGroupUnstyled>

      <OptionGroupUnstyled label="IS♡♡">
        <StyledOption value="ISTJ">ISTJ</StyledOption>
        <StyledOption value="ISTP">ISTP</StyledOption>
        <StyledOption value="ISFJ">ISFJ</StyledOption>
        <StyledOption value="ISFP">ISFP</StyledOption>
      </OptionGroupUnstyled>

      <OptionGroupUnstyled label="EN♡♡">
        <StyledOption value="ENTJ">ENTJ</StyledOption>
        <StyledOption value="ENTP">ENTP</StyledOption>
        <StyledOption value="ENFJ">ENFJ</StyledOption>
        <StyledOption value="ENFP">ENFP</StyledOption>
      </OptionGroupUnstyled>

      <OptionGroupUnstyled label="ES♡♡">
        <StyledOption value="ESTJ">ESTJ</StyledOption>
        <StyledOption value="ESTP">ESTP</StyledOption>
        <StyledOption value="ESFJ">ESFJ</StyledOption>
        <StyledOption value="ESFP">ESFP</StyledOption>
      </OptionGroupUnstyled>

      </CustomSelect>

      <div>
        <span>본인 MBTI: {value}</span>
      </div>

    </div>
                


    <button class="w-btn w-btn-green" type="submit" style={{marginTop:20, marginBottom:20}}>
        회원가입
    </button>

            
            
          </Box>
        </Box>

        


        
      </Container>
            


    </>

  );
};
export default AdminSignup