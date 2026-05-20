import Image from "next/image";
import Link from "next/link";

function SeasonalCollection() {
  return (
    <section className="bg-[#F8F4F1] px-6 py-24">
      
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        
        {/* Left image */}
        <div className="overflow-hidden rounded-tr-[140px]">
          <Image
            src="/images/seasonal-flower.jpg"
            alt="Seasonal flowers"
            width={900}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right content */}
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[#8B5FBF]">
            Seasonal Collection
          </p>

          <h2 className="mt-4 font-serif text-5xl leading-tight text-[#2B2430]">
            Flowers inspired
            <br />
            by the season.
          </h2>

          <p className="mt-8 max-w-lg leading-8 text-[#6B6570]">
            Thoughtfully arranged bouquets using fresh seasonal flowers, designed to bring softness and calm into everyday life.
          </p>

          <Link
            href="/shop"
            className="mt-10 inline-block rounded-xl bg-[#8B5FBF] px-8 py-4 text-white transition hover:opacity-90"
          >
            Explore Collection
          </Link>
        </div>

      </div>

    </section>
  );
}

export default SeasonalCollection;
