import React, { useEffect, useState } from "react";
import { Container, Row, Col} from "react-bootstrap";
import ComListItem from './comListItem.js';
import Axios from 'axios';
import { Link } from 'react-router-dom';



// function useFetch(url) {

//     const [data, setData] = useState([]);
    
//     async function fetchUrl() {
//         const response = await fetch(url);
//         const json = await response.json();
        
//         setData(json);
//         console.log("댓글데이터확인:"+data);
//     }
    
//     useEffect(() => {
//         fetchUrl();
//     }, []);
//     return data;
//   }

const ComList=(props)=> {
    const [data, setData] = useState([]);

    useEffect(()=>{

        Axios.get(`/api/comment/get/${props.id}/comment`).then(response=>{
            setData(response.data);
            console.log(response.data);
        }).catch(error=>{
            console.log("안갔음");
        })

    },[]);
    

  
    // const data = useFetch(`/api/comment/get/1/comment`);
    
    return (
      <>
            <Container style={{marginTop:"60px"}}>     

              <section>
                  {data.map(
                      ({ content, nickname, mbti, createdAt}) => (
                          <ComListItem
                              mbti={mbti}
                              nickname={nickname}
                              content={content}
                              //createdAt={createdAt}
                                createdAt={createdAt.substr(0,10)}
                              key={nickname}
                          />
                      )
                  )}
              </section>
            </Container>
            
        </>
    );
  }
  
  export default ComList;