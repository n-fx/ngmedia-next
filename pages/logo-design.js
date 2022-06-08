import Link from 'next/link';
import Head from 'next/head';
import LogoSwiper from '../components/LogoSwiper';
import Devider from '../components/Devider';


export default function Logo() {
   return (
      <>  
         <Head>
            <title>NGmedia - Logo Design</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="Een logo laten ontwerpen kan heel snel en eenvoudig zijn. Maar soms ook juist niet en wil je net dat ene beetje meer. Je wil een bepaald gevoel bij je klant opwekken. Ik denk graag met je mee." />
         </Head>
 
         <section className="bg-dark2 text-white page-start">

            <div className="container pb-0">
               <div className="row">
                  <div className="col-lg-6 px-3">

                     <h1>Logo <span className='text-red'>Design</span></h1>
                     <p>Een logo laten ontwerpen kan heel snel en eenvoudig zijn. Maar soms ook juist niet en wil je net dat ene beetje meer. Je wil een bepaald gevoel bij je klant opwekken. Dit kan zijn dat je kies voor een zakelijke uitstraling of juist voor een wat losse uitstraling. In een oog opslag moet jouw klant of publiek kunnen zien waar jij voor staat en welke dienst jij levert.
                     </p>

                     <p>Ik denk graag met je mee, ik stel je de juiste vragen en samen komen we tot een eindresultaat waar we samen tevreden over zijn. Ik komt met voorbeelden en opzetjes. Ik zorg er uit eindelijk ook voor dat jouw logo geschikt is voor meerdere doeleinden, denk bijvoorbeeld aan je website maar ook briefpapier en social media. Ik zorg ervoor dat jouw logo in kleur wordt aangeleverd maar ook op een lighte en donkere achtergrond goed tot z'n recht komt.</p>

                     <div className="button-primary ms-0">
                        <Link href="/cv">
                           <a>
                              <span className="mas">Bekijk Mijn CV</span>
                              <button type="button" name="Hover">
                                 Bekijk Mijn CV
                              </button>
                           </a>
                        </Link>
                     </div>
                  </div>

                  <div className="col-lg-6">
                     <LogoSwiper />
                  </div>

               </div>
            </div>
         </section>
         {/* <Devider /> */}


         <section className="bg_green_light overflow-hidden">
            <div className="container-fluid  p-0">
               <div className="svg-content" style={{ backgroundImage: "url('/images/fluid_shape_dark.svg')" }}></div>
               <div className="grid-container">
                  <div className="row">

                     <span className="subtitle text-center text-blue">Fictive voorbeeld logo's</span>
                     <h2 className="text-center pb-5">Een aantal voorbeeld logos op een rijtje</h2>

                  </div>

                  <div className="row row_left">
                     <div className="col-logo bg_shadow bg-white">
                        <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-1.svg')" }}></div>
                     </div>

                     <div className="col-logo bg_shadow bg-white">
                        <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-2.svg')" }}></div>
                     </div>

                     <div className="col-logo bg_shadow bg-white">
                        <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-3.svg')" }}></div>
                     </div>

                     <div className="col-logo bg_shadow bg-white">
                        <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-4.svg')" }}></div>
                     </div>

                     <div className="col-logo bg_shadow bg-white">
                        <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-5.svg')" }}></div>
                     </div>
                  </div>

                  <div className="row row_right">
                     <div className="col-logo bg_shadow bg-white">
                        <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-6.svg')" }}></div>
                     </div>

                     <div className="col-logo bg_shadow bg-white">
                        <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-7.svg')" }}></div>
                     </div>

                     <div className="col-logo bg_shadow bg-white">
                        <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-8.svg')" }}></div>
                     </div>

                     <div className="col-logo bg_shadow bg-white">
                        <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-9.svg')" }}></div>
                     </div>

                     <div className="col-logo bg_shadow bg-white">
                        <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-12.svg')" }}></div>
                     </div>
                  </div>


               </div>
            </div>
         </section>



         <div className="container-fluid">
            <div className="grid-container">

               <div className="row">
                  <span className="subtitle text-center text-green">Light op donker</span>
                  <h2 className="text-center pb-5 text-white">Logo's geschikt voor een donkere achtergrond</h2>
               </div>

               <div className="row row_right">
                  <div className="col-logo bg_dark">
                     <div className="img-logo bg_shadow" style={{ backgroundImage: "url('/images/logos/client-11.svg')" }}></div>
                  </div>

                  <div className="col-logo bg_dark">
                     <div className="img-logo bg_shadow" style={{ backgroundImage: "url('/images/logos/client-10.svg')" }}></div>
                  </div>

                  <div className="col-logo bg_dark">
                     <div className="img-logo bg_shadow" style={{ backgroundImage: "url('/images/logos/client-18.svg')" }}></div>
                  </div>

                  <div className="col-logo bg_dark">
                     <div className="img-logo bg_shadow" style={{ backgroundImage: "url('/images/logos/client-13.svg')" }}></div>
                  </div>

                  <div className="col-logo bg_dark">
                     <div className="img-logo bg_shadow" style={{ backgroundImage: "url('/images/logos/client-14.svg')" }}></div>
                  </div>
               </div>

               <div className="row row_left">
                  <div className="col-logo bg_dark">
                     <div className="img-logo bg_shadow" style={{ backgroundImage: "url('/images/logos/client-15.svg')" }}></div>
                  </div>

                  <div className="col-logo bg_dark">
                     <div className="img-logo bg_shadow" style={{ backgroundImage: "url('/images/logos/client-16.svg')" }}></div>
                  </div>

                  <div className="col-logo bg_dark">
                     <div className="img-logo bg_shadow" style={{ backgroundImage: "url('/images/logos/client-17.svg')" }}></div>
                  </div>

                  <div className="col-logo bg_dark">
                     <div className="img-logo bg_shadow" style={{ backgroundImage: "url('/images/logos/client-19.svg')" }}></div>
                  </div>

                  <div className="col-logo bg_dark">
                     <div className="img-logo bg_shadow" style={{ backgroundImage: "url('/images/logos/client-20.svg')" }}></div>
                  </div>
               </div>

            </div>
         </div>
      </>
   );
}