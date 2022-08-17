import React, { useEffect, useState } from "react";
import { Container, Row, Col} from "react-bootstrap";
import "./ann.css"
import ListItem from './ListItem.js';
import { Link } from 'react-router-dom';
import { FormOutlined } from '@ant-design/icons';
import { useMediaQuery } from "react-responsive";
import Axios from "axios"

 
function useFetch(url) {

  const [data, setData] = useState([]);
  
  function fetchUrl() {
    Axios({
        method: "get",
        url: url,
    })
    .then((response)=>{
        setData(response.data);
    })
    // const response = await fetch(url);
    // const json = await response.json();
    
    // setData(json);
}
  
  useEffect(() => {
      fetchUrl();
  }, []);
  return data;
} 


function List() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)"
  });

  const data = useFetch("/api/post/posts/category/NOTICE");

 
  const ADMINROLE = localStorage.getItem("adminrole");
  
  return (
    <>

    {
      (ADMINROLE==="ROLE_ADMIN")?
        <Link to="/Annwrite"><FormOutlined style={{ fontSize: '30px', right:'25%', position:'absolute'}}></FormOutlined></Link>
      :
      <></>
    }
    
    
      {
        isMobile?
          <Container style={{marginTop:"30px"}}>     
            <table class="blueone tablecenter">
              <tr>
                <th>순번</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </table>
 

            <section className="list-wrapper">
              {data.map(
                    ({post_id, title, createdDate, writer}) => (
                        <ListItem
                            id={post_id}
                            title={title}
                            //content={content}
                            createdDate={createdDate}
                            key={post_id}
                        />
                    )
                )}
            </section>
          </Container>
          :
          <Container style={{marginTop:"30px"}}>     
            <table class="blueone tablecenter">
              <tr>
                <th>순번</th>
                <th>제목</th>
                <th>작성자</th>
                <th>최종수정일</th>
              </tr>
            </table>


            <section className="list-wrapper">
                {data.map(
                    ({post_id, title, createdDate, writer}) => (
                        <ListItem
                            id={post_id}
                            title={title}
                            //content={content}
                            createdDate={createdDate}
                            key={post_id}
                        />
                    )
                )}
            </section>
          </Container>
        }
      </>
  );
}

export default List;