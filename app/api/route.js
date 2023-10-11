
import { queryExecute } from "./db"

export async function GET(){
//내용 조회
    const data = await queryExecute('SELECT * from member');//함수 실행
//내용 추가
    // const data = await queryExecute(`
    //     insert into member 
    //     (id,name,email) 
    //     values 
    //     ('hong_id','홍길동','hong@gamil.com')
    // `);
//내용 수정
    // const data = await queryExecute(`
    //     update member set name='새이름'
    //     where num = 2
    // `);
//내용 삭제
    // const data = await queryExecute(`
    //     delete from member
    //     where num = 3
    // `);
//새 테이블 작성
    // const data = await queryExecute(`
    //     create table contact(
    //         name varchar(30),
    //         email varchar(100),
    //         contents text,
    //         num int not null auto_increment,
    //         primary key(num)
    //     )
    // `); 
// 테이블 삭제
    // const data = await queryExecute(`drop table contact`);

    return Response.json(data);
}

export async function POST(req){
    //insert에서 넘어온 데이터 추가하기
    const {id,name,email} = await req.json();
    const data = await queryExecute(`
        insert into member 
        (id,name,email) 
        values 
        
        (?,?,?)`,[id,name,email])
    // `);
    return Response.json([]);
}
