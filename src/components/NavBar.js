import Link from "next/link";

export default function NavBar() {
    return <>
        <nav>
            <li><Link href={{
                pathname: '/home',
            }}>Home</Link></li>
            <li><Link href={`/about`} replace>About</Link></li>
            <li><Link href="/blog/1">Blog 1</Link></li>
            <li><Link href="/blog/2">Blog 2</Link></li>
            <li><Link href="/blog/100">Blog 100</Link></li>
        </nav>
    </>
}