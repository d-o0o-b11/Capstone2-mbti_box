import React, { useState } from "react";
import {Container, Form} from "react-bootstrap";
import "../write/writes.css"
import { Input,Row, Col  } from "antd"
import Axios from 'axios';
import { useHistory } from "react-router-dom";


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

  const [files, setFiles] = useState([]);

  const onInputChange = (e) => {
    // console.log(e.target.files)
      let files = e.target.files;
      setFiles(e.target.files)

      handfiles(files);
  };
  

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


  

  const submitHandler=async(e)=>{
    e.preventDefault();

    const data = new FormData();

      for(let i = 0; i < files.length; i++) {
          data.append('files', files[i]);
      }
      console.log(files.length);
    if(title===""){
      alert("제목을 입력해주세요");
    }
    else if(desc===""){
      alert("내용을 입력해주세요");
    }  
    // else if(files.length===0){
    //   alert("이미지 1개이상 추가해주세요");
    // }
    else{
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
            console.log(Response.data);
              alert("글 성공");
            
            localStorage.setItem("filelength",files.length);
            const filecount = localStorage.getItem("filelength");

            console.log(filecount);

            history.replace(`/${MBTI}board`);

              console.log("이미지 실행");

                Axios({
                  method:'post',
                  url: `/api/${Response.data}/file`, 
                  mode: "cors",
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                  data: data,
                })
                  .then(response => {
                      console.log(response.data);
                      console.log("이미지 성공");
                      
                  })
                  .catch(error => {
                      console.log(error);
                      console.log("이미지 실패");
                    
                  })


          })
          .catch((error)=>{
              alert("실패");
          });
        }

  }

  
  return (
    <Container>
        <div style={{margin:"auto auto 100px auto"}}>
        <div className="file-upload" style={{marginTop:30}}>
        {/* Image Drag & Drop & Preview */}
        <h2>게시글 작성</h2>
        <span style={{marginBottom:10}}>{MBTI}</span> 
        
            <div className="custom-form-group" >
                <input type="text" name="title" placeholder="Title" maxLength={20} value={title} onChange={handlechange}/>
            </div>
            
            <div className="custom-form-group">
                <div className="form-group files">
                  <label htmlFor="filephotos"><span>Upload</span></label>
                    <input type="file"
                     onChange={onInputChange}
                     className="form-control"
                     multiple/>
                </div>
              
                <div className="custom-file-preview">
                  {photos.length > 0 && photos.map((item,index)=>(
                    <div className="prev-img" key={index} data-imgindex={index}>
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
}

export default WRITEINTJ
