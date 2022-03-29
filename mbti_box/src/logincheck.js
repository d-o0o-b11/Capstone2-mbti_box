import React, { useEffect, useState } from "react";
import Logo from "./logo.js"
import Profile from "./login/Profile.js";
import Test from "./test"

const Logincheck = (props) => {
    console.log(props.test);
return(

    <>

        {<Test/> ? 
            (<>
                <h6>확인중</h6>
                <button>내정보</button>
                <Logo/>
                <Profile/>
            </>
                ) 
            : (
                <>
                <h6>안녕하세요</h6>
                <Logo/>
                <Profile/>
                </>)}

        

    </>

);

};


export default Logincheck;