import React from "react";
import { Link } from 'react-router-dom';
import './board.css'



//게시판 개별보이는거
function BoardListItem({title, nickname,  createdAt}) { //start_date -> date


    return (
    <>

        {/* 모바일 */}
        <Link to={{
            pathname:"/INTJ",
            search:`?id=${id}`
        }} style={{ textDecoration: 'none', color: 'black'}}>


            <div className=" column1">
                                        
                <img src={img2} />
                <span style={{fontSize:"15px", color:"#000000", fontStyle:"blod"}}>{title}</span>
                <br></br>
                <span style={{fontSize:"12px", color:"#000000"}}>{nickname}</span>
                <span style={{fontSize:"12px", color:"#000000"}}>{createdAt}</span>
            
            </div>


        </Link>

    </>
    )
}

export default BoardListItem;