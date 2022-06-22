import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

function ComListItem({ content, nickname, mbti, createdAt, board_id}) { //start_date -> date

    const NICKNAME = localStorage.getItem("nickname");



 let Currentnickname = localStorage.getItem("currentnickname"); //글쓴 사람
    return (
    <>

            <div>
                    <span>{nickname}</span>
                    <span className='mbticolor'>[{mbti}]</span>


                    <br></br>
                    <p style={{float:"left", marginLeft:"10px"}}>
                        {content}
                    </p>    
                    <p style={{float:"right"}} className="commentdate">
                        {createdAt}
                    </p>
                <br style={{clear:"both"}}></br>
            <hr></hr>
            </div>

    </>
    )
}

export default ComListItem;