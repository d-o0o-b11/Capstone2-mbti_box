import React from "react"
import Banner from "./banner.js"
import Mobanner from "./mobanner.js"
import "./Step.css"
import "./menu/menu.css"
import "./fonts/fonts.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col} from "react-bootstrap";
import { useMediaQuery } from "react-responsive"

import img1 from "./images/cc3.png"
import img2 from "./images/mo.png"



const MAIN1 = () => {

const isMobile = useMediaQuery({
  query : "(max-width:767px)"
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
              
                <h4 className="divid">
                  <span>MBTI_BOX</span>

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
                  <h1 style={{marginLeft:10, fontSize:20, marginBottom:25}}>MBTI들의 커뮤니케이션 소통공간입니다.</h1>
                  <h1 style={{marginLeft:10, fontSize:20, marginBottom:25}}>다양한 사람들과 다양한 MBTI를 만나보세요!</h1>
                  <h1 style={{marginLeft:10, fontSize:20, marginBottom:25}}>각기다른 성격을 지니고 있는 우리들 </h1>
                  <h1 style={{marginLeft:10, fontSize:20, marginBottom:25}}>한 공간에 모여서 같이 시간을 보내면 새로운 경험을 할 수 있지않을까요?!</h1>
                
                  </>
                }

              


            </Row>
        </Container>

          
        
        {/* 메인 2번째 이미지 */}   
        
        {isMobile? 
          <img src={process.env.PUBLIC_URL+img2} style={{width:"100%",height:"100%"}}/>
          :
          <img src={process.env.PUBLIC_URL+img1} style={{width:"100%",height:"100%"}}/>
        }

        {/* 사이트 소개글 */}
        <Container style={{marginTop:50}}>
          <h4 className="divid2">
              <span>소개</span>
          </h4>

          {isMobile? 
              <div style={{textAlign:"center"}} className="intr2">
                <h5> "MBTI_BOX" 웹/앱 사이트는 대학 졸업작품을 위해 제작되었습니다. </h5>
                <h5> 미흡한 부분이 발견된다면 차차 수정해 나가도록 하겠습니다. </h5>
                <h5> 구현 된 컨텐츠들을 즐겨보시길 바랍니다. </h5>
              </div> 
            :
              <div style={{textAlign:"center"}}>
                <h1 style={{marginLeft:10, fontSize:20, marginBottom:25}}> "MBTI_BOX" 웹/앱 사이트는 대학 졸업작품을 위해 제작되었습니다. </h1>
                <h1 style={{marginLeft:10, fontSize:20, marginBottom:25}}> 미흡한 부분이 발견된다면 차차 수정해 나가도록 하겠습니다. </h1>
                <h1 style={{marginLeft:10, fontSize:20, marginBottom:25}}> 구현 된 컨텐츠들을 즐겨보시길 바랍니다. </h1>
              </div> 
            }




          {/* 개발자 소개 */}

            <h4 className="divid3" style={{marginTop:30}}>
              <span>개발자</span>
            </h4>

            {isMobile? 
              <div style={{marginLeft:30}}>

                <div className="line">
                  <div className="intr">
                    <span style={{marginLeft:10, fontSize:15, marginBottom:25}}>spring으로 봄을 만들자</span>
                  </div> 
                </div>
                <span>Instagram @cloudwiiii</span>

                

                  <div className="line" style={{marginTop:15}}>
                    <div className="intr">
                      <span style={{marginLeft:10, fontSize:15, marginBottom:25}}>이것은 개발자인가 디자이너인가</span>
                    </div> 
                  </div>
                  <span>Instagram @ccha___a</span>

                

                  <div className="line" style={{marginTop:15}}>
                    <div className="intr">
                      <span style={{marginLeft:10, fontSize:15, marginBottom:25}}>유니짜장 유니버스 유니콘 유니버셜 유니티</span>
                    </div> 
                  </div>
                  <span>Instagram @yu_jeong_1219</span>

              </div>
              :
              <div style={{marginLeft:30}}>

              
              <div className="line">
                <div className="intr">
                  {/* <a style={{marginLeft:10}}>백앤드</a> */}
                  <span style={{marginLeft:10, fontSize:20, marginBottom:20}}>spring으로 봄을 만들자</span>
                </div> 
              </div>
              <span>Instagram @cloudwiiii</span>

              
                
                <div className="line" style={{marginTop:15}}>
                  <div className="intr">
                    {/* <a style={{marginLeft:10}}>백앤드</a> */}
                    <span style={{marginLeft:10, fontSize:20, marginBottom:20}}>이것은 개발자인가 디자이너인가</span>
                  </div> 
                </div>
                <span>Instagram @ccha___a</span>

              
                
                <div className="line" style={{marginTop:15}}>
                  <div className="intr">
                    <span style={{marginLeft:10, fontSize:20, marginBottom:20}}>유니짜장 유니버스 유니콘 유니버셜 유니티</span>
                  </div> 
                </div>
                <span>Instagram @yu_jeong_1219</span>

            </div>
            }

        </Container>


    </>
  )
}
export default MAIN1
//CreateList