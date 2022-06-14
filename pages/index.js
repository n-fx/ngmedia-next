import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';
import Hero from '../components/Hero';
import Devider from '../components/Devider';
import Devider_line_01 from '../components/Devider_line_01';
import Devider_line_02 from '../components/Devider_line_02';
import Tools from '../components/Tools';
import Rellax from "rellax";
import React, { useRef, useEffect } from "react";

import Website_01 from '../components/websites/website_01';
import Website_02 from '../components/websites/website_02';

import LogoSwiper from '../components/LogoSwiper';


import { FaExpand, FaArrowRight } from 'react-icons/fa';




export default function Home() {

  const rellaxRef = useRef();

  useEffect(() => {
    new Rellax(".rellax_01", {
      speed: -6
    });

    new Rellax(".rellax_02", {
      speed: -4
    });

  }, []);


  return (
    <>
      <Head>
        <title>NGmedia - Digitale content voor jou!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="NGmedia portfolio website van Ngmedia. Ik maak digitale content voor jouw! Van ontwerp tot webdesign, van video tot audio producties." />
      </Head>

      <Hero />

      {/* <div className="shape shape_01 rellax_01" style={{ backgroundImage: "url('/images/shape_01.svg')" }}></div>
      <div className="shape shape_02 rellax_02" style={{ backgroundImage: "url('/images/shape_02.svg')" }}></div>   */}
 
      <div className="container mt-5 pt-5" id="start_page">
        <div className="row m-auto ">
          <div className="p-4 col-12  text-white">
            <span className="subtitle text-center text-red">Een aantal voorbeeld websites</span>
            <h2 className="text-gradient text-center">Webdesign</h2>
          </div>
        </div>
      </div>

      <Website_01 />
      <Devider_line_02 />
      <Website_02 />
      <Devider_line_01 />

      <section className="bg_dark2" id="start_page">

        <div className="container py-5">
          <div className="row g-5">
            <div className="p-4 col-12 col-md-8 m-auto col-lg-6 text-white">
              <span className="subtitle text-start text-green">Logo design</span>
              <h3 className="text-gradient">Logo's laten ontwerpen?</h3>
              <p className="hero-text">Een logo laten ontwerpen kan heel snel en eenvoudig zijn. Maar soms ook juist niet en wil je net dat ene beetje meer. Je wil een bepaald gevoel bij je klant opwekken. Dit kan zijn dat je kies voor een zakelijke uitstraling of juist voor een wat losse uitstraling. In een oog opslag moet jouw klant of publiek kunnen zien waar jij voor staat en welke dienst jij levert.</p>
              <p>Ik denk graag met je mee, ik stel je de juiste vragen en samen komen we tot een eindresultaat waar we samen tevreden over zijn. Ik komt met voorbeelden en opzetjes. Ik zorg er uit eindelijk ook voor dat jouw logo geschikt is voor meerdere doeleinden, denk bijvoorbeeld aan je website maar ook briefpapier en social media. Ik zorg ervoor dat jouw logo in kleur wordt aangeleverd maar ook op een lighte en donkere achtergrond goed tot z'n recht komt.
              </p>

              <div className="button-primary">
                <Link href="/logo-design">
                  <a>
                    <span className="mas">Bekijk de voorbeelden</span>
                    <button type="button" name="Hover">
                      Bekijk de voorbeelden
                    </button>
                  </a>
                </Link>
              </div>

            </div>
            <div className="col-12 col-md-8 col-lg-6 m-auto p-5">
              <div className='logoswiper_container'>
                <LogoSwiper />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Devider_line_01 />
      <Tools />
      <Devider_line_02 />

    </>
  )
}
