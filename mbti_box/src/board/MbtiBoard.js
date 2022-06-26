import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { FormOutlined } from '@ant-design/icons';
import "../stitle.css";
import "./board.css";
import {Container,Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive"
import BoardListItem from './BoardListItem';
import axios from "axios";

import Pagination from "./Pagination";
import { useLocation } from "react-router-dom";
 




  function useFetch2(url) {
    const [data, setData] = useState([]);
    const MBTI = localStorage.getItem("mbti");
    
    function fetchUrl() {
          axios.get(`${url}`).then(response => {
            setData(response.data);
        });

       
    }
    useEffect(() => {
      fetchUrl();
  }, []);
    return data;
  }

 
function MbtiBoard (){
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
      });

    const location = useLocation();
    const mbtiitem = localStorage.getItem("mbtiitem");


    const [limit, setLimit] = useState(9);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit; 

   
    const MBTI = localStorage.getItem("mbti");
    const data = useFetch2(`http://18.208.168.254:8080/api/post/posts/${mbtiitem}`);


    return(
        <>
            {(isMobile)?
            <>
            {/* <Container className="footerup">  */}
            <Container>
                <h4 data-v-42081291 class="c-biz-tit" style={{marginTop:20}}>
                    <span data-v-42081291>{mbtiitem}</span>
                </h4>

                <Row>
                {
                    
                    `${mbtiitem}` === MBTI ?
                    <div style={{marginRight:'0px', marginBottom:'10px'}}>
                        <Link to="/writeMBTI"><FormOutlined style={{ fontSize: '30px', marginRight:'10px'}}></FormOutlined></Link>
                        <span>글작성</span>
                    </div>
                    :
                    <></>
                
                }

                </Row>

                       
                        <section>
                        {/* data.map */}
                            {data.slice(offset,offset+limit).map(
                                (item, index) => (
                                        <>
                                            <BoardListItem
                                                id={item.post_id}
                                                title={item.title}
                                                nickname={item.writer}
                                                createdDate={item.createdDate}
                                                fileName={item.url}
                                                mbti={mbtiitem}
                                                key={item.id}
                                            />
                                        </>
                                )
                            )}
                        </section>
                    
                </Container>

                {/* <div className="footerpage">
                    <Pagination
                        total={data.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}
                    />
                </div>  */}

            </>
            :
            <>
            {/* <Container className="footerup1"> */}
            <Container>
                
                <h4 data-v-42081291 class="c-biz-tit" style={{marginTop:20}}>
                    <span data-v-42081291>{mbtiitem}</span>
                </h4>

                <Row>
                
                {
                    
                        `${mbtiitem}` === MBTI ?
                        <div style={{marginRight:'0px', marginBottom:'10px'}}>
                            <Link to="/writeMBTI"><FormOutlined style={{ fontSize: '30px', marginRight:'10px'}}></FormOutlined></Link>
                            <span>글작성</span>
                        </div>
                        :
                        <></>
                    
                }
                    
                </Row>
                
                <div style={{marginLeft:"8%"}}>
                        

                        <section>
                            {data.slice(offset,offset+limit).map(
                                (item, index) => (
                                        <>
                                            <BoardListItem
                                                id={item.post_id}
                                                title={item.title}
                                                nickname={item.writer}
                                                createdDate={item.createdDate}
                                                fileName={item.url}
                                                count={item.count}
                                                mbti={mbtiitem}
                                                key={item.id}
                                            />
                                        </>
                                )
                            )}
                        </section>

                </div>
                </Container>

                {/* <div className="footerpage">
                    <Pagination
                        total={data.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}
                    />
                </div>     */}
                
                </>
            }
        </>
    );
    
    
}


export default MbtiBoard