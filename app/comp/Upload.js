"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Upload() {
    const [imageView,setImageView] = useState();
    
    //저장버튼 클릭
    const uploadFile = function(e){
        e.preventDefault();
        const formdata = new FormData(e.target);//form값 받기
        const objF = Object.fromEntries(formdata);//객체상태로 바꾸기
        // console.log(obj.upload);
        
        //fileReader 생성자함수 생성
        const fr = new FileReader();
        fr.readAsDataURL(objF.upload);
        
        //파일 이름,result값 DB에 보내주기
        fr.addEventListener('load',function(){
            axios.post('/api/upload/files',{
                title: objF.title,
                imgURL: fr.result
            })
            // console.log(fr.result);//result => base64 코드 출력됨
        })
        //반영되게 n초후 새로고침해주기
        setTimeout(function() {
            window.location.reload();
        }, 1000);
    }
    
    //base64으로 만들어진 ㅈㄴ긴 코드를 짧게 줄이기
    function base64Blob(b64Data,contentType='') {
        const image_data = atob(b64Data.split(',')[1]); 

        const arraybuffer = new ArrayBuffer(image_data.length);
        const view = new Uint8Array(arraybuffer);

        for (let i = 0; i < image_data.length; i++) {
            view[i] = image_data.charCodeAt(i) & 0xff;
        }

        const blob =  new Blob([arraybuffer], { type: contentType });
        return URL.createObjectURL(blob); 
    }


    //get으로 db정보 가져오기
    const [data,setData] = useState([]);//데이터 담을 공간
    
    const getFile = async function(){
        const dbData = await axios.get('/api/upload/files');
        
        //blob쓰기
        const setDbData = dbData.data.map(obj=>{
            obj.imgURL = base64Blob(obj.imgURL);
            return obj
        })
        setData(setDbData);
    }
    useEffect(()=>{
        getFile();
    },[])


    return (
        <>
            <h2>파일 업로드</h2>
            <form 
                onSubmit={uploadFile}
                method='post'
                encType='multipart/form-data'
            >
                <p><input type='text' name='title'placeholder='파일명을 입력하세요'/></p>
                <p>
                    <input type='file' name='upload'
                        onChange={function(e){
                            const file = e.target.files[0];
                            file && setImageView(URL.createObjectURL(file))
                        }}
                    />
                    <img src ={imageView} width="200"/>
                </p>
                <p><input type='submit' value="저장" /></p>
            </form>
            
            {/* <img src={testBlob}/> */}
            <div>
                {
                    data.map((obj)=>(
                        <figure key={obj.num}>
                            <img src={obj.imgURL} width="200"/>
                            <figcaption>{obj.title}</figcaption>
                        </figure>
                    ))
                }
            </div>
        </>
    )
}
