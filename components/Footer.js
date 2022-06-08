import Link from 'next/link';
import { FaEnvelope, FaLinkedin, FaGithub, FaAngleUp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer id="contact">
            <div className="container">
                <div className="row">

                    <div className="col-12 pb-3">
                        <h3 className="text-gradient">Contact</h3>
                    </div>

                    <div className="col-lg-3 col-xl-4">
                        <ul className="p-0 m-0  text-start text-lg-start">
                            <li>
                                <Link href="mailto:info@ngmedia.nl">
                                    <a><FaEnvelope />&nbsp;info@ngmedia.nl</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/in/nils-guillot/">
                                    <a><FaLinkedin />&nbsp;LinkedIn</a>
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="https://linkedin.nl">
                                    <a><FaGithub />&nbsp;Github</a>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className="col-lg-9 col-xl-7">
                        <ul className="p-0 mt-4 m-lg-0 float-xl-end text-start text-lg-end">
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/webdesign">
                                    <a>Webdesign</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/logo-design">
                                    <a>Logo design</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/graphics">
                                    <a>Graphics</a>
                                </Link>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9 col-xl-1">
                        <ul className="p-0 m-0 float-xl-end text-start text-lg-end">
                            <li>
                                <Link href="#backtotop" aria-label="back to top">
                                    <a className='backtotop' aria-label="back to top"><FaAngleUp /></a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
} 