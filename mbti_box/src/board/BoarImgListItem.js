import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './board.css'
import { useMediaQuery } from "react-responsive"



//게시판 개별보이는거
function BoardImgListItem({id, filename}) { //start_date -> date

    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
      });

     

    return (
    <>
    {(isMobile)?
        <>
        {/* 모바일 */} 
        
            <img src={require(`../asset/${filename}`)}/>
            
        

        </>
            :
        <>
        {/* 컴퓨터 */}
        
            <img src={require(`../asset/${filename}`)}/>
        </>
    }

    </>
    )
}

export default BoardImgListItem;