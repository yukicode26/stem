// [ROOT DOMAIN] http://localhost:3000/


import Link from "next/link";
import Head from "next/head";
import HomeHero from "@/components/home/HomeHero";
import AboutPreview from "@/components/home/AboutPreview";
import SeasonalCollection from "@/components/home/SeasonalCollection";

function HomePage() {
  // LOGIC SECTION (JS)
  // console.log(newsId);

  return (
    // TEMPLATE SECTION (JSX)

    <>
      <Head>
        <meta
          name="description"
          content="stem. is a modern online flower shop offering elegant bouquets and floral arrangements for everyday moments."
        />
        <meta
          name="keywords"
          content="flowers, florist, bouquet, floral design, online flower shop"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <title>Stem. | To Make Every Moment Bloom</title>
      </Head>
      <main>
        <HomeHero />
        <SeasonalCollection />
        <AboutPreview />
      </main>
    </>
  );
}

export default HomePage;
