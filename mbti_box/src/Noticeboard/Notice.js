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
          check
          <hr></hr>
          
          <h2>제목</h2>
          {data.title}

          <h4>내용</h4>
          {data.content}

          <h6>업로드 날짜</h6>
          {data.createdAt} 
          </>
        
      )
  }
}
export default Notice;