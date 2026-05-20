import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      {/* anything in here is injected into the <head> of each page */}
      {/* <link rel="stylesheet" href="" /> */}
    </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
