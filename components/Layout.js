import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ({ children }) => { 
    return (
        <>
            <Navbar />
            <main id="backtotop">
            {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;