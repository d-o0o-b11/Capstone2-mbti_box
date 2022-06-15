import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './board.css'
import img2 from "../images/blue.png"
import { useMediaQuery } from "react-responsive"
import BoardImgListItem from './BoarImgListItem.js';
import axios from "axios";
import Boardmapmain from './Boardmapmain';



//게시판 개별보이는거
function BoardListItem({id, title, nickname,  createdAt}) { //start_date -> date


    const [data2, setData2] = useState("");
    console.log(nickname)
    const filecount = localStorage.getItem("filelength");

    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
      });

    return (
    <>
    {(isMobile)?
        <>
        {/* 모바일 */} 
        <Link to={{
            pathname:"/INTP",
            search:`?id=${id}`
        }} style={{ textDecoration: 'none', color: 'black'}}>

                <div className='boardframe1 column1'> 
                        { (filecount===0)?(
                                <img src="http://www.billking.co.kr/index/skin/board/basic_support/img/noimage.gif"/>
                            )
                            :
                            (
                                <Boardmapmain
                                id={id}
                                key={id}
                                />
                            )  
                        }

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
            pathname:"/INTP",
            search:`?id=${id}`
        }} style={{ textDecoration: 'none', color: 'black'}}>
    
                <div className='boardframe column'>          
                    
                        { (filecount===0)?(
                                <img src="http://www.billking.co.kr/index/skin/board/basic_support/img/noimage.gif"/>
                                
                            )
                            :
                            (
                                <Boardmapmain
                                id={id}
                                key={id}
                                />
                            )  
                        }

                    
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