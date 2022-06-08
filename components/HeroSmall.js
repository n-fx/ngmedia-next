import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
    return (
        <div className="hero hero_small">
            <div className="container">
                <div className="row">
                    <div className="col text-center hero-in">
                        <h1>Web<span>Design</span></h1>
                        <p className="hero-text">Een aantal websites op een rij. Dit zijn demo websites om zo de verschillende mogelijkheden te laten zien. De websites zijn o.a. ontwikkeld met WordPress en/of React.</p>
                        <Link href="#start_page" aria-label="Scroll">
                            <a className="button-scroll">
                                <FaArrowDown />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}