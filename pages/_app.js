import Layout from '../components/Layout';
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.scss';
import { motion } from "framer-motion";


<link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>

function App({ Component, pageProps, router }) {

  return (
    <Layout>
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps}/>
      </motion.div>
    </Layout>
  )
}

export default App;