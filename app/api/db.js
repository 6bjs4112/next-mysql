//api폴더의 db.js

//route.js에 있던 것 떼옴

var mysql      = require('mysql');//설치하고 모듈 가져옴
var connection = mysql.createConnection({
    //워크벤치에 만든 db 정보 복붙하기
    //환경 변수로 바꿔줌
    host     : process.env.NEXT_PUBLIC_HOST,
    user     : process.env.NEXT_PUBLIC_USER,
    password : process.env.NEXT_PUBLIC_PASSWORD,
    database : process.env.NEXT_PUBLIC_DATABASE,
    port:process.env.NEXT_PUBLIC_PORT
});

connection.connect();

export async function queryExecute(str,value){
    let data = await new Promise((resolve,reject)=>{
        connection.query(str, value, function(error, results){
            // console.log(results);
            resolve(results)
        });
    });
    //리턴을 await new Promise 앞에 놓아 바로 리턴시킬수도있음
    // console.log(data);
    return data;
}