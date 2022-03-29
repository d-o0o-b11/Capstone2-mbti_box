import React, { useState } from "react";
import "../write/writes.css"
import styled from "styled-components"
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Parser from 'html-react-parser';

const WRITEINTJ = () => {
  const [movieContent, setMovieContent] = useState({
    title:'',
    content:''
  })

  const[viewContent, setViewContent] = useState([]);

  const getValue=e=>{
    const{name, value}=e.target;
    //console.log(name,value);
    setMovieContent({
      ...movieContent,
      [name]:value
    })
    console.log(movieContent);
  }

    const [fileImage, setFileImage] = useState("");
    //const[previewImg, setPreviewImg] = useState(null)

    // 파일 저장
    const saveFileImage = (e) => {
      setFileImage(URL.createObjectURL(e.target.files[0]));
    };
  
    // 파일 삭제
    const deleteFileImage = () => {
      URL.revokeObjectURL(fileImage);
      setFileImage("");
    };

    const insertImg=(e)=>{

        let reader = new FileReader()

        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onloadend=()=>{
            const previewImgUrl = reader.result

            if(previewImgUrl){
                setFileImage(previewImgUrl)
            }
        }
    }

    return(
        <>
        {viewContent.map(element=>
          <div>
            <h3>{element.title}</h3>
            <div>
              {Parser(element.content)}
            </div>
          </div>
          
          )}



        <h3>INTJ 게시글 작성</h3>
        <hr/>
        
        <h4>이미지 미리보기</h4>
      <table>
        <tbody>
          <tr>
            {/* <th>이미지</th> */}
            <td>
              <div>
                {fileImage && (
                    <ImgArea>
                        <img
                            alt="sample"
                            src={fileImage}
                            style={{ margin: "auto"}}
                        />
                  </ImgArea>
                )}
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <input
                    name="imgUpload"
                    type="file"
                    accept="image/*"
                    onChange={saveFileImage}
                  />

                  <button
                    style={{
                      marginTop:"100px",
                      backgroundColor: "gray",
                      color: "white",
                      width: "55px",
                      height: "40px",
                      cursor: "pointer",
                    }}
                    onClick={() => deleteFileImage()}
                  >
                    삭제
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

          <input
            type='text'
            placeholder="제목"
            onChange={getValue}
            name='title'/>

          <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                        setMovieContent({
                          ...movieContent,
                          content: data
                        })
                        console.log(movieContent);
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
          />

          <button
            onClick={()=>{
              setViewContent(viewContent.concat({...movieContent}));
            }}>입력</button>

        </>
    );
}

export default WRITEINTJ

const Img = styled.img`
    object-fit: cover;
  width: 100%;
`

const ImgArea = styled.div`
width: 200px;
height: 200px;
display: flex;
align-items: center;
margin-bottom: 10px;
`