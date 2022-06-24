import React, { useEffect, useState } from "react";
import "./chat.css"
import "./mochat.css"
import { Container, Row, Col} from "react-bootstrap";
import img5 from "../images/chat.png"
import "./modal.css"
import Modal from "./Modal.js"
import ListItemchat from './innerchat/ListItemchat.js';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useHistory } from "react-router-dom";
import Axios from "axios"
import { useMediaQuery } from "react-responsive"

function useFetch(url) {

    const [data, setData] = useState([]);
    
    async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();
        
        setData(json);
    }
    
    useEffect(() => {
        fetchUrl();
    }, []);
    return data;
  }


const Chatmain = () => {

    const [modalOpen, SetmodalOpen] = useState(false);
    const NICKNAME = localStorage.getItem("nickname");
    const TOKEN = localStorage.getItem("token");

    const isMobile = useMediaQuery({
        query : "(max-width:767px)"
      });

    const openModal = () => {
        SetmodalOpen(true);
    };
    
    //창 닫으면서 axios로 mbti보내기
    const closeModal = () => {
        Setroomname("");
        SetmodalOpen(false); 
    };

    const [roomname, Setroomname] = useState("");  //roomname

    const data = useFetch("/chat/rooms"); 

    const history = useHistory();

    //방 이름
    const RoomHandler = (e) => {
        e.preventDefault();
        Setroomname(e.target.value);
    };

    const submitHandler = (e)=>{
        e.preventDefault();

        if(roomname===""){
            alert("방이름을 입력해주세요");
        }
        else{
            Axios({
                method:'post',
                url: `/chat/room?name=${roomname}`,
                headers:{
                    "X-AUTH-TOKEN": TOKEN,
                },
            })
            .then((Response)=>{
                console.log("채팅방이름 잘 전달됨");
                console.log(roomname);
                localStorage.setItem("roomId",Response.data.id);
                window.location.reload();
                Setroomname("");
                SetmodalOpen(false); 
            })
            .catch((error)=>{
                alert("채팅방 생성 실패");
                console.log("채팅방 오류남");
                console.log(`/chat?name=${roomname}`);
                console.log(TOKEN)
                console.log(error);
                

            })
        }
    }

    const enterinput = e =>{
        if(e.key==='Enter'){
            submitHandler(e);
        }
    }


  return (
    <>
    {   (isMobile)?
        <Container>
            <div className="chatting backin">
                <div className="banner">
                    <img src={img5} height="150" />
                </div>

                <Row>
                <Col className="sickbang2">
                    <div className="back2">
                        <h1 className="test11" src={img5} height="30" width="30">단체 채팅<AddBoxIcon onClick={openModal} style={{marginLeft:"70px"}}/><span>방 생성</span></h1>

                        <div className="mbticontent">
                            <Modal open={modalOpen} close={closeModal} header="개인채팅 매칭" submit={submitHandler}>
                                <h5>개설할 방 이름을 적어주세요!</h5>
                                <input 
                                    type="text" 
                                    placeholder="방이름" 
                                    maxlength="14" 
                                    style={{width:"250px"}} 
                                    value={roomname} 
                                    onChange={RoomHandler}
                                    onKeyPress={enterinput}
                                />
                            </Modal>
                        </div>   

                            <div className="in3">
                                <section className="list-wrapper">
                                    {data.map(
                                        (item, index) => (
                                            <ListItemchat
                                                roomName={item.roomName}
                                                roomId={item.roomId}
                                                // creator={item.creator}
                                                // createDate={item.createDate}
                                                key={item.roomName}
                                            />
                                        )
                                    )}
                                </section>
                            </div>
                    </div>
                </Col>

            </Row>

            </div>
        </Container>
        :
        <Container>
            <div className="chatting backin">
                <div className="banner">
                    <img src={img5} height="150" />
                </div>
            <div className="chatcontainer">
                <div className="sickbang">
                    <div className="back">
                        <h1 className="test11" src={img5} height="30" width="30">단체 채팅<AddBoxIcon onClick={openModal} style={{marginLeft:"70px"}}/><span>방 생성</span></h1>

                        <div className="mbticontent">
                            <Modal open={modalOpen} close={closeModal} header="개인채팅 매칭" submit={submitHandler}>
                                <h3>소켓 통신 오류로 인해 채팅 기능은 미완성입니다</h3>
                                <br></br>
                                <h5>개설할 방 이름을 적어주세요!</h5>
                                <input 
                                    type="text" 
                                    placeholder="방이름" 
                                    maxlength="14" 
                                    style={{width:"250px"}} 
                                    value={roomname} 
                                    onChange={RoomHandler}
                                    onKeyPress={enterinput}
                                />
                            </Modal>
                        </div>   

                            <div className="in2">
                                <section className="list-wrapper">
                                    {data.map(
                                        (item, index) => (
                                            <ListItemchat
                                                roomName={item.roomName}
                                                roomId={item.roomId}
                                                // creator={item.creator}
                                                // createDate={item.createDate}
                                                key={item.roomName}
                                            />
                                        )
                                    )}
                                </section>
                            </div>
                    </div>
                </div>

            </div>
            </div>
        </Container>
    }
    </>
    
  );
};
export default Chatmain;