import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import OptionGroupUnstyled from '@mui/base/OptionGroupUnstyled';
import { styled } from '@mui/system';
import Axios from 'axios';

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

const Paragraph = styled('p')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  margin: 10px 0;
  color: ${theme.palette.mode === 'dark' ? grey[400] : grey[700]};
  `,
);



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



const Login = () => {
  const [value, setValue] = React.useState("");
  
  const signAxios = () => {
    Axios.get('/user/signup')
    .then((Response)=>{
        console.log(Response.data)
    });
}

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if(data.get('userid')===""){
      alert("아이디를 입력해주세요");
    }
    else if(data.get('password')===""){
      alert("비밀번호를 입력해주세요");
    }
    else if(data.get('email')===""){
      alert("이메일을 입력해주세요");
    }
    else if(data.get('nickname')===""){
      alert("닉네임을 입력해주세요");
    }
    else if(value===""){
      alert("MBTI를 선택해주세요");
    }
    else{
      alert("회원가입 성공");
      signAxios();
    }
    
    console.log({
      userid: data.get('userid'),
      password: data.get('password'),
      email: data.get('email'),
      nickname: data.get('nickname'),
    });
     console.log({value});
    

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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            <h3>회원가입</h3>
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userid"
              label="ID"
              name="userid"
              autoComplete="current-userid"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                  autoComplete="email"
            />
            <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="nickname"
                  label="nickname"
                  name="nickname"
                  autoComplete="nickname"
            />

    <div>
      <CustomSelect value={value} onChange={setValue}>
        
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

      <Paragraph>본인 MBTI: {value}</Paragraph>
    </div>
                


            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              회원가입
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/PWfind">
                  <h6>아이디/비밀번호 찾기</h6>
                </Link>
              </Grid>

              {/* <Grid item>
                <Link href="#">
                  <h6>회원가입</h6>
                </Link>
              </Grid> */}
            </Grid>
          </Box>
        </Box>

        


        
      </Container>
            


    </>

  );
};
export default Login