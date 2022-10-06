import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'

function MyApp({ Component, pageProps }) {
  
    return ( 
    <>
    <Seo />
    <Navbar />
    <Component {...pageProps} />
    </>
    )
}

export default MyApp
