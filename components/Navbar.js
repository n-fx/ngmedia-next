import Link from 'next/link';
import React, { useEffect, useState } from "react";
// import Menu from './Menu';
import { BiX } from "react-icons/bi";


export default function Navbar() {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 162);
        });
    }, []);

    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }


    return (

        <div className={scroll ? "header-fixed" : ""}>
            <header className="site-header" id="header">

                <div className="row m-auto">

                    <div className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                        <div className="navmobile">

                            <svg id="ngmedia" x="0px" y="0px">
                                <text transform="matrix(1 0 0 1 0 300)">NGMEDIA</text>
                            </svg>

                            <div className={`menu-icon-close ${navbarOpen ? " hamburger_open" : ""}`} onClick={handleToggle}>
                                <BiX />
                            </div>
                            <ul>
                                <li onClick={() => closeMenu()}>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li onClick={() => closeMenu()}>
                                    <Link href="/webdesign">
                                        <a>Webdesign</a>
                                    </Link>
                                </li>
                                <li onClick={() => closeMenu()}>
                                    <Link href="/logo-design">
                                        <a>Logo design</a>
                                    </Link>
                                </li>
                                <li onClick={() => closeMenu()}>
                                    <Link href="/graphics">
                                        <a>Graphics</a>
                                    </Link>
                                </li>
                                <li onClick={() => closeMenu()}>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-6 col-md-6 col-lg-2">
                        <div className="site-logo" onClick={() => closeMenu()}> 
                            <Link href="/">
                                <a>NGMEDIA</a>
                            </Link>
                        </div>
                    </div>

                    <div className="d-none d-lg-block col-lg-8">
                        <nav>
                            <ul>
                                <li onClick={() => closeMenu()}>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li onClick={() => closeMenu()}>
                                    <Link href="/webdesign">
                                        <a>Webdesign</a>
                                    </Link>
                                </li>
                                <li onClick={() => closeMenu()}>
                                    <Link href="/logo-design">
                                        <a>Logo design</a>
                                    </Link>
                                </li>
                                <li onClick={() => closeMenu()}>
                                    <Link href="/graphics">
                                        <a>Graphics</a>
                                    </Link>
                                </li>
                                <li onClick={() => closeMenu()}>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col-6 col-md-6 col-lg-2">
                        <div className={`menu-icon ${navbarOpen ? " hamburger_open" : ""}`} onClick={handleToggle}>
                            <span></span>
                        </div>
                    </div>

                </div>
            </header>
        </div>
    )
}