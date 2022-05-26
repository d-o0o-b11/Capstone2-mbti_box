import React, { useState } from "react";
import {Container} from "react-bootstrap";
import "../write/writes.css"
import { Input,Row, Col  } from "antd"
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import axios from "axios";






const { TextArea } = Input

const WRITEINTJ = () => {

  const MBTI = localStorage.getItem("mbti");
  const NICKNAME = localStorage.getItem("nickname");

  const history = useHistory();

  const [post,setPost] = useState({
    title:'',
    desc:'',
    photos:[]
  });

  const [highlight, setHighlight]= useState(false);
  const {title, desc, photos}=post;

  const handlechange = e =>{
    setPost({
      ...post,
      [e.target.name]: e.target.value
    })
  }

  const handlefilechange = e =>{
    let files = e.target.files;
    console.log(files);
    handfiles(files);
   
  }

  const handfiles=files=>{
    let photosArr =[];
    for(let file of files){
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load',()=>{
        let fileobj={
          name: file.name,
          type: file.type,
          size: file.size,
          src: reader.result
        }
        photosArr.push(fileobj);
        setPost({
          ...post,
          photos: [...photos, ...photosArr]
        })
      });

    }
  }


  const handledelete=e=>{
    let target = e.target.parentElement;
    let targetindex = target.dataset.imgindex*1;
    // console.log(target, targetindex);
     setPost({
       ...post,
       photos: [...photos.slice(0,targetindex), ...photos.slice(targetindex+1)]
     })
  }

  const handlehighlight=e=>{
    e.preventDefault();
    e.stopPropagation();
    setHighlight(true);
  }

  const handleunhiglight=e=>{
    e.preventDefault();
    e.stopPropagation();
    setHighlight(false);
  }

  const handledrop=e=>{
    e.preventDefault();
    e.stopPropagation();

    let dt= e.dataTransfer;
    let files= dt.files;
    setHighlight(false);
    handfiles(files);
    console.log(files);
  }


  const submitHandler=(e)=>{
    e.preventDefault();

    Axios({
          method: 'post',
          url: `/api/board/create/${MBTI}`,
          data: {
            title: title,
            content: desc,
            nickname: NICKNAME,
            mbti: MBTI,
          },
        })
        .then((Response)=>{

          console.log(title);
          console.log(desc);
          console.log("데이터확인")
          console.log(Response);
            alert("글 성공");
          history.replace(`/${MBTI}board`);

            // console.log("이미지 실행");
    
            // const formData = new FormData()

            //     formData.append('file', this.files[0])

            //     Axios.post('/api/file/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
            //     .then(response => {
            //         console.log(response.data);
            //         console.log("이미지 성공");
            //     })
            //     .catch(error => {
            //         console.log(error);
            //         console.log("이미지 실패");
            //     })


        })
        .catch((error)=>{
            alert("실패");
        });


  }

  
  return (
    <Container>
        <div style={{margin:"auto"}}>
        <div className="file-upload" style={{marginTop:30}}>
        {/* Image Drag & Drop & Preview */}
        <h2>게시글 작성</h2>
        <span style={{marginBottom:10}}>{MBTI}</span>
        
            <div className="custom-form-group" >
                <input type="text" name="title" placeholder="Title" maxLength={40} value={title} onChange={handlechange}/>
            </div>
            
            <div className="custom-form-group">
                <div className={highlight? "custom-file-drop-area highlight": "custom-file-drop-area "} 
                onDragEnter={handlehighlight} 
                onDragOver={handlehighlight} 
                onDragLeave={handleunhiglight}
                onDrop={handledrop}
                >
                    <input type="file"name="photos" accept="image/*" placeholder="Enter photos" multiple id="filephotos" onChange={handlefilechange}/>
                    <label htmlFor="filephotos">Drag & Drop</label>
                </div>
              
                <div className="custom-file-preview">
                  {photos.length > 0 && photos.map((item,index)=>(
                    <div className="prev-img" key={index} data-imgindex={index}>
                      <span onClick={handledelete}>&times;</span>
                      <img src={item.src} alt={item.name}/>
                    </div>
                  ))}
                    
                </div>
            </div>
              
              
            
            <textarea
              type="text"
              placeholder="1000자 내외"
              name="desc"
              value={desc}
              onChange={
                handlechange}
              maxLength={999}
              className='custom-form-group inputh'
                autoSize={{ minRows: 6, maxRows: 6 }}
              />
              <span style={{marginLeft:"auto", marginBottom:20}}>{desc.length}/1,000자</span>

            <button type="submit" className="btn-submit" onClick={submitHandler}>Submit</button>
        
        </div>
        </div>
        </Container>

  );
};

export default WRITEINTJ
