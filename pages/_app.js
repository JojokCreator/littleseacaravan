import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Seo from "../components/Seo";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <script data-goatcounter="https://littlesea.goatcounter.com/count"
        async src="//gc.zgo.at/count.js">
      </script>
      <Seo />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
