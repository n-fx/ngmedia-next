import Link from 'next/link';

export default function Menu() {
    return (
        <ul>
            <li onClick={() => closeMenu()}>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li onClick={() => closeMenu()}>
                <Link href="/logo-design">
                    <a>Logo design</a>
                </Link>
            </li>
            <li onClick={() => closeMenu()}>
                <Link href="/portfolio">
                    <a>portfolio</a>
                </Link>
            </li>
            <li onClick={() => closeMenu()}>
                <Link href="/about">
                    <a>about</a>
                </Link>
            </li>
            <li onClick={() => closeMenu()}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    )
}