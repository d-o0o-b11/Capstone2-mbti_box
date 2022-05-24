import React, { useEffect, useState } from "react";
import { Container, Row, Col} from "react-bootstrap";
import "../Noticeboard/ann.css"
import { FormOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import qs from 'qs';
import axios from "axios";
import { useHistory } from 'react-router-dom';


function useFetch(url, id) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  
  function fetchUrl() {
        axios.get(`${url}${id}`).then(response => {
          setData(response.data);
          console.log("확인함");
          console.log(response.data);
          console.log("글쓴사람닉네임:"+response.data.nickname);

          const Currentnickname = localStorage.getItem("currentnickname");
          localStorage.setItem("currentnickname",response.data.nickname)

          console.log("글쓴사람닉네임변수:"+Currentnickname);
      });
      setLoading(false);
  }
  useEffect(() => {
      if (id) {
          fetchUrl();
          console.log("gd");
      } else {
          setData(null);
          setLoading(false);
          console.log("no");
      }
  }, []);
  return [data, loading];
}



const MbtiNotice = ({ location, history }) => {

  const backhistory = useHistory();
  const MBTI = localStorage.getItem("mbti");
  const NICKNAME = localStorage.getItem("nickname"); //글 쓴 사람

  let Currentnickname = localStorage.getItem("currentnickname");

  const query = qs.parse(location.search, {
      ignoreQueryPrefix: true
  });

  console.log(query.id);
  console.log("현재닉네임2: "+NICKNAME);

  const [data, loading] = useFetch("/api/board/boards-id/", query.id);



  if (loading) {
      return (
          <div>loading</div>
      )
  } else {

      return (
          <>
          <hr></hr>
            <Container>
                <h3 style={{marginTop:"40px"}}>테스트</h3>

                <hr className="hrset"></hr>

                <div style={{margin:"auto 0 auto 40px"}}>
                    <h5>{data.title}</h5>
                    <span className="datesize">[MBTI]</span>
                </div>

                <hr></hr>

                <div style={{margin:"40px 0 40px 40px"}}>
                    <span style={{whiteSpace:"pre"}}>{data.content}</span>
                </div>

                <hr></hr>

                
                <button className="btn2" onClick={() => {backhistory.goBack();}}>목록으로 돌아가기</button>
                
                
                    {   
                        (Currentnickname===NICKNAME && NICKNAME) ?    
                            <Link to={{
                                    pathname:"/writeMBTI",
                                    search:`?id=${query.id}`
                                }}>
                                <button className='btn1'>수정</button>
                            </Link>
                            : <></>
                    }
                
                
                

            </Container>
          </>
        
      )
  }
}
export default MbtiNotice;