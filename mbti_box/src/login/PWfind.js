import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Row, Col } from "react-bootstrap";

const PWfind =()=>{

     const IDSubmit = (event) => {
         event.preventDefault();
         const data = new FormData(event.currentTarget);
         console.log({
           email: data.get('email')
         });

       };

      const pwSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          userid: data.get('userid'),
          email: data.get('email'),
        });
      };  


    return(
        <>
      
        
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
                <h3>아이디 찾기</h3>
              </Typography>
              <Box component="form" onSubmit={IDSubmit} noValidate sx={{ mt: 1 }}>
              {/* <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="userid"
                  label="ID"
                  name="userid"
                  autoComplete="current-userid"
                  autoFocus
                /> */}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                  autoComplete="email"
                />
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  아이디 찾기
                </Button>
                
              </Box>
            </Box>
          </Container>    
        

        
          
        </>
    );

}

export default PWfind