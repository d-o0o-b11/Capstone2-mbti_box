import React, { useEffect, useState } from "react";
import { Container, Row, Col} from "react-bootstrap";
import "./ann.css"
import { FormOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import qs from 'qs';
import axios from "axios";


function useFetch(url, id) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  
  
  function fetchUrl() {
        axios.get(`${url}${id}`).then(response => {
          setData(response.data);
          console.log("확인함");
          console.log(response.data);
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


  const query = qs.parse(location.search, {
      ignoreQueryPrefix: true
  });

  console.log(query);

  const [data, loading] = useFetch("/api/announcement/announcement/", query.id);
  
 


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

                <Link to={{
                        pathname:"/write",
                        search:`?id=${query.id}`
                    }}>
                    <button className='btn1'>수정</button>
                </Link>
                
                
                

            </Container>
          </>
        
      )
  }
}
export default Notice;