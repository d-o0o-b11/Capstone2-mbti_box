import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { FormOutlined } from '@ant-design/icons';
import img2 from "../images/blue.png"
import {HeartOutlined, HeartFilled} from '@ant-design/icons';
import "../stitle.css";
import "./board.css";
import {Container,Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive"
import BoardListItem from './BoardListItem';

import Pagination from "./Pagination";
 

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


function INTJ (){
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
      });

    const [limit, setLimit] = useState(9);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

   
    const MBTI = localStorage.getItem("mbti");
    const data = useFetch("/api/board/boards-mbti/INTJ");
  

    return(
        <>
            {(isMobile)?
            <>
            <Container> 
                <h4 data-v-42081291 class="c-biz-tit" style={{marginTop:20}}>
                    <span data-v-42081291>INTJ</span>
                </h4>

                <Row>
                { 
                    {
                        INTJ :
                        <div style={{marginRight:'0px', marginBottom:'10px'}}>
                            <Link to="/writeMBTI"><FormOutlined style={{ fontSize: '30px', marginLeft:'10px'}}></FormOutlined></Link>
                            <span>글작성</span>
                        </div>
                    }[MBTI]
                }
                    
                </Row>
                      
                        <section>
                        {/* data.map */}
                            {data.slice(offset,offset+limit).map(
                                ({id, title, nickname, createdAt}) => (
                                    <BoardListItem
                                        id={id}
                                        title={title}
                                        nickname={nickname}
                                        createdAt={createdAt.substr(0,10)}
                                        key={id}
                                    />
                                )
                            )}
                        </section>
                    
                </Container>

            </>
            :
            <Container>
                
                <h4 data-v-42081291 class="c-biz-tit" style={{marginTop:20}}>
                    <span data-v-42081291>INTJ</span>
                </h4>

                <Row>
                {
                    {
                        INTJ :
                        <div style={{marginRight:'0px', marginBottom:'10px'}}>
                            <Link to="/writeMBTI"><FormOutlined style={{ fontSize: '30px', marginRight:'10px'}}></FormOutlined></Link>
                            <span>글작성</span>
                        </div>
                    }[MBTI]
                }
                    
                </Row>
                
                <div style={{marginLeft:"8%"}}>
                        <section>
                            {data.map(
                                ({id, title, nickname, createdAt}) => (
                                    <BoardListItem
                                        id={id}
                                        title={title}
                                        nickname={nickname}
                                        createdAt={createdAt.substr(0,10)}
                                        key={id}
                                    />
                                )
                            )}
                        </section>
                </div>

                <div className="footerpage">
                    <Pagination
                        total={data.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}
                    />
                </div>    
                
                </Container>
            }
        </>
    );
    
    
}


export default INTJ