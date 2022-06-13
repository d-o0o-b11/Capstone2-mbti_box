import React from "react";
import { Link } from 'react-router-dom';
import './board.css'
import img2 from "../images/blue.png"
import { useMediaQuery } from "react-responsive"
import test1 from "../asset/login.png";


//게시판 개별보이는거
function BoardImgListItem({filename, id}) { //start_date -> date

    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
      });

    console.log("filename:"+filename);

    const testimg = `../asset/${filename}`;
    return (
    <>
    {(isMobile)?
        <>
        {/* 모바일 */} 
        
            
                <img src={testimg} alert="jimin" />
                    

        </>
            :
        <>
        {/* 컴퓨터 */}
        
        </>
    }

    </>
    )
}

export default BoardImgListItem;