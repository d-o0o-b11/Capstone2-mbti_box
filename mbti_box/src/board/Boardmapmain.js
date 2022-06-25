import React, { useEffect, useState } from 'react';
import './board.css'
import axios from "axios"
import { useMediaQuery } from "react-responsive"
import BoardImgListItem from './BoarImgListItem';


function useFetch2(url, id) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    function fetchUrl() {
          axios.get(`${url}`).then(response => {
            
            // console.log("확인함");
            // console.log(response.data);
            // console.log(response.data[0].filename);
            setData(response.data);
        });
        setLoading(false);
    }
    useEffect(() => {
      fetchUrl();
  }, []);
    return data;
  }

//게시판 개별보이는거
function Boardmapmain({id}) { //start_date -> date

    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
      });


    const imgdata = useFetch2(`http://18.208.168.254:8080/api/board/${id}`,`${id}`);




    return (
    <>
    {(isMobile)?
        <>
        {/* 모바일 */} 
               
        <div className="profile" style={{margin: "0 auto"}}>
                   
                    {imgdata.map(
                                (item,index) => {
                                    if (index == 0){
                                        return(
                                            <BoardImgListItem
                                                filename={item.fileName}
                                                id={item.id}
                                                key={item.id}
                                            />
                                        )
                                    }
                                }
                            )}
                            
                    </div>
        </>
            :
        <>
        {/* 컴퓨터 */}
                    

                        {imgdata.map(
                                (item,index) => {
                                    if (index == 0){
                                        return(
                                            <BoardImgListItem
                                                filename={item.fileName}
                                                id={item.id}
                                                key={item.id}
                                            />
                                        )
                                    }
                                }
                            )}
        
        </>
    }

    </>
    )
}

export default Boardmapmain;