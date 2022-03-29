import React, { useEffect, useState } from "react";
import Logo from "../logo.js"
import Logincheck from "../logincheck.js"
import Test from "../test"
import "../Step.css"

const Profile = () => {
  const [user_id, setUserId] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();
  const [gender, setgender] = useState();
  const [profileEmail, setProfileEmail] = useState();
  const [visible, setVisible] = useState(false);

  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.profile_image);
      setProfileEmail(data.properties.kaccount_email);
      setgender(data.properties.gender);
      

      setVisible(!visible);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);



  return (
    
    <div>
      <Test/>
      <div className="login">
        <h6>{nickName}</h6>
      </div>
      {/*
      {visible && <Logincheck check="1" disabled="1"/>}
      <Logo name={nickName} check="1"/>
      <App name={nickName} check={true}/>
      <Logo name={nickName}/>
      <h2>{gender}</h2>
      <h2>{profileEmail}</h2>
      <h2>{user_id}</h2>
      <h2>{nickName}</h2>
      <img src={profileImage}></img>
      */}

    </div>
  );
};
export default Profile;