import Link from 'next/link';

export default function Custom404() {
    return (
        <>
            <main className="flex-shrink-0">
                <div className="container ">
                    <div className="hero">
                        <h1 className="mt-5">404 - Page Not Found<span className='point'>.</span></h1>
                        <Link href="/" className="return text-center text-white">Terug naar de hoofdpagina</Link>
                    </div>
                </div>
            </main>
        </>
    )
}