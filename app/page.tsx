import Link from "next/link";

export default function Home() {
  return (
    <>
    <nav id="nav" className="flex justify-center h-16 items-center text-xl font-bold">
      <ul className="flex justify-around gap-8 mr-16">
        <li>Home</li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/education">Education</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
    <main className="flex">
      <h2>Hi!</h2>
      <h2>My name is Muhammad Arman</h2>
      <h3>& I'm a web developer</h3>
    </main>
    </>
  );
}
