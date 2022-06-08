import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import { FaExpand, FaArrowRight } from 'react-icons/fa';

export default function Website_01() {
    return (
        <section className="bg_dark2">
            <div className="shape shape_01 rellax_01" style={{ backgroundImage: "url('/images/shape_01.svg')" }}></div>

            <div className="container py-5">
                <div className="row g-5">
                    <div className="p-4 col-12 col-md-8 m-auto col-lg-5 text-white">
                        <span className="subtitle text-red">Heroca website</span>
                        <h3 className="text-gradient">Webdesign</h3>
                        <p className="hero-text">Demo website voor de horeca, denk aan een restaurant of cafe.</p>
                        <div className="button-primary">
                            <Link href="https://www.ngmedia.nl/foodsite">
                                <a target="_blank">
                                    <div className="mas">Bezoek de website<span><FaArrowRight /></span></div>
                                    <button type="button" name="Hover">
                                        Bezoek de website<span><FaArrowRight /></span>
                                    </button>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-7 m-auto p-5">

                        <Tilt
                            className="tilt_web"
                            tiltAngleXInitial={0}
                            tiltAngleYInitial={3}
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
                                    <div className="img-web" style={{ backgroundImage: "url('/images/websites/website_food.png')" }}></div>
                                    <Link href="https://www.ngmedia.nl/foodsite">
                                        <a target="_blank" className='vieuw_site inner-element'>Bezoek de website<span><FaArrowRight /></span></a>
                                    </Link>
                                </div>
                            </div>
                        </Tilt>

                    </div>
                </div>
            </div>
        </section>
    )
}