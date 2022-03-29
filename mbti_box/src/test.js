import React, { useEffect, useState } from "react";
import Login from "./login/login.js";
import Logincheck from "./logincheck.js"
import Profile from "./login/Profile.js";

const Test =()=>{

    const [nickName, setNickName] = useState();
    const [visible, setVisible] = useState(false);

    const getProfile = async () => {
        try {
          // Kakao SDK API를 이용해 사용자 정보 획득
          let data = await window.Kakao.API.request({
            url: "/v2/user/me",
          });
          // 사용자 정보 변수에 저장
          
          setNickName(data.properties.nickname);
          console.log(nickName);
          //setVisible(!visible); //true로 적용
          console.log(visible);
            if(!visible){

                console.log("들어옴");
                return (<Logincheck test="1"/>);

            }
            

        } catch (err) {
          console.log(err);
          return false;
        }
      };
      useEffect(() => {
        getProfile();
      }, []);

    return null;
};

export default Test;