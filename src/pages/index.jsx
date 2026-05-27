import HomeHero from "@/components/home/HomeHero";
import AboutPreview from "@/components/home/AboutPreview";
import SeasonalCollection from "@/components/home/SeasonalCollection";
import FromTheJournal from "@/components/home/FromTheJournal";

function HomePage() {
  return (
      <main>
        <HomeHero />
        <SeasonalCollection />
        <FromTheJournal />
        <AboutPreview />
      </main>
  );
}

export default HomePage;
