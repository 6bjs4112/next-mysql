import { queryExecute } from "../../db";


export async function GET(){
    const querydata = 'SELECT * from files';
    const data = await queryExecute(querydata);

    return Response.json(data);
}

export async function POST(req){
    const {title, imgURL} = await req.json();
    // console.log(title, imgURL);//이거는 터미널창에 찍힘
    const query = `insert into files (title,imgURL) values (?,?)`;
    await queryExecute (query,[title,imgURL]);

    return Response.json({done:'비워두면 에러남'});
}