import React from "react";
import "./stitle.css";
import {Link} from "react-router-dom";
import "./boardbackmo.css";

import ENFPimg from "./images/ENFP.png"
import ESFPimg from "./images/ESFP.png"
import ENTPimg from "./images/ENTP.png"
import ESTJimg from "./images/ESTJ.png"
import ESFJimg from "./images/ESFJ.png"
import ESTPimg from "./images/ESTP.png"
import ENTJimg from "./images/ENTJ.png"
import ENFJimg from "./images/ENFJ.png"

import ISFPimg from "./images/ISFP.png"
import INFPimg from "./images/INFP.png"
import INTPimg from "./images/INTP.png"
import ISTJimg from "./images/ISTJ.png"
import ISFJimg from "./images/ISFJ.png"
import INFJimg from "./images/INFJ.png"
import INTJimg from "./images/INTJ.png"
import ISTPimg from "./images/ISTP.png"

const mostitle = () => { 



  return (
    <>

{/* 분석형 */}
<div  className="analytic">
      <p className="title">분석형</p>
        <div className="abcc2">
          <div className="hover13 column">
            <div>
              
                <div style={{width:"70%", marginLeft:"14%"}}>
                  <figure>
                    <Link to="/INTJboard" style={{ textDecoration: 'none' }}>
                      <img src={process.env.PUBLIC_URL+INTJimg} className="analytic_imgback1"/>
                    </Link>
                  </figure>
                </div>
              
                <div className="textpo">
                      <p className="stitle">INTJ</p>
                      <p className="explanation">상상력이 풍부하며 철두철미한 계획을 세우는 전략가형</p>
                </div>
            </div>
          </div>
        </div>
        

        <div className="abcc2">
          <div className="hover13 column">
              <div>
                    <div style={{width:"70%", marginLeft:"15%"}}>
                      <figure>
                        <Link to="/INTPboard" style={{ textDecoration: 'none' }}>
                          <img src={process.env.PUBLIC_URL+INTPimg} className="analytic_imgback1"/>
                        </Link>
                      </figure>
                    </div> 

                  <div className="textpo">
                    <p className="stitle">INTP</p>
                    <p className="explanation">끊임없이 새로운 지식에 목말라 하는 혁신가형</p>
                  </div>
              </div>
            </div>
        </div>

        <div className="abcc2">
          <div className="hover13 column">
              <div>
                    <div style={{width:"70%", marginLeft:"15%"}}>
                      <figure>
                        <Link to="/ENTJboard" style={{ textDecoration: 'none' }}>
                          <img src={process.env.PUBLIC_URL+ENTJimg} className="analytic_imgback1"/>
                        </Link>
                      </figure>
                    </div> 
                  
                  <div className="textpo">
                    <p className="stitle">ENTJ</p>
                    <p className="explanation">
                      대담하면서도 상상력이 풍부한 강한 의지의 소유자로 다양한 
                      방법을 모색하거나 여의치 않을 경우 새로운 방안을 창출하는 리더형
                    </p>
                  </div>
              </div>
          </div>
        </div>

        <div className="abcc2">
          <div className="hover13 column">
            <div>
                    <div style={{width:"70%", marginLeft:"15%"}}>
                      <figure>
                        <Link to="/ENTPboard" style={{ textDecoration: 'none' }}>
                          <img src={process.env.PUBLIC_URL+ENTPimg} className="analytic_imgback1"/>
                        </Link>
                      </figure>
                    </div> 

                <div className="textpo">
                  <p className="stitle">ENTP</p>
                  <p className="explanation">지적인 도전을 두려워하지 않는 똑똑한 호기심형</p>
                </div>
            </div>
          </div>
        </div>
        
     
      </div>

     {/* 여기까지 */}
      
      {/* 외교형 */}

      <div className="diplomatic">
      <p className="title">외교형</p>
        <div className="abcc2">
          <div className="hover13 column">
            <div>
                    <div style={{width:"70%", marginLeft:"15%"}}>
                      <figure>
                        <Link to="/INFJboard" style={{ textDecoration: 'none' }}>
                          <img src={process.env.PUBLIC_URL+INFJimg} className="diplomatic_imgback1"/>
                        </Link>
                      </figure>
                    </div> 
                
                <div className="textpo">
                  <p className="stitle">INFJ</p>
                  <p className="explanation">조용하고 신비로우며 샘솟는 영감으로 지칠줄 모르는 이상주의자</p>
                </div>
            </div>
          </div>
        </div>
        

        <div className="abcc2">
          <div className="hover13 column">
            <div>
                    <div style={{width:"70%", marginLeft:"15%"}}>
                      <figure>
                        <Link to="/INFPboard" style={{ textDecoration: 'none' }}>
                          <img src={process.env.PUBLIC_URL+INFPimg} className="diplomatic_imgback1"/>
                        </Link>
                      </figure>
                    </div>   
                <div className="textpo">
                  <p className="stitle">INFP</p>
                  <p className="explanation">상냥한 성격의 이타주의자로 건강하고 밝은 사회 건설에 앞장서는 낭만형</p>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc2">
          <div className="hover13 column">
            <div>
                    <div style={{width:"70%", marginLeft:"15%"}}>
                      <figure>
                        <Link to="/ENFJboard" style={{ textDecoration: 'none' }}>
                          <img src={process.env.PUBLIC_URL+ENFJimg} className="diplomatic_imgback1"/>
                        </Link>
                      </figure>
                    </div> 
                <div className="textpo">
                  <p className="stitle">ENFJ</p>
                  <p className="explanation">넘치는 카리스마와 영향력으로 청중을 압도하는 리더형</p>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc2">
          <div className="hover13 column">
            <div>
                    <div style={{width:"70%", marginLeft:"15%"}}>
                      <figure>
                        <Link to="/ENFPboard" style={{ textDecoration: 'none' }}>
                          <img src={process.env.PUBLIC_URL+ENFPimg} className="diplomatic_imgback1"/>
                        </Link>
                      </figure>
                    </div>  
                <div className="textpo">
                  <p className="stitle">ENFP</p>
                  <p className="explanation">창의적이며 항상 웃을 거리를 찾아다니는 활발한 성격으로 사람들과
                  자유롭게 어울리기를 좋아하는 넘치는 열정의 소유자
                  </p>
                </div>
            </div>
          </div>
        </div>
        
    
      </div>

      
        {/* 관리자형 */}

        <div className="manager">
        <p className="title">관리자형</p>
        <div className="abcc2">
          <div className="hover13 column">
            <div>
                    <div style={{width:"70%", marginLeft:"15%"}}>
                      <figure>
                        <Link to="/ISTJboard" style={{ textDecoration: 'none' }}>
                          <img src={process.env.PUBLIC_URL+ISTJimg} className="manager_imgback1"/>
                        </Link>
                      </figure>
                    </div>  
                <div className="textpo">
                  <p className="stitle">ISTJ</p>
                  <p className="explanation">사실에 근거하여 사고하며 이들의 행동이나 결정 사항에 한 치의 의심을 사지 않는 현실 주의자형</p>
                </div>
            </div>
          </div>
        </div>
        

        <div className="abcc2">
          <div className="hover13 column">
            <div>
                    <div style={{width:"70%", marginLeft:"15%"}}>
                      <figure>
                        <Link to="/ISFJboard" style={{ textDecoration: 'none' }}>
                          <img src={process.env.PUBLIC_URL+ISFJimg} className="manager_imgback1"/>
                        </Link>
                      </figure>
                    </div>  
                <div className="textpo">
                  <p className="stitle">ISFJ</p>
                  <p className="explanation">소중한 이들을 수호하는 데 심혈을 기울이는 헌신적이며 성실한 방어자형</p>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc2">
          <div className="hover13 column">
            <div>
                    <div style={{width:"70%", marginLeft:"15%"}}>
                      <figure>
                        <Link to="/ESTJboard" style={{ textDecoration: 'none' }}>
                          <img src={process.env.PUBLIC_URL+ESTJimg} className="manager_imgback1"/>
                        </Link>
                      </figure>
                    </div>   
                <div className="textpo">
                  <p className="stitle">ESTJ</p>
                  <p className="explanation">사물이나 사람을 관리하는 데 타의 추종을 불허하는 뛰어난 실력을 갖춘 관리자형</p>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc2">
          <div className="hover13 column">
            <div>
                    <div style={{width:"70%", marginLeft:"15%"}}>
                      <figure>
                        <Link to="/ESFJboard" style={{ textDecoration: 'none' }}>
                          <img src={process.env.PUBLIC_URL+ESFJimg} className="manager_imgback1"/>
                        </Link>
                      </figure>
                    </div>   
                <div className="textpo">
                  <p className="stitle">ESFJ</p>
                  <p className="explanation">타인을 향한 세심한 관심과 사교적인 성향으로 사람들 내에서 인기가 많으며, 타인을 돕는데 열성적인 세심형</p>
                </div>
            </div>
          </div>
        </div>

      </div>
      
  
    {/* 탐험가형         */}
    <div className="explorer">
    <p className="title">탐험가형</p>
        <div className="abcc2">
          <div className="hover13 column">
            <div>
                    <div style={{width:"70%", marginLeft:"15%"}}>
                      <figure>
                        <Link to="/ISTPboard" style={{ textDecoration: 'none' }}>
                          <img src={process.env.PUBLIC_URL+ISTPimg} className="explorer_imgback1"/>
                        </Link>
                      </figure>
                    </div>    
                <div className="textpo">
                  <p className="stitle">ISTP</p>
                  <p className="explanation">대담하고 현실적인 성향으로 다양한 도구 사용에 능숙한 탐험형</p>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc2">
          <div className="hover13 column">
            <div>
                    <div style={{width:"70%", marginLeft:"15%"}}>
                      <figure>
                        <Link to="/ISFPboard" style={{ textDecoration: 'none' }}>
                          <img src={process.env.PUBLIC_URL+ISFPimg} className="explorer_imgback1"/>
                        </Link>
                      </figure>
                    </div>   
                <div className="textpo">
                  <p className="stitle">ISFP</p>
                  <p className="explanation">항시 새로운 것을 찾아 시도라거나 도전할 준비가 되어 있는 융통성 있는 성격의 매력 넘치는 예술가형</p>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc2">
          <div className="hover13 column">
            <div>
                    <div style={{width:"70%", marginLeft:"15%"}}>
                      <figure>
                        <Link to="/ESTPboard" style={{ textDecoration: 'none' }}>
                          <img src={process.env.PUBLIC_URL+ESTPimg} className="explorer_imgback1"/>
                        </Link>
                      </figure>
                    </div> 

                <div className="textpo">
                  <p className="stitle">ESTP</p>
                  <p className="explanation">벼랑 끝의 아슬아슬한 삶을 진정으로 즐길 줄 아는 이들로 명석한 두뇌와 에너지, 그리고 뛰어난 직관력을 가지고 있는 유형</p>
                </div>
            </div>
          </div>
        </div>

        <div className="abcc2">
          <div className="hover13 column">
            <div>
                    <div style={{width:"70%", marginLeft:"15%"}}>
                      <figure>
                        <Link to="/ESFPboard" style={{ textDecoration: 'none' }}>
                          <img src={process.env.PUBLIC_URL+ESFPimg} className="explorer_imgback1"/>
                        </Link>
                      </figure>
                    </div> 
                <div className="textpo">
                  <p className="stitle">ESFP</p>
                  <p className="explanation">주위에 있으면 인생이 지루할 새가 없을 정도로 즉흥적이며 열정과 에너지가 넘치는 연예인형</p>
                </div>
            </div>
          </div>
        </div>
      
        </div>


    </>
  );
};

export default mostitle;
