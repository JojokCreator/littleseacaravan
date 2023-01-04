import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Seo from "../components/Seo";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-SBHDQ1210W`}
      />

      <Script id="googleanalytics" strategy="lazyOnload">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SBHDQ1210W', {
        page_path: window.location.pathname,
      });
  `}
      </Script>
      <Seo />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
