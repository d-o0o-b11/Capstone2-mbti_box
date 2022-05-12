import React from "react"
import {Link} from "react-router-dom";
import { FormOutlined } from '@ant-design/icons';
import img2 from "../images/blue.png"
import {HeartOutlined, HeartFilled} from '@ant-design/icons';
import "../stitle.css";
import "./board.css";
import {Container,Row, Col } from "react-bootstrap";

class INTJ extends React.Component{

    state = {
        isChecked: false,		//체크가 되었는지 확인하는 state
        notice: ' ',			//아래 하단의 좋아요 1회가 표현하기 위한 state
    };

    onClick = () => {				//버튼을 누를때마다
        this.state.isChecked ?		//isChecked가 True면(하트를 빨간색에서 검은색으로)
        this.setState({
            isChecked: false,		//isChecked를 false로 초기화
            notice: '',				//알림은 안뜨게 만듬
        })
        :
        this.setState({				//isChecked가 false면(하트를 검은색에서 빨간색으로
            isChecked: true,		//isChecked를 true로 초기화
            notice: '좋아요 1회',	
        });
    }

    render(){
    return(
        <>
        {/* <Row>
            <Col xs={10}>
                <h2>INTJ게시판</h2>
            </Col>

            <Col xs={2}>
                <span>글작성</span>
                <Link to="/writeINTJ"><FormOutlined style={{ fontSize: '30px', marginLeft:'10px'}}></FormOutlined></Link>
            </Col>
        </Row> */}
                
                <Container>
                
                <h4 data-v-42081291 class="c-biz-tit" style={{marginTop:20}}>
                    <span data-v-42081291>INTJ</span>
                </h4>

                <Row>

                        <div style={{marginRight:'0px', marginBottom:'10px'}}>
                            <Link to="/writeINTJ"><FormOutlined style={{ fontSize: '30px', marginRight:'10px'}}></FormOutlined></Link>
                            <span>글작성</span>
                        </div>
                </Row>
                
                    {/* <div className="icons-list">
                        {this.state.isChecked ? 															//삼항연산자이다 isChecked가 True면 
                        <HeartFilled style={{ color: 'red', fontSize: '30px'}} onClick={this.onClick}/> :	//꽉차있는 하트를 return
                        <HeartOutlined style={{ fontSize: '30px'}} onClick={this.onClick}/>}				
                        <span>{this.state.notice}</span>
                    </div> */}
                

                <Row>
                    <Col>
                        <div className=" column">
                            
                                <img src={img2} />
                                <span style={{fontSize:"20px", color:"#000000", fontStyle:"blod"}}>이거 제목임</span>
                                <br></br>
                                <span style={{fontSize:"14px", color:"#000000"}}>작성자</span>

                        </div>

                        <div className="icons-list">
                                    {this.state.isChecked ? 															//삼항연산자이다 isChecked가 True면 
                                    <HeartFilled style={{ color: 'red', fontSize: '30px'}} onClick={this.onClick}/> :	//꽉차있는 하트를 return
                                    <HeartOutlined style={{ fontSize: '30px'}} onClick={this.onClick}/>}				
                                    <span>{this.state.notice}</span>
                                </div>
                        
                    </Col>


                    <Col>
                        <div className=" column">
                            <div>
                                <img src={img2} />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className=" column">
                            <div>
                                <img src={img2} />
                            </div>
                        </div>
                    </Col>
                    

                </Row>
                </Container>
        
        </>
    );
    }
}

export default INTJ