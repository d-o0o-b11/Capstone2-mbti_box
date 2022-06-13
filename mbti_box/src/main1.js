import React from "react"
import Banner from "./banner.js"
import Mobanner from "./mobanner.js"
import Board from "./board.js" 
import "./Step.css"
import "./menu.css"
import "./fonts.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col} from "react-bootstrap";
import { useMediaQuery } from "react-responsive"

import img1 from "./images/cc3.png"
import img2 from "./images/mo.png"



const MAIN1 = () => {

const isMobile = useMediaQuery({
  query : "(max-width:767px)"
});

const isTablet = useMediaQuery({
  query : "(max-width:1100px)"
});

  return (
    <>

      {/* 배너 이미지 */}
            {isMobile? 
              <Row>
                <Mobanner/> 
              </Row>
              :
              <Row>
                <Banner></Banner>
               
              </Row>
              }
             
           
      {/* 인기게시글 */}     

      <Container style={{marginBottom:60}}>
            <Row style={{ marginTop: 50}}> 
              
                <h4 data-v-42081291 className="divid">
                  <span data-v-42081291>MBTI_BOX</span>

                </h4>
                {isMobile? 
                <>
                  <h6>MBTI들의 커뮤니케이션 소통공간입니다.</h6>
                  <h6>다양한 사람들과 다양한 MBTI를 만나보세요!</h6>
                  <h6>각기다른 성격을 지니고 있는 우리들 </h6>
                  <h6>한 공간에 모여서 같이 시간을 보내면 새로운 경험을 할 수 있지않을까요?!</h6>
                </>
                  :
                  <>  
                  <h1>MBTI들의 커뮤니케이션 소통공간입니다.</h1>
                  <h1>다양한 사람들과 다양한 MBTI를 만나보세요!</h1>
                  <h1>각기다른 성격을 지니고 있는 우리들 </h1>
                  <h1>한 공간에 모여서 같이 시간을 보내면 새로운 경험을 할 수 있지않을까요?!</h1>
                
                  </>
                }

              
                {/* {isMobile? 
                <>
                <Row style={{margin:"0 auto"}}>
                  <Col>
                    <Board></Board>
                  </Col>
                  <Col>
                    <Board></Board>
                  </Col>
                  </Row>
                  <Row style={{margin:"0 auto"}}>
                  <Col>
                    <Board></Board>
                  </Col>
                  <Col>
                    <Board></Board>
                  </Col>
                  </Row>
                </>
              : 
                <>
                  <Col>
                  <Board></Board>
                </Col>
                <Col>
                  <Board></Board>
                </Col>
                <Col>
                  <Board></Board>
                </Col>
                <Col>
                  <Board></Board>
                </Col>  
                </>
              } */}

            </Row>
        </Container>

          
        
        {/* 메인 2번째 이미지 */}   
        
        {isMobile? 
          <img src={img2} style={{width:"100%",height:"100%"}}/>
          :
          <img src={img1} style={{width:"100%",height:"100%"}}/>
        }

        {/* 사이트 소개글 */}
        <Container style={{marginTop:50}}>
          <h4 data-v-42081291 className="divid2">
              <span data-v-42081291>소개</span>
          </h4>

          {isMobile? 
              <div style={{textAlign:"center"}}>
                <h6> "MBTI_BOX" 웹/앱 사이트는 대학 졸업작품을 위해 제작되었습니다. </h6>
                <h6> 미흡한 부분이 발견된다면 차차 수정해 나가도록 하겠습니다. </h6>
                <h6> 구현 된 컨텐츠들을 즐겨보시길 바랍니다. </h6>
              </div> 
            :
              <div style={{textAlign:"center"}}>
                <h5> "MBTI_BOX" 웹/앱 사이트는 대학 졸업작품을 위해 제작되었습니다. </h5>
                <h5> 미흡한 부분이 발견된다면 차차 수정해 나가도록 하겠습니다. </h5>
                <h5> 구현 된 컨텐츠들을 즐겨보시길 바랍니다. </h5>
              </div> 
            }




          {/* 개발자 소개 */}

            <h4 data-v-42081291 className="divid3" style={{marginTop:30}}>
              <span data-v-42081291>개발자</span>
            </h4>

            {isMobile? 
              <div style={{marginLeft:30}}>

                <div className="line">
                  <div className="intr">
                    {/* <a style={{marginLeft:10}}>백앤드</a> */}
                    <span style={{marginLeft:10, fontSize:15, marginBottom:25}}>spring으로 봄을 만들자</span>
                  </div> 
                </div>

                

                  <div className="line" style={{marginTop:15}}>
                    <div className="intr">
                      {/* <a style={{marginLeft:10}}>백앤드</a> */}
                      {/* 편하다 편하다 편하다 UI에 빠져든다 얍 */}
                      <span style={{marginLeft:10, fontSize:15, marginBottom:25}}>이것은 개발자인가 디자이너인가</span>
                    </div> 
                  </div>

                

                  <div className="line" style={{marginTop:15}}>
                    <div className="intr">
                      <span style={{marginLeft:10, fontSize:15, marginBottom:25}}>유니짜장 유니버스 유니콘 유니버셜 유니티</span>
                    </div> 
                  </div>

              </div>
              :
              <div style={{marginLeft:30}}>

              <div className="line">
                <div className="intr">
                  {/* <a style={{marginLeft:10}}>백앤드</a> */}
                  <span style={{marginLeft:10, fontSize:20, marginBottom:20}}>spring으로 봄을 만들자</span>
                </div> 
              </div>

              

                <div className="line" style={{marginTop:15}}>
                  <div className="intr">
                    {/* <a style={{marginLeft:10}}>백앤드</a> */}
                    <span style={{marginLeft:10, fontSize:20, marginBottom:20}}>이것은 개발자인가 디자이너인가</span>
                  </div> 
                </div>

              

                <div className="line" style={{marginTop:15}}>
                  <div className="intr">
                    <span style={{marginLeft:10, fontSize:20, marginBottom:20}}>유니짜장 유니버스 유니콘 유니버셜 유니티</span>
                  </div> 
                </div>

            </div>
            }

        </Container>


    </>
  )
}
export default MAIN1
//CreateList