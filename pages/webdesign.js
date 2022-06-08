import Head from 'next/head'; 
import Devider_line_01 from '../components/Devider_line_01';
import Devider_line_02 from '../components/Devider_line_02'; 
import HeroSmall from '../components/HeroSmall';
import Website_01 from '../components/websites/website_01';
import Website_02 from '../components/websites/website_02';
import Website_03 from '../components/websites/website_03'; 

export default function Webdesign() {
    return (
        <>
            <Head>
                <title>NGmedia - Webdesign</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Een aantal websites op een rij. Dit zijn demo websites om zo de verschillende mogelijkheden te laten zien. De websites zijn o.a. ontwikkeld met WordPress en/of React." />
            </Head>

            <HeroSmall />
            <section className="p-5" id="start_page"></section>
            <Website_01 />
            <Devider_line_02 />
            <Website_02 />
            <Devider_line_01 />
            <Website_03 />
            <Devider_line_02 /> 
        </>
    );
}