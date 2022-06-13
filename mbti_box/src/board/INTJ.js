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
import BoardImgListItem from './BoarImgListItem.js';
import axios from "axios";

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


  function useFetch2(url, id) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    function fetchUrl() {
          axios.get(`${url}`).then(response => {
            setData(response.data);
            console.log("확인함INTJ");
            console.log(response.data);
        });
        setLoading(false);
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
    const imgdata = useFetch2(`/api/get/${data.id}/filename`,`${data.id}`);
  

    return(
        <>
            {(isMobile)?
            <>
            <Container className="footerup"> 
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
                            {/* imgdata.map */}
                            {imgdata.slice(offset,offset+limit).map(
                                ({filename}) => (
                                        <BoardImgListItem
                                            filename={filename}
                                            key={filename}
                                        />
                                )
                            )}
                        </section>
                       
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

                <div className="footerpage">
                    <Pagination
                        total={data.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}
                    />
                </div> 

            </>
            :
            <Container className="footerup">
                
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