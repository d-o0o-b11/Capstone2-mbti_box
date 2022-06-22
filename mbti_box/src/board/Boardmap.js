import React, { useEffect, useState } from 'react';
import './board.css'
import axios from "axios"
import { useMediaQuery } from "react-responsive"
import BoardImgListItem from './BoarImgListItem';


function useFetch2(url, id) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    function fetchUrl() {
          axios.get(`${url}${id}`).then(response => {
            
            console.log("확인함");
            console.log(response.data);
            console.log(response.data.fileNames);


            setData(response.data.fileNames);
        });
        setLoading(false);
    }
    useEffect(() => {
      fetchUrl();
  }, []);
    return data;
  }

//게시판 개별보이는거
function Boardmap({id}) { //start_date -> date

    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
      });
      

    const imgdata = useFetch2("/api/board/",`${id}`);

      console.log(imgdata);
 

    return (
    <>
    {(isMobile)?
        <>
        {/* 모바일 */} 
               
                    {imgdata.map(
                        ({id, fileNames})=>(
                            <BoardImgListItem
                                id={id}
                                key={id}
                                fileName={fileNames.fileName}
                            />
                        )
                    )}
                    
        </>
            :
        <>
        {/* 컴퓨터 */}
                    {/* {imgdata.map(
                        (item, index)=>(
                            <BoardImgListItem
                                id={item.id}
                                key={item.id}
                                fileName={item.fileNames}
                            />
                        )
                    )} */}

                    {imgdata.map(
                        (item, index)=>{
                            return(
                                <p>{item.fileName}</p>
                            )
                            }
                    )}
                    
        
        </>
    }

    </>
    )
}

export default Boardmap;