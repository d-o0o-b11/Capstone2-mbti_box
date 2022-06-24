import React, { useEffect, useState } from "react";
import { Container, Row, Col} from "react-bootstrap";
import "../Noticeboard/ann.css"
import {Link} from "react-router-dom";
import qs from 'qs';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Comwrite from "../comment/comwrite.js";
import BoardImgListItem from './BoarImgListItem';
import ComListItem from '../comment/comListItem.js';



function useFetch(url, id) {
  const [data, setData] = useState({});
  const [imgarr, setImgArr] = useState([]);
  const [comment, setComment] = useState([]);
    

  function fetchUrl() {
        axios.get(`${url}${id}`).then(response => {
          setData(response.data);
          console.log("확인함");
          console.log(response.data);
          console.log(response.data.fileNames);
          console.log("글쓴사람닉네임:"+response.data.writer);
          setImgArr(response.data.fileNames);
          setComment(response.data.comments);
          console.log(response.data.comments)

          const Currentnickname = localStorage.getItem("currentnickname");
          localStorage.setItem("currentnickname",response.data.writer)

          console.log("글쓴사람닉네임변수:"+Currentnickname);

          console.log("이미지url: "+response.data.fileNames)

      });
      
  }
  useEffect(() => {
      if (id) {
          fetchUrl();
          console.log("gd");
      } else {
          setData(null);
          console.log("no");
      }
  }, []);
  return [data, imgarr, comment];
}



const MbtiNotice = ({ location, history }) => {

  const backhistory = useHistory();
  const MBTI = localStorage.getItem("mbti");
  const NICKNAME = localStorage.getItem("nickname"); //로그인된 사람
  const TOKEN = localStorage.getItem("token");

  let Currentnickname = localStorage.getItem("currentnickname"); //글쓴 사람

  const ADMINROLE = localStorage.getItem("adminrole");

  const query = qs.parse(location.search, {
      ignoreQueryPrefix: true
  });


  console.log(query.id);
  console.log("현재닉네임2: "+NICKNAME);
  console.log("글쓴사람닉네임: "+Currentnickname);

  const [data, imgarr, comment] = useFetch("/api/post/", query.id);


  
  const removeView=(e)=> {
    if(window.confirm('해당 게시물을 삭제하시겠습니까?')) {
       
        axios({
            method:'delete',
            url:`/api/post/delete/${query.id}`,
            headers:{
                "X-AUTH-TOKEN" : TOKEN
            },
            data:{
                nickname : NICKNAME
            }
        }).then((Response)=>{
            alert('게시물이 삭제되었습니다.')
            backhistory.push("/");
            }
        ).catch((error)=>{
            alert("게시물 삭제에 실패하였습니다.")
        })

    
    }
  }




      return (
          <>
          <hr></hr>
            <Container>
                <h3 style={{marginTop:"40px"}}>게시판</h3>

                <hr className="hrset"></hr>

                <div style={{margin:"auto 0 auto 40px"}}>
                    <h5>{data.title}</h5>
                    <span className="datesize">[MBTI]</span>
                    <span>조회수: {data.count}</span>
                </div>

                <hr></hr>


                {imgarr.map(
                        (item, index)=>{
                            return(
                                <BoardImgListItem
                                    fileName={item.url}
                                />
                            )
                        }
                    )}

                
                <hr></hr>
                <div style={{padding:"30px"}}>
                    <span style={{whiteSpace:"pre-line"}}>{data.content}</span>
                </div>

                <hr></hr>

                
                <button className="btn2" onClick={() => {backhistory.goBack();}}>목록으로 돌아가기</button>
                
                
                    {   
                        ((Currentnickname===NICKNAME && NICKNAME)|| ADMINROLE==="ROLE_ADMIN") ?    
                            <>
                                <Link to={{
                                        pathname:"/updateMBTI",
                                        search:`?id=${query.id}`
                                    }}>
                                    <button className='btn1'>수정</button>
                                </Link>
                                <button className='btn1' onClick={()=>removeView()}>삭제</button>
                            </>

                            : <></>
                    }
                    <div>
                    {
                        NICKNAME ?
                            <><Comwrite id={query.id}/></>
                        :   <></>
                    }
                    </div>

                    {/* 댓글보이기 */}

                    <Container style={{marginTop:"60px"}}>     

                        <section>
                            {comment.map(
                                (item, index) => (
                                    <ComListItem
                                        mbti={item.mbti}
                                        nickname={item.writer}
                                        content={item.content}
                                        createdAt={item.createdDate.substr(0,10)}
                                        id={item.comment_id}
                                        key={item.id}
                                    />
                                )
                            )}
                        </section>
                    </Container>   

            </Container>
          </>
        
      )
  
}
export default MbtiNotice;