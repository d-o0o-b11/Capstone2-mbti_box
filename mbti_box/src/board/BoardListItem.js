import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './board.css'
import img2 from "../images/blue.png"
import { useMediaQuery } from "react-responsive"
import BoardImgListItem from './BoarImgListItem.js';
import axios from "axios";
import test1 from "../asset/login.png";

function useFetch2(url, id) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    function fetchUrl() {
          axios.get(`${url}`).then(response => {
            
            console.log("확인함");
            console.log(response.data);
            console.log(response.data[0].filename);
            // setData(response.data[0].filename);
        });
        setLoading(false);
    }
    useEffect(() => {
      fetchUrl();
  }, []);
    return data;
  }
//게시판 개별보이는거
function BoardListItem({id, title, nickname,  createdAt}) { //start_date -> date


    const [data2, setData2] = useState("");
    
  
    // axios({
    //     method:'get',
    //     url: `/api/get/3/filename`,
    //   })
    //     .then(response => {
    //         console.log(response.data)
    //         console.log(response.data[0].filename);
    //         setData2(response.data[0].filename);
    //         console.log(testimg);
            
    //     })
    //     .catch(error => {
    //         console.log(error);
    //         console.log("이미지 실패");
          
    //     })

    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
      });
      
      const imgdata = useFetch2(`/api/get/3/filename`,`${id}`);
      const testimg = `../asset/${imgdata.filename}`;

    return (
    <>
    {(isMobile)?
        <>
        {/* 모바일 */} 
        <Link to={{
            pathname:"/INTJ",
            search:`?id=${id}`
        }} style={{ textDecoration: 'none', color: 'black'}}>

                <div className='boardframe1 column1'>          
                    {/* <img src={img2} /> */}
                    <img src={testimg}/>
                        <section>
                            {/* imgdata.map */}
                            {imgdata.map(
                                ({filename, id}) => (
                                        <BoardImgListItem
                                            filename={filename}
                                            id={id}
                                            key={filename}
                                        />
                                )
                            )}
                        </section>
                        
                    
                    

                    

                    <div className="txt_line2" style={{marginTop:"10px"}}>
                        <span style={{fontSize:"15px", color:"#000000", fontStyle:"blod"}}>{title}</span>
                    </div>
                    <span style={{fontSize:"12px", color:"#000000", marginTop:"10px"}}>{nickname}</span>
                    {/* <span style={{fontSize:"12px", color:"#000000"}}>{createdAt}</span> */}
                </div>

        </Link>
        </>
            :
        <>
        {/* 컴퓨터 */}
        <Link to={{
            pathname:"/INTJ",
            search:`?id=${id}`
        }} style={{ textDecoration: 'none', color: 'black'}}>
    
                <div className='boardframe column'>          
                    {/* <img src={img2} /> */}
                    <img src={test1}/>
                    <div className="txt_line" style={{marginTop:"10px"}}>
                        <h6 style={{fontSize:"15px", color:"#000000", fontStyle:"blod"}}>{title}</h6>
                    </div>
                    <br></br>
                    <span style={{fontSize:"12px", color:"#000000"}}>{nickname}</span>
                    {/* <span style={{fontSize:"12px", color:"#000000"}}>{createdAt}</span> */}
                </div>
    
        </Link>
        </>
    }

    </>
    )
}

export default BoardListItem;