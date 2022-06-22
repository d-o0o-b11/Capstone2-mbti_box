import React, { useEffect, useState } from "react";
import { Container, Row, Col} from "react-bootstrap";
import "../Noticeboard/ann.css"
import { FormOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import qs from 'qs';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Comwrite from "../comment/comwrite.js";
import Comview from "../comment/comview.js"
import Boardmap from './Boardmap';
import BoardImgListItem from './BoarImgListItem';
import ComListItem from '../comment/comListItem.js';



function useFetch(url, id) {
  const [data, setData] = useState({});
  const [imgarr, setImgArr] = useState([]);
  
    

  function fetchUrl() {
        axios.get(`${url}${id}`).then(response => {
          setData(response.data);
          console.log("확인함");
          console.log(response.data);
          console.log(response.data.fileNames);
          console.log("글쓴사람닉네임:"+response.data.nickname);
          setImgArr(response.data.fileNames);

          const Currentnickname = localStorage.getItem("currentnickname");
          localStorage.setItem("currentnickname",response.data.nickname)

          console.log("글쓴사람닉네임변수:"+Currentnickname);

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
  return [data, imgarr];
}



const MbtiNotice = ({ location, history }) => {

  const backhistory = useHistory();
  const MBTI = localStorage.getItem("mbti");
  const NICKNAME = localStorage.getItem("nickname"); //로그인된 사람

  let Currentnickname = localStorage.getItem("currentnickname"); //글쓴 사람

  const ADMINROLE = localStorage.getItem("adminrole");

  const query = qs.parse(location.search, {
      ignoreQueryPrefix: true
  });


  console.log(query.id);
  console.log("현재닉네임2: "+NICKNAME);
  console.log("글쓴사람닉네임: "+Currentnickname);

  const [data, imgarr] = useFetch("/api/board/", query.id);


  
  const removeView=(e)=> {
    if(window.confirm('해당 게시물을 삭제하시겠습니까?')) {
      
        axios.delete(`/api/board/${query.id}/delete`)
        .then(
            alert('성공')
        )

        alert('게시물이 삭제되었습니다.')
        return backhistory.replace("/");

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
                </div>

                <hr></hr>


                {/* <Boardmap
                    id={query.id}
                    key={query.id}
                /> */}
                {imgarr.map(
                        (item, index)=>{
                            // return <p>{item.fileName}</p>
                            return(
                                <BoardImgListItem
                                    fileName={item.fileName}
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
                        ((Currentnickname===NICKNAME && NICKNAME)|| ADMINROLE==="ADMIN") ?    
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
                    <Comview id={query.id}/>

                    {/* <Container style={{marginTop:"60px"}}>     

                        <section>
                            {data.map(
                                ({ content, nickname, mbti, createdAt}) => (
                                    <ComListItem
                                        mbti={mbti}
                                        nickname={nickname}
                                        content={content}
                                        //createdAt={createdAt}
                                        createdAt={createdAt.substr(0,10)}
                                        key={nickname}
                                    />
                                )
                            )}
                        </section>
                    </Container>    */}

            </Container>
          </>
        
      )
  
}
export default MbtiNotice;