import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <div>
        <nav id="nav" className="flex justify-center h-16 items-center text-xl font-bold">
            <ul className="flex justify-around gap-8 mr-16">
               <li><Link href="/">Home</Link></li>
               <li><Link href="/about">About</Link></li>
               <li><Link href="/education">Education</Link></li>
               <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}
