import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <div className="row">
                    <div className="col text-center hero-in">
                        <h1>Ik maak <span>digitale</span> content voor jouw!</h1>
                        <p className="hero-text">Van ontwerp tot webdesign, van video animaties tot audio producties.</p>
 
                        <div className="button-primary m-auto">
                            <Link href="#start_page" aria-label="Klik hier">
                                <a>
                                    <div className="mas">Klik hier<span><FaArrowDown /></span></div>
                                    <button type="button" name="Hover">
                                    Klik hier<span><FaArrowDown /></span>
                                    </button>
                                </a>
                            </Link>  
                        </div> 

                    </div>
                </div>
            </div>
        </div>
    )
}