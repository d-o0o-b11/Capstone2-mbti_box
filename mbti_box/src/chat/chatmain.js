import React, { useEffect, useState } from "react";
import "./chat.css"
import { Container, Row, Col} from "react-bootstrap";
import img5 from "../images/chat.png"
import "./modal.css"
import Modal from "./Modal.js"
import Axios from "axios"

const Chatmain = () => {

    const [modalOpen, SetmodalOpen] = useState(false);

    const openModal = () => {
        SetmodalOpen(true);
    };
    
    //창 닫으면서 axios로 mbti보내기
    const closeModal = () => {
        SetmodalOpen(false); 
    };

    const [mbti, Setmbti] = useState(""); 

  return (
    <>
        <Container>
            <div className="chatting backin">
                <div className="banner">
                    <img src={img5} height="150" />
                </div>
            <Row>
                <Col className="sickbang">
                    <div className="back">
                        <h1 className="test11" src={img5} height="30" width="30">단체 채팅</h1>
                        <div className="in">

                        </div>
                    </div>
                </Col>

                <Col className="sickbang">
                    <div className="back">
                    <h1 className="test11" src={img5} height="30" width="30">개인 채팅 
                        <button onClick={openModal}>click</button>
                        <div className="mbticontent">
                            <Modal open={modalOpen} close={closeModal} header="개인채팅 매칭">
                                <h5>매칭하고싶은 [MBTI]를 선택해주세요!</h5>
                                <div value={mbti} onChange={Setmbti}>
                                    <input id="select" type="radio" name="mbti" value="INTJ"/>
                                    <label for='select'><h6 style={{marginLeft:"5px", marginRight:"7px"}}>INTJ</h6></label>
                                    <input id="select" type="radio" name="mbti" value="INTP"/>
                                    <label for='select'><h6 style={{marginLeft:"5px", marginRight:"7px"}}>INTP</h6></label>
                                    <input id="select" type="radio" name="mbti" value="ENTJ"/>
                                    <label for='select'><h6 style={{marginLeft:"5px", marginRight:"7px"}}>ENTJ</h6></label>
                                    <input id="select" type="radio" name="mbti" value="ENTP"/>
                                    <label for='select'><h6 style={{marginLeft:"5px"}}>ENTP</h6></label>
                                    
                                    <br></br>

                                    <input id="select" type="radio" name="mbti" value="INFJ"/>
                                    <label for='select'><h6 style={{marginLeft:"5px", marginRight:"7px"}}>INFJ</h6></label>
                                    <input id="select" type="radio" name="mbti" value="INFP"/>
                                    <label for='select'><h6 style={{marginLeft:"5px", marginRight:"7px"}}>INFP</h6></label>
                                    <input id="select" type="radio" name="mbti" value="ENFJ"/>
                                    <label for='select'><h6 style={{marginLeft:"5px", marginRight:"7px"}}>ENFJ</h6></label>
                                    <input id="select" type="radio" name="mbti" value="ENFP"/>
                                    <label for='select'><h6 style={{marginLeft:"5px"}}>ENFP</h6></label>

                                    <br></br>

                                    <input id="select" type="radio" name="mbti" value="ISTJ"/>
                                    <label for='select'><h6 style={{marginLeft:"5px", marginRight:"7px"}}>ISTJ</h6></label>
                                    <input id="select" type="radio" name="mbti" value="ISFJ"/>
                                    <label for='select'><h6 style={{marginLeft:"5px", marginRight:"7px"}}>ISFJ</h6></label>
                                    <input id="select" type="radio" name="mbti" value="ESTJ"/>
                                    <label for='select'><h6 style={{marginLeft:"5px", marginRight:"7px"}}>ESTJ</h6></label>
                                    <input id="select" type="radio" name="mbti" value="ESFJ"/>
                                    <label for='select'><h6 style={{marginLeft:"5px"}}>ESFJ</h6></label>

                                    <br></br>

                                    <input id="select" type="radio" name="mbti" value="ISTP"/>
                                    <label for='select'><h6 style={{marginLeft:"5px", marginRight:"7px"}}>ISTP</h6></label>
                                    <input id="select" type="radio" name="mbti" value="ISFP"/>
                                    <label for='select'><h6 style={{marginLeft:"5px", marginRight:"7px"}}>ISFP</h6></label>
                                    <input id="select" type="radio" name="mbti" value="ESTP"/>
                                    <label for='select'><h6 style={{marginLeft:"5px", marginRight:"7px"}}>ESTP</h6></label>
                                    <input id="select" type="radio" name="mbti" value="ESFP"/>
                                    <label for='select'><h6 style={{marginLeft:"5px"}}>ESFP</h6></label>

                                </div>
                                
                            </Modal>
                        </div>  
                    </h1>
                        <div className="in">
                        <h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2><h2>aaa</h2>
                         </div>
                    </div>
                </Col>

            </Row>
            </div>
        </Container>
    </>
    
  );
};
export default Chatmain;