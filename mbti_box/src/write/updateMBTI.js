import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import {Container} from "react-bootstrap";
import './writes.css';
import { useHistory } from 'react-router-dom';
import { ConstructionOutlined } from '@mui/icons-material';


function UPDATEMBTI({ location }) {

    const MBTI = localStorage.getItem("mbti");
    const NICKNAME = localStorage.getItem("nickname");

    const [Title, SetTitle] = useState("");  //Id

    const history = useHistory();

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });


    const [data,setData] = useState({
        title:'',
        content:''
      });

    const {title, content}=data;  

    let inputRef = useRef([]);
    inputRef.current = [0,0].map(
        (ref, index) => inputRef.current[index] = React.createRef()
    )
    
    async function fetchUrl(url, id) {
        
        await axios.get(`${url}${id}`).then(response => {
            setData(response.data);
            console.log(response.data);
        });
    }

    useEffect(() => {
        if (query.id) {
            fetchUrl("/api/board/boards-id/", query.id)
        } else {
            // setData(null);        
            inputRef.current.map(item => 
                item.current.value = '')
                console.log(inputRef.current);
        }
        return () => {
            setData(null);
        }
    }, [location.search]);
    

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
          })
    }

    const test =(e)=>{
        e.preventDefault();

        axios.put(`api/board/update/${query.id}`,{
            title: title,
            content: content,
        })
        .then((Response)=>{
            console.log(Response.data);
            history.replace(`/${MBTI}?id=${query.id}`); //게시글이 수정됐는지 확인
        }).catch((error)=>{
            console.log(query.id);
            console.log("데이터"+data);
            console.log(data.title);
            console.log(data.content);
            console.log(error);
        })
    }


    return (
        <Container>
            
                <div style={{margin:"auto"}}>
                    <div className="file-upload" style={{marginTop:30}}>
                        <h2>게시글 수정</h2>
                        <span style={{marginBottom:10}}>{MBTI}</span>

                        
                        <div className="custom-form-group" >
                        {
                            data && location.search ? 
                                <>
                                    <input type='text' id='title' name='title' value={data.title} onChange={handleChange} /> 
                                    <span style={{marginBottom:10}}></span>
                                    <textarea type='text' id='content' name='content' rows={10} className="inputh" value={data.content} onChange={handleChange} />
                                </>
                            :
                                <>
                                    <input ref={inputRef.current[0]} type='text' id='title' name='title' onChange={handleChange} />
                                    <textarea ref={inputRef.current[1]} type='text' id='content' className="inputh" name='content' rows={10} onChange={handleChange} />
                                </>
                        }   
                        </div>

                        
                        <button type="submit" className="btn-submit" onClick={test}>Submit</button>

                    </div>
                </div>
            
        </Container>
    );
}

export default UPDATEMBTI;