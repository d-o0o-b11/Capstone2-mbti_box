import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ComListItem({ content, nickname, mbti, createdAt}) { //start_date -> date

 
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