import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './board.css'
import { useMediaQuery } from "react-responsive"

 

//게시판 개별보이는거
function BoardListItem({id, title, nickname,  createdDate, fileName, mbti, count}) { //start_date -> date



    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
      });

      const imgbasic = `${fileName}`;
      

    //   console.log(imgbasic=="null");
    return (
    <>
    {(isMobile)?
        <>
        {/* 모바일 */} 
        <Link to={{
            pathname:`/${mbti}`,
            search:`?id=${id}`
        }} style={{ textDecoration: 'none', color: 'black'}}>

                <div className='boardframe1 column1'> 
                     {
                        ((imgbasic=="null")?
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwXfjwuJIi7teNG13soue7Rgc0qofzaMMJcLczgssD2AXBbtjmvavqDriZ0Rk6xQ7k1s&usqp=CAU"/>
                        :
                            <img src={imgbasic}/>
                        )

                    }     
                    

                    <div className="txt_line2" style={{marginTop:"10px"}}>
                        <span style={{fontSize:"15px", color:"#000000", fontStyle:"blod"}}>{title}</span>
                    </div>
                    <span style={{fontSize:"12px", color:"#000000", marginTop:"10px"}}>{nickname}</span>
                    <br></br>
                        <span>조회수: {count}</span>
                        <span style={{fontSize:"12px", color:"#000000"}}>{createdDate.substr(0,10)}</span>
                </div>

        </Link>
        </>
            :
        <>
        {/* 컴퓨터 */}
        <Link to={{
            pathname:`/${mbti}`,
            search:`?id=${id}`
        }} style={{ textDecoration: 'none', color: 'black'}}>
    
                <div className='boardframe column'>          
   
                {
                    ((imgbasic=="null")?
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwXfjwuJIi7teNG13soue7Rgc0qofzaMMJcLczgssD2AXBbtjmvavqDriZ0Rk6xQ7k1s&usqp=CAU"/>
                    :
                        <img src={imgbasic}/>
                    )

                }
                

                    
                    <div className="txt_line" style={{marginTop:"10px"}}>
                        <h6 style={{fontSize:"15px", color:"#000000", fontStyle:"blod"}}>{title}</h6>
                    </div>
                    <br></br>
                    <span style={{fontSize:"12px", color:"#000000"}}>{nickname}</span>

                    <br></br>
                        <span>조회수: {count}</span>
                        <span style={{fontSize:"12px", color:"#000000"}}>{createdDate.substr(0,10)}</span>
                    
                </div>
    
        </Link>
        </>
    }

    </>
    )
}

export default BoardListItem;