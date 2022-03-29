import React from "react"
import {Link} from "react-router-dom";


const INTJ=()=>{


    return(
        <>
        <h2>INTJ게시판입니다</h2>
        <button> <Link to="/writeINTJ">게시글작성</Link></button>
        </>
    );
}

export default INTJ