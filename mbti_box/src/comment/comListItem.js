import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

function ComListItem({ content, nickname, mbti, createdAt, board_id}) { //start_date -> date

    const NICKNAME = localStorage.getItem("nickname");

    // function useFetch(url) {
    //     const [data, Setdata] = useState({});
    //     const [loading, setLoading] = useState(true);
        
    //     function fetchUrl() {
    //           axios.get(`${url}`).then(response => {
    //             Setdata(response.data);

    //             const Currentnickname = localStorage.getItem("currentnickname");
    //             localStorage.setItem("currentnickname",response.data.nickname)
      
    //             console.log("댓글 쓴사람닉네임변수:"+Currentnickname);
    //         });
    //         setLoading(false);
    //     }
    //     useEffect(() => {
    //         if (url) {
    //             fetchUrl();
    //             console.log("gd");
    //         } else {
    //             Setdata(null);
    //             setLoading(false);
    //             console.log("no");
    //         }
    //     }, []);
    //     return [data, loading];
    //   }




 const removeView = () =>{
    //  if(window.confirm('해당 댓글을 삭제하시겠습니까?')){
    //     axios(`/api/comment/delete/${board_id}/comment/${commentID}`, {
    //         method : 'delete',
    //         data : {
    //             id : query.id
    //             }
    //     })

    //     alert('댓글이 삭제되었습니다.')
    //     return window.location.reload();
    //  }
 }

 //const [data, Setdata] = useFetch(`api/comment/get/${board_id}/comment`);

 let Currentnickname = localStorage.getItem("currentnickname"); //글쓴 사람
    return (
    <>

            <div>
                    <span>{nickname}</span>
                    <span className='mbticolor'>[{mbti}]</span>

                {
                    (Currentnickname===NICKNAME && NICKNAME)?
                        <span onClick={()=>removeView()}>X</span>
                        :
                        <></>
                }

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