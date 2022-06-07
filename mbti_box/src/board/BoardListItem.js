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
                    <div className="txt_line2" style={{marginTop:"10px"}}>
                        <span style={{fontSize:"15px", color:"#000000", fontStyle:"blod"}}>{title}</span>
                    </div>
                    <span style={{fontSize:"12px", color:"#000000", marginTop:"10px"}}>{nickname}</span>
                    {/* <span style={{fontSize:"12px", color:"#000000"}}>{createdAt}</span> */}
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
                    <div className="txt_line" style={{marginTop:"10px"}}>
                        <h6 style={{fontSize:"15px", color:"#000000", fontStyle:"blod"}}>{title}</h6>
                    </div>
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