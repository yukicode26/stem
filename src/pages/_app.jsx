import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="stem. is a modern online flower shop offering elegant bouquets and floral arrangements for everyday moments."
        />
        <meta name="keywords" content="flowers, florist, bouquet, floral design, online flower shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <title>Stem. | To Make Every Moment Bloom</title>
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-V8NSXRNSEN" strategy="afterInteractive" />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-V8NSXRNSEN');
  `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
