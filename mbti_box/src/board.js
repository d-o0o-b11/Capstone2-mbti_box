import React from "react"
import "./Step.css"
import { Button, Card, Container, Row, Col, Image, ThemeProvider } from "react-bootstrap";

const Image0 = 'https://media.istockphoto.com/photos/growth-of-food-sales-or-growth-of-market-basket-or-consumer-price-picture-id1329491626?b=1&k=20&m=1329491626&s=170667a&w=0&h=3jSbXJTJaarZscy4Q0Un9Hw4r22gC68KI2dJTX8OneU='
const mbtiLogo = 'https://media.istockphoto.com/photos/word-on-wood-cubes-on-green-background-picture-id1339806856?b=1&k=20&m=1339806856&s=170667a&w=0&h=sb6WjZfri8NOTFk8UyD0Dzs7xrF-DHqCcw_4JBsNaA4='
const postImage = 'https://media.istockphoto.com/photos/friends-red-cat-and-corgi-dog-walking-in-a-summer-meadow-under-the-picture-id1324099927?b=1&k=20&m=1324099927&s=170667a&w=0&h=_jRsZpMNYr--izDfsMtCB7MV97R-yMphyDTjcav85xc='
const postImage2 = 'https://media.istockphoto.com/photos/funny-friends-cute-cat-and-corgi-dog-are-lying-on-a-white-bed-picture-id1347494018?b=1&k=20&m=1347494018&s=170667a&w=0&h=nYHDAKQ1IJYqW10KHy1wMjYbLmVHPqeRkf9rQ4hnMVI='



//사용하지 않으니 필요할때 틀사용
const Board = () => {
  
 
  return (
    
    <>
        <Card style={{ width: '18rem' }}>
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
        </Card>
    </>

  );
};

export default Board