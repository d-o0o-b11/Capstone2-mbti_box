import React from "react";
import { Link } from 'react-router-dom';
import './board.css'
import img2 from "../images/blue.png"
import { useMediaQuery } from "react-responsive"


//게시판 개별보이는거
function BoardListItem({id, title, nickname,  createdAt}) { //start_date -> date

    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
      });

    // const deletetoken = () =>{
    //     window.location.reload();
    // }

    return (
    <>
    {(isMobile)?
        <>
        {/* 모바일 */}
        <Link to={{
            pathname:"/INTJ",
            search:`?id=${id}`
        }} style={{ textDecoration: 'none', color: 'black'}}>

                <div className='boardframe1 column1'>          
                    <img src={img2} />
                    <span style={{fontSize:"15px", color:"#000000", fontStyle:"blod"}}>{title}</span>
                    <br></br>
                    <span style={{fontSize:"12px", color:"#000000"}}>{nickname}</span>
                    <span style={{fontSize:"12px", color:"#000000"}}>{createdAt}</span>
                </div>

        </Link>
        </>
            :
        <>
        {/* 컴퓨터 */}
        <Link to={{
            pathname:"/INTJ",
            search:`?id=${id}`
        }} style={{ textDecoration: 'none', color: 'black'}}>
    
                <div className='boardframe column'>          
                    <img src={img2} />
                    <span style={{fontSize:"15px", color:"#000000", fontStyle:"blod"}}>{title}</span>
                    <br></br>
                    <span style={{fontSize:"12px", color:"#000000"}}>{nickname}</span>
                    {/* <span style={{fontSize:"12px", color:"#000000"}}>{createdAt}</span> */}
                </div>
    
        </Link>
        </>
    }

    </>
    )
}

export default BoardListItem;