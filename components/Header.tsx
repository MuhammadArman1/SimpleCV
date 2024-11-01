import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
         <nav id="nav">
            <ul>
               <li><Link href="/">Home</Link></li>
               <li><Link href="/about">About</Link></li>
               <li><Link href="/education">Education</Link></li>
               <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}
