//list폴더 page.jk
import React from 'react'
import List from '@/app/comp/List'
import Link from 'next/link'

export default function page() {
    return (
        <>
            <h1>List</h1>
            <List/>

            <Link href="/">HOME </Link>
            <Link href="./insert">글 작성 </Link>
        </>
    )
}
