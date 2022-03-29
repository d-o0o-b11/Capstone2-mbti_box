import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import App from "../App.js"
import Logo from "../logo.js"
import { useHistory } from "react-router-dom";
const Auth = () => {

    const REST_API_KEY = "289974b9cfbb7024c8f3278242c21edf";
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const CLIENT_SECRET = "2rYlf0MWQZDwNHBN88GPGUvw5szohgSF";

  // calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get("code");

 
  const history = useHistory();

  
  

  const getToken = async () => { 
      

    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });
    try {
      // access token 가져오기
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );
      
      // Kakao Javascript SDK 초기화
      window.Kakao.init(REST_API_KEY);
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      alert("카카오 로그인 성공");
        console.log("로그인체크");
         
      history.replace("/Profile");
      
    } catch (err) {
      console.log(err);
    }

    
  };

  useEffect(() => {
    getToken();
  }, []);

  //  if(count===0){
  //    setcount(1);
  //    return <App check={true}/>;
  //  }

  return null;
};
export default Auth;