// import Image from 'next/image';
import Head from 'next/head';
import { BiChevronRight } from "react-icons/bi";
import Tilt from 'react-parallax-tilt';

import Devider_line_01 from '../components/Devider_line_01';

export default function Graphics() {
    return (
        <>
            <Head> 
                <title>NGmedia - Graphics</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Graphic design of te wel grafisch vormgeven." />
            </Head>

            <section className="bg_blue_light page-start overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 text-white">
                            <h1 className=''>Graphics</h1>
                            <p>Graphic design of te wel grafisch vormgeven. Dit is natuurlijk een heel breed begrip. Het ontwerpen van websites is al weer heel anders dan de opmaak vav een magazin of het ontwerpen van een product verpakking. Ik heb in de afgelopen jaren zowel designs gemaakt voor websites, spandoeken, visite kaartes, product verpakkingen en huisstijlhandboeken</p>
                        </div>
                    </div>
                </div>

                <Tilt 
                    tiltAngleXInitial={0}
                    tiltAngleYInitial={0}
                    perspective={12000}
                    glareEnable={false}
                    transitionSpeed={500}
                    scale={1}
                >

                    <div className="container-fluid">
                        <div className="row grid-container">
                            <div className="grid graphics bg_shadow">
                                <div className="img-grid" style={{ backgroundImage: "url('/images/graphics/mok_bewerkt.png')" }}></div>
                                <div className="grid-overlay">
                                    <div className="arrow-box"><BiChevronRight /></div>
                                    <div className="grid-text-box-inside">
                                        <h3>Hier komt de titel</h3>
                                        <p>Hier komt de omschrijving</p>
                                    </div>
                                </div>
                                <div className="grid-text-box bg_dark">
                                    <h3>products that work</h3>
                                    <p>Hier komt de omschrijving</p>
                                </div>
                            </div>
                            <div className="grid graphics bg_shadow">
                                <div className="img-grid" style={{ backgroundImage: "url('/images/graphics/frisdrank_bewerkt.jpg')" }}></div>
                                <div className="grid-overlay">
                                    <div className="arrow-box"><BiChevronRight /></div>
                                    <div className="grid-text-box-inside">
                                        <h3>Hier komt de titel</h3>
                                        <p>Hier komt de omschrijving</p>
                                    </div>
                                </div>
                                <div className="grid-text-box bg_dark">
                                    <h3>Hier komt de titel</h3>
                                    <p>Hier komt de omschrijving</p>
                                </div>
                            </div>

                            <div className="grid graphics bg_shadow">
                                <div className="img-grid" style={{ backgroundImage: "url('/images/graphics/wok.jpg')" }}></div>
                                <div className="grid-overlay">
                                    <div className="arrow-box"><BiChevronRight /></div>
                                    <div className="grid-text-box-inside">
                                        <h3>Hier komt de titel 2</h3>
                                        <p>Hier komt de omschrijving</p>
                                    </div>
                                </div>
                                <div className="grid-text-box bg_dark">
                                    <h3>Hier komt de titel</h3>
                                    <p>Hier komt de omschrijving</p>
                                </div>
                            </div>

                            <div className="grid graphics bg_shadow">
                                <div className="img-grid" style={{ backgroundImage: "url('/images/graphics/thee_verpakking.jpg')" }}></div>
                                <div className="grid-overlay">
                                    <div className="arrow-box"><BiChevronRight /></div>
                                    <div className="grid-text-box-inside">
                                        <h3>Hier komt de titel 2</h3>
                                        <p>Hier komt de omschrijving</p>
                                    </div>
                                </div>
                                <div className="grid-text-box bg_dark">
                                    <h3>Hier komt de titel</h3>
                                    <p>Hier komt de omschrijving</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </Tilt>


                <Devider_line_01 />

                <div className="container text-white">
                    <div className="row gx-5">
                        <div className="col-12 col-lg-6 content">
                            <h3>Column</h3>
                            <p>Lorem ipsum is een opvultekst die drukkers, zetters, grafisch ontwerpers en dergelijken gebruiken om te kijken hoe een opmaak er grafisch uitziet. De eerste woorden van de tekst luiden doorgaans Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="col-12 col-lg-6 content">
                            <h3>Column</h3>
                            <p>Lorem ipsum is een opvultekst die drukkers, zetters, grafisch ontwerpers en dergelijken gebruiken om te kijken hoe een opmaak er grafisch uitziet. De eerste woorden van de tekst luiden doorgaans Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div className="svg-content" style={{ backgroundImage: "url('/images/fluid_shape_blue_light.svg')" }}></div>
            </section>
        </>
    );
}