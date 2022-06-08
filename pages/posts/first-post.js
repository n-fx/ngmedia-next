import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
        <script src="https://connect.facebook.net/en_US/sdk.js" />
      </Head>
      <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload" onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)} />

      <section class="bg-white py-5">
        <div class="container">
          <div class="row">

            <h1>First Post</h1>
            <p>Lorem ipsum is een opvultekst die drukkers, zetters, grafisch ontwerpers en dergelijken gebruiken om te kijken hoe een opmaak er grafisch uitziet. De eerste woorden van de tekst luiden doorgaans Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

            <div class="button-primary">
              <Link href="/about">
                <a>
                  <span class="mas">about</span>
                  <button type="button" name="Hover">
                    about
                  </button>
                </a>
              </Link>
            </div>

            <h3>First Post</h3>
            <p>Lorem ipsum is een opvultekst die drukkers, zetters, grafisch ontwerpe opmaak er grafisch uitziet. De eerste woorden van de tekst luiden doorgaans Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>Lorem ipsu ijken gebruiken om te kijken hoe een opmaak er grafisch uitziet. De eerste woorden van de tekst luiden doorgaans Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>Lorem ipsum is een opvultekst die dru grafisch ontwerpers en dergelijken gebruiken om te kijken hoe een opmaak er grafisch uitziet. De eerste woorden van de tekst luiden doorgaans Lore m dolor sit amet, consectetur adipiscing elit</p>
            <p>Lorem ipsum is een opvultekst die drukkers, zetters, grafisch ont lijken gebruiken om te kijken hoe een opmaak er grafisch uitziet. De eerste woorden van de tekst luiden doorgaans Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

            <h3>First Post</h3>
            <p>Lorem ip ultekst die drukkers, zetters, grafisch ontwerpers en dergelijken gebruiken om te kijken hoe een opmaak er grafisch uitziet. De eerste woorden van de tekst luiden doorgaans Lorem  adipiscing elit</p>
            <p>Lorem ipsum is een opvultekst die  werpers en dergelijken gebruiken om te kijken hoe een opmaak er grafisch uitziet. De eerste woorden van de tekst luiden doorgaans Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>Lorem ipsum is een opvultekst die drukkers, zetters, grafisch ontwerpers en dergelijken gebruiken om te kijken hoe een opmaak er grafisch uitziet. De eerste woorden van de tekst luiden doorgaans Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>Lor afisch ontwerpers en dergelijken gebruiken om te kijken hoe een opmaak er grafisch uitziet. De eerste woorden va oorgaans Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </section>
    </>
  );
}