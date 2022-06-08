import React, { useEffect, useState } from "react";
import { Container, Row, Col} from "react-bootstrap";
import "./ann.css"
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
          //여기서 글쓴 사람 닉네임 받아와야함 
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



const Notice = ({ location, history }) => {

    const backhistory = useHistory();
    const NICKNAME = localStorage.getItem("nickname"); //로그인된 사람

    let Currentnickname = localStorage.getItem("currentnickname"); //글쓴 사람

    const ADMINROLE = localStorage.getItem("adminrole");
    
  const query = qs.parse(location.search, {
      ignoreQueryPrefix: true
  });

  console.log(query);

  const [data, loading] = useFetch("/api/announcement/announcement/", query.id);
  
  const removeView=(e)=> {
    if(window.confirm('해당 게시물을 삭제하시겠습니까?')) {
      
        axios(`api/announcement/delete/${query.id}`, {
            method : 'delete', 
            data : {
                id : query.id
                }
        })

        alert('게시물이 삭제되었습니다.')
        return backhistory.replace("/Annview");

    }
  }

  console.log("글쓴사람:"+Currentnickname);
  console.log("닉네임:"+NICKNAME);



  if (loading) {
      return (
          <div>loading</div>
      )
  } else {

      return (
          <>
          <hr></hr> 
            <Container>
                <h3 style={{marginTop:"40px"}}>공지사항</h3>

                <hr className="hrset"></hr>

                <div style={{margin:"auto 0 auto 40px"}}>
                    <h5>{data.title}</h5>
                    <span className="datesize">[공지]</span>
                </div>

                <hr></hr>

                <div style={{margin:"40px 0 40px 40px"}}>
                    <span style={{whiteSpace:"pre"}}>{data.content}</span>
                </div>

                <hr></hr>

                <Link to="/Annview">
                    <button className="btn2">목록으로 돌아가기</button>
                </Link>


                
                {               //조건 걸기
                        (ADMINROLE==="ADMIN") ?    
                            <>
                                <button className='btn1' onClick={()=>removeView()}>삭제</button>
                            </>

                            : <></>
                }
                
            </Container>
          </>
        
      )
  }
}
export default Notice;