import Head from 'next/head'; 
import { BiChevronRight } from "react-icons/bi";

export default function Cv() {
  return (
    <>
      <Head>
        <title>About page</title> 
      </Head>

     
      <section class="bg-white page-start"> 
        <div class="container">
          <h1>ABOUT</h1>
          <p>Lo een opmaak er grafisch uitziet. De eerste woorden van de tekst luiden doorgaans Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>


        <div class="container-fluid">
          <div class="row grid-container pb-0">

            <div class="grid bg_shadow">
              <div class="img-grid" style={{ backgroundImage: "url('/images/kdh_teaser5.jpg')" }}></div>
              <div class="grid-overlay">
                <div class="arrow-box"><BiChevronRight /></div>
                <div class="grid-text-box-inside">
                  <h3>products that work 2</h3>
                  <p>I create digital products that work</p>
                </div>
              </div>
              <div class="grid-text-box bg-white">
                <h3>products that work 1 </h3>
                <p>I create digital products that work</p>
              </div>
            </div>

            <div class="grid bg_shadow">
              <div class="img-grid" style={{ backgroundImage: "url('/images/website_01.png')" }}></div>
              <div class="grid-overlay">
                <div class="arrow-box"><BiChevronRight /></div>
                <div class="grid-text-box-inside">
                  <h3>products that work 2</h3>
                  <p>I create digital products that work</p>
                </div>
              </div>
              <div class="grid-text-box bg-white">
                <h3>products that work 2</h3>
                <p>I create digital products that work</p>
              </div>
            </div>

            <div class="grid bg_shadow">
              <div class="img-grid" style={{ backgroundImage: "url('/images/client-thumb-standup1.jpg')" }}></div>
              <div class="grid-overlay">
                <div class="arrow-box"><BiChevronRight /></div>
                <div class="grid-text-box-inside">
                  <h3>products that work 2</h3>
                  <p>I create digital products that work</p>
                </div>
              </div>
              <div class="grid-text-box bg-white">
                <h3>products that work</h3>
                <p>I create digital products that work</p>
              </div>
            </div>

            <div class="grid bg_shadow">
              <div class="img-grid" style={{ backgroundImage: "url('/images/CTA_thumb.jpg')" }}></div>
              <div class="grid-overlay">
                <div class="arrow-box"><BiChevronRight /></div>
                <div class="grid-text-box-inside">
                  <h3>products that work 2</h3>
                  <p>I create digital products that work</p>
                </div>
              </div>
              <div class="grid-text-box bg-white">
                <h3>products that work</h3>
                <p>I create digital products that work</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="gradient_1">
        <div class="svg-content" style={{ backgroundImage: "url('/images/fluid_shape_2.svg')" }}></div>

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