"use client"

//List.js
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function List() {
    const [data,setData] = useState([]);

    const getData = function(){
        axios
        .get('/api')
        .then(res=>{
            setData(res.data)
        })
    }

    useEffect(()=>{
        getData();
    },[])

    const del = function(num){
        axios
        .delete(`/api/${num}`)
        .then(res=>{
            setData(res.data)
        })
    }

    const edit = function(num){
        axios
        .put(`/api/${num}`,{name:'새이름'})
        .then(res=>{
            setData(res.data)
        })
    }

    return (
        <>
            <ul>
                {
                    data.map(obj=>(
                        <li key={obj.num}>
                            아이디:{obj.id} /
                            이름:{obj.name} /
                            메일:{obj.email} 
                            <button onClick={()=>{del(obj.num)}}>삭제</button>
                            <button onClick={()=>{edit(obj.num)}}>수정</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
