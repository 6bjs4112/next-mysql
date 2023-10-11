"use client"
//Insert.js
import { useRouter } from 'next/navigation';
import axios from 'axios';
import React from 'react'

export default function Insert() {
    const navi = useRouter();

    const insertFn = function(e){
        e.preventDefault();
        const formdata =  new FormData(e.target);
        const values = Object.fromEntries(formdata);
        // console.log(values);

        axios.post('/api',values);
        navi.push('./list');
    }

    return (
        <>
            <form onSubmit={insertFn}>
                <p><input type='id' name='id' placeholder='id'/></p>
                <p><input type='text' name='name' placeholder='이름'/></p>
                <p><input type='email' name='email' placeholder='e-mail'/></p>
                <p><input type='submit' value='저장'/></p>
            </form>
        </>
    )
}
