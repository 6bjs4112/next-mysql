import Link from 'next/link'
import styles from './page.module.css'
import Upload from './comp/Upload'

export default function Home() {
  
  const testEnv = process.NODE_HOST
  // console.log(testEnv);

  return (
    <>
    {testEnv}
      <h1>Maria DB CRUD</h1>
      <Link href="./pages/insert">글 작성 </Link>
      <Link href="./pages/list">리스트 </Link>

      <hr/>
      <Upload/>
    </>
  )
}
