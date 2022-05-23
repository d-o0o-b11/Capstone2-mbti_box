import React, { useEffect, useState } from "react";
import { Container, Row, Col} from "react-bootstrap";
import "./ann.css"
import ListItem from './ListItem.js';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { FormOutlined } from '@ant-design/icons';

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


function List() {

  const data = useFetch("/api/announcement/announcements");
  
  return (
    <>
      <Link to="/Annwrite"><FormOutlined style={{ fontSize: '30px', right:'25%', position:'absolute'}}></FormOutlined></Link>


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
                  ({id, title, content, createdAt}) => (
                      <ListItem
                          id={id}
                          title={title}
                          //content={content}
                          createdAt={createdAt.substr(0,10)}
                          key={id}
                      />
                  )
              )}
          </section>
        </Container>
      </>
  );
}

export default List;