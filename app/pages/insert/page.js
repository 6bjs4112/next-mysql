//insert폴더 page.jk
import Insert from '@/app/comp/Insert'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <>
            <h2>Insert</h2>
            <Insert/>

            <Link href="/">HOME </Link>
            <Link href="./list">리스트 </Link>
        </>
    )
}
