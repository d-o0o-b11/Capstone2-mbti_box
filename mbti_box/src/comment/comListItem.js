import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import { TextArea } from 'semantic-ui-react';

function ComListItem({ content, nickname, mbti, createdAt, id}) { //start_date -> date

  const NICKNAME = localStorage.getItem("nickname");
  const TOKEN = localStorage.getItem("token");
  const ADMINROLE = localStorage.getItem("adminrole");

  const [check, Setcheck] = useState("0");

  let inputRef = useRef([]);
    inputRef.current = [0].map(
        (ref, index) => inputRef.current[index] = React.createRef()
    )

  const removeCom=(e)=> {
    if(window.confirm('해당 댓글을 삭제하시겠습니까?')) {
       
        axios({
            method:'delete',
            url:`/api/comment/delete/${id}`,
            headers:{
                "X-AUTH-TOKEN" : TOKEN
            },
            data:{
                nickname : NICKNAME
            }
        }).then((Response)=>{
            alert('댓글이 삭제되었습니다.')
            window.location.reload();
            }
        ).catch((error)=>{
            alert("댓글 삭제에 실패하였습니다.")
        })

    
    }
  }

  const [upcomment, Setupcomment] = useState();

  const updateCom=(e)=> {
    console.log("여기까지")
    Setupcomment(content)
    Setcheck(1); //댓글 수정 버튼 클릭
    console.log(check);
    console.log(content);

  }

  const updateAxiosCom=(e)=>{
    axios({
        method: "put",
        url:`/api/comment/update/${id}`,
        headers:{
            "X-AUTH-TOKEN": TOKEN
        },
        data:{
            content: upcomment
        }
    })
    .then((Response)=>{
        console.log("댓글 수정 완료");
        Setcheck(0);
        window.location.reload();
    })
    .catch((error)=>{
        console.log("댓글 수정 실패");
    })
  }



  const handleChange = (e) =>{
    e.preventDefault();
    Setupcomment(e.target.value);
  }

    return (
    <>

            <div>
                    <span>{nickname}</span>
                    <span className='mbticolor'>[{mbti}]</span>


                    <br></br>

                    
                    <div>
                        { check===1?
                        <>
                            <br></br>
                            <div>
                                <textarea type="text" value={upcomment} maxLength={100} rows={2} onChange={handleChange} className="updatecomment"/>
                            </div>
                        </>
                            :
                            <h2 style={{whiteSpace:"pre-line", float:"left", marginLeft:"10px"}}>{content}</h2>
                        }   
                    </div>
                    

                    <p style={{float:"right"}} className="commentdate">
                        {createdAt}
                    </p>
                    { 
                        ((NICKNAME===nickname)|| ADMINROLE==="ROLE_ADMIN")?
                        <>
                            {
                                check===1?
                                    <span onClick={()=>updateAxiosCom()} className="commentdetail" style={{cursor: "pointer"}}>수정</span>
                                :
                                <>
                                    <span  onClick={()=>removeCom()} className="commentdetail" style={{cursor: "pointer"}}>삭제</span>
                                    <span  onClick={()=>updateCom()} className="commentdetail" style={{cursor: "pointer"}}>수정</span>
                                </>
                            }
                        </>    
                        :   <></>
                    }
                <br style={{clear:"both"}}></br>
            <hr></hr>
            </div>

    </>
    )
}

export default ComListItem;