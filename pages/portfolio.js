// import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <script src="https://connect.facebook.net/en_US/sdk.js" />
      </Head>

      <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload" onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)} />

      <section class="bg-white page-start"> 
        <div class="container">
          <h1>PORFOLIO</h1>
          <p>Lo een opmaak er grafisch uitziet. De eerste woorden van de tekst luiden doorgaans Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>


        <div class="container-fluid">
          <div class="row grid-container">

            <div class="grid">
              <div class="img-grid" style={{ backgroundImage: "url('/images/kdh_teaser5.jpg')" }}></div>
              <div class="grid-overlay"></div>
              <div class="grid-text-box">
                <h3>products that work</h3>
                <p>I create digital products that work</p>
              </div>
            </div>

            <div class="grid">
              <div class="img-grid" style={{ backgroundImage: "url('/images/vmow_hero-1.jpg')" }}></div>
              <div class="grid-overlay"></div>
              <div class="grid-text-box">
                <h3>products that work</h3>
                <p>I create digital products that work</p>
              </div>
            </div>

            <div class="grid">
              <div class="img-grid" style={{ backgroundImage: "url('/images/client-thumb-standup1.jpg')" }}></div>
              <div class="grid-overlay"></div>
              <div class="grid-text-box">
                <h3>products that work</h3>
                <p>I create digital products that work</p>
              </div>
            </div>

            <div class="grid">
              <div class="img-grid" style={{ backgroundImage: "url('/images/CTA_thumb.jpg')" }}></div>
              <div class="grid-overlay"></div>
              <div class="grid-text-box">
                <h3>products that work</h3>
                <p>I create digital products that work</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="bg-white">
        <div class="container py-5">
          <div class="row g-5">
            <div class="col content">
              <h3>Column</h3>
              <p>Lorem ipsum is een opvultekst die drukkers, zetters, grafisch ontwerpers en dergelijken gebruiken om te kijken hoe een opmaak er grafisch uitziet. De eerste woorden van de tekst luiden doorgaans Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div class="col content">
              <h3>Column</h3>
              <p>Lorem ipsum is een opvultekst die drukkers, zetters, grafisch ontwerpers en dergelijken gebruiken om te kijken hoe een opmaak er grafisch uitziet. De eerste woorden van de tekst luiden doorgaans Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
}