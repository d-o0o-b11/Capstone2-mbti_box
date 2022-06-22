import React, { useEffect, useState } from "react";
import { Container, Row, Col} from "react-bootstrap";
import ComListItem from './comListItem.js';
import Axios from 'axios';
import { Link } from 'react-router-dom';



const ComList=(props)=> {
    const [data, setData] = useState([]);

    useEffect(()=>{

        Axios.get(`/api/comment/${props.id}`).then(response=>{
            setData(response.data);
            console.log(response.data);
        }).catch(error=>{
            console.log("안갔음");
        })

    },[]);
    


    
    return (
      <>
            <Container style={{marginTop:"60px"}}>     

              <section>
                  {data.map(
                      ({ content, nickname, mbti, createdAt, board_id}) => (
                          <ComListItem
                              mbti={mbti}
                              nickname={nickname}
                              content={content}
                              board_id={props.id}
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