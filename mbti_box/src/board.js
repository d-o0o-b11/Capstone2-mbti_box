import React from "react"
import "./Step.css"
import { Button, Card, Container, Row, Col, Image, ThemeProvider } from "react-bootstrap";
import img1 from "./images/tt.jpg"


//사용하지 않으니 필요할때 틀사용
const Board = () => {
  
 
  return (
    
    <>
      <div style={{marginTop:20}}>
          <img src={img1}/>
          <h6 style={{marginTop:10}}>
            제목 : ooo
          </h6>
          <h6>
            닉네임 : ooo
          </h6>
      </div>
        {/* <Card style={{ width: '18rem' }}>
            <Card.Img className='cardBox' variant="top" src={postImage} />
                <Card.Body>
                    <Card.Title>
                        <h5>
                        인기게시글
                        </h5>
                    </Card.Title>

                    <Card.Text>
                        <h6>
                      간단한 설명
                        </h6>
                    </Card.Text>
                </Card.Body>
        </Card> */}
    </>

  );
};

export default Board