import React, {Component} from "react"
import Logo from "../logo.js"

class naverlogin extends Component{


    componentDidMount(){
        const naverScript = document.createElement("script");
        naverScript.src= "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
        naverScript.type="text/javascript";
        document.head.appendChild(naverScript);

        naverScript.onload=()=>{
            const naverLogin = new window.naver.LoginWithNaverId({
                clientId: "RZFEKqR2rb9YyhkIJe_5",
                callbackUrl: "http://localhost:3000",
                callbackHandle: true,
                isPopup: false,
                loginButton: {
                    color: "green",
                    type:3,
                    height:50,
                    
                },
            });
            
            naverLogin.init();
            naverLogin.logout();
            naverLogin.getLoginStatus((status)=>{

                if(status){
                    console.log("Naver 로그인 상태",naverLogin.user);
                    const {id, email, gender} = naverLogin.user;

                    if(gender==undefined){
                        alert("성별은 필수 동의입니다. 정보제공을 동의해주세요");
                        naverLogin.reprompt();
                        return;
                    }
                    <Logo gender={gender}/>

                }else{
                    console.log("Naver비 로그인 상태");
                }
            });


        };
    }


    render(){
        return <div id="naverIdLogin"></div>;
    }

}


export default naverlogin;