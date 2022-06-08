import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import { FaExpand, FaArrowRight } from 'react-icons/fa';

export default function Website_01() {
    return (
        <section className="bg_dark2">

            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-12 col-lg-7 p-5">
                        <Tilt
                            className="tilt_web"
                            tiltAngleXInitial={0}
                            tiltAngleYInitial={-3}
                            perspective={1200}
                            glareEnable={true}
                            glareMaxOpacity={0.85}
                            transitionSpeed={1500}
                            scale={1.0}
                            gyroscope={true}
                        >
                            <div className="tilt_web">
                                <div className='web_browser'>
                                    <div className='web_browser_bar'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <div className='addressbar'></div>
                                        <div className='closebrowser'>
                                            <FaExpand />
                                        </div>
                                    </div>
                                    <div className="img-web" style={{ backgroundImage: "url('/images/websites/website_one_pager.png')" }}></div>
                                    <Link href="https://next-onepager.vercel.app/">
                                        <a target="_blank" className='vieuw_site inner-element'>Bezoek de website<span><FaArrowRight /></span></a>
                                    </Link>
                                </div>
                            </div>
                        </Tilt>

                    </div>
                    <div className="p-4 col-12 col-md-8 m-auto col-lg-5 text-white">
                        <span className="subtitle text-orange">Nasa api onepage</span>
                        <h3 className="text-gradient">Onepage website</h3>
                        <p>Demo website waarbij gebruik is gemaakt van een api connectie. In dit geval haal ik data op van Nasa en Starwars. Deze website bevat 1 pagina. Ook wel onepager of onepage website genoemd.
                        </p>
                        <div className="button-primary">

                            <Link href="https://next-onepager.vercel.app/">
                                <a target="_blank">
                                    <div className="mas">Bezoek de website<span><FaArrowRight /></span></div>
                                    <button type="button" name="Hover">
                                        Bezoek de website<span><FaArrowRight /></span>
                                    </button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}