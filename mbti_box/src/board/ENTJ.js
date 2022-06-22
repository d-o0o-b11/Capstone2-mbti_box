import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { FormOutlined } from '@ant-design/icons';
import "../stitle.css";
import "./board.css";
import {Container,Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive"
import BoardListItem2 from './BoardListItem2';
import axios from "axios";

import Pagination from "./Pagination";
 


  function useFetch2(url) {
    const [data, setData] = useState([]);
    
    
    function fetchUrl() {
          axios.get(`${url}`).then(response => {
            setData(response.data);
            console.log("확인함ENTJ");
            console.log(response.data);
            
        });
    }
    useEffect(() => {
      fetchUrl();
  }, []);
    return data;
  }
 

function ENTJ (){
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
      });

    const [limit, setLimit] = useState(9);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit; 

   
    const MBTI = localStorage.getItem("mbti");
    const data = useFetch2("/api/boards/ENTJ");

    console.log(data)

    return(
        <>
            {(isMobile)?
            <>
            <Container className="footerup"> 
                <h4 data-v-42081291 class="c-biz-tit" style={{marginTop:20}}>
                    <span data-v-42081291>ENTJ</span>
                </h4>

                <Row>
                { 
                    {
                        ENTJ :
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
                                (item, index) => (
                                        <>
                                            <BoardListItem2
                                                id={item.id}
                                                title={item.title}
                                                nickname={item.nickname}
                                                createdTime={item.createdTime}
                                                fileName={item.fileName}
                                                key={item.id}
                                            />
                                        </>
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
            <>
            <Container className="footerup">
                
                <h4 data-v-42081291 class="c-biz-tit" style={{marginTop:20}}>
                    <span data-v-42081291>ENTJ</span>
                </h4>

                <Row>
                {
                    {
                        ENTJ :
                        <div style={{marginRight:'0px', marginBottom:'10px'}}>
                            <Link to="/writeMBTI"><FormOutlined style={{ fontSize: '30px', marginRight:'10px'}}></FormOutlined></Link>
                            <span>글작성</span>
                        </div>
                    }[MBTI]
                }
                    
                </Row>
                
                
                        <section>
                            {/* data.map */}
                            {data.slice(offset,offset+limit).map(
                                (item, index) => (
                                        <>
                                            <BoardListItem2
                                                id={item.id}
                                                title={item.title}
                                                nickname={item.nickname}
                                                createdTime={item.createdTime}
                                                fileName={item.fileName}
                                                key={item.id}
                                            />
                                        </>
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
            }
        </>
    );
    
    
}


export default ENTJ