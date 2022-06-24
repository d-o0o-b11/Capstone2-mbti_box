import {React} from "react";
import { Container, Row, Col } from "react-bootstrap";
import gameimg from"../images/gamebackground.png";
import gameimg1 from"../images/gameimg1.png";
import gameplay from"../images/playbutton.png";
import char1 from"../images/forb.png";
import char2 from"../images/nero.png";
import char3 from"../images/pingki.png";

import "./game.css"


const Game =()=>{

    const pagemove = () =>{
        window.open("https://hwangyu-jeong.itch.io/wildcat");
    }

    return(
        <>  

            <img src={process.env.PUBLIC_URL+gameimg1} style={{width:"100%"}}/>

            <Container>
                <div style={{marginTop:"50px"}}>
                    <img src={process.env.PUBLIC_URL+char1}/>
                </div>
                <div style={{marginTop:"50px"}}>
                    <img src={process.env.PUBLIC_URL+char2}/>
                </div>
                <div style={{marginTop:"50px"}}>
                    <img src={process.env.PUBLIC_URL+char3}/>
                </div>
            </Container>

            <div style={{marginTop:"50px", marginBottom:"30px"}} className="a">
                <img src={process.env.PUBLIC_URL+gameplay} style={{width:"35%"}} className="imgcenter" onClick={pagemove}/>
            </div>
        
            
        </>


    )
}

export default Game;