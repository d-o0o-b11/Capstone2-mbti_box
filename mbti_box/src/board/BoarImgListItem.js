import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './board.css'
import { useMediaQuery } from "react-responsive"



//게시판 개별보이는거
function BoardImgListItem({fileName}) { //start_date -> date

    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
      });

      const name = `${fileName}`;
      const imgbasic = "https://mbtibox-storage.s3.ap-northeast-2.amazonaws.com/"+name;  
      
      console.log(imgbasic);
    return (
    <>
    {(isMobile)?
        <>
        {/* 모바일 */} 
        
            <img src={imgbasic}/>
            
        

        </>
            :
        <>
        {/* 컴퓨터 */}
        <div style={{width:"500px", margin:"0 auto"}}>
            <img src={imgbasic}/>
            </div>    
        </>
    }

    </>
    )
}

export default BoardImgListItem;