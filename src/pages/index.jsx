// [ROOT DOMAIN] http://localhost:3000/


import Link from "next/link";
import Head from "next/head";
import HomeHero from "@/components/home/HomeHero";
import AboutPreview from "@/components/home/AboutPreview";
import SeasonalCollection from "@/components/home/SeasonalCollection";
import FromTheJournal from "@/components/home/FromTheJournal";

function HomePage() {
  // LOGIC SECTION (JS)
  // console.log(newsId);

  return (
    // TEMPLATE SECTION (JSX)

    <>
      <main>
        <HomeHero />
        <SeasonalCollection />
        <FromTheJournal />
        <AboutPreview />
      </main>
    </>
  );
}

export default HomePage;
