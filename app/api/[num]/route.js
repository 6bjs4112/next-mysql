//[num]폴더의 route.js

import { queryExecute } from "../db";

export async function DELETE(req,{params}){
    //list에서 넘어온 데이터 삭제하기
    // console.log(params)
    await queryExecute(`
        delete from member
        where num = ${params.num}
    `);
    // 아래 위 둘 다 됨
    // await queryExecute(`delete from member where num=?`,[params.num])

    //새로 고침하지 않고도 뜨게
    const data = await queryExecute(`select * from member`,[])

    return Response.json(data);
}

export async function PUT(req,{params}){
    //list에서 넘어온 데이터 수정하기
    const data = await req.json();

    // const edited = await queryExecute(`
    //     update member set name=${params.name}
    //      where num = ${params.num}
    //     );
    const q = await queryExecute(`
        update member set name=? where num=?`,
        [data.name,params.num]
    )
        

    const getData = await queryExecute(`select * from member`)

    return Response.json(getData);
}